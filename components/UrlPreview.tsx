"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface UrlPreviewProps {
  url: string;
  className?: string;
  showMetadata?: boolean;
}

interface PreviewData {
  image: string | null;
  title: string | null;
  description: string | null;
  error: string | null;
}

export function UrlPreview({ url, className = '', showMetadata = false }: UrlPreviewProps) {
  const [previewData, setPreviewData] = useState<PreviewData>({
    image: null,
    title: null,
    description: null,
    error: null
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPreview = async () => {
      if (!url) return;

      try {
        setIsLoading(true);
        setPreviewData({ image: null, title: null, description: null, error: null });

        // Check if URL is already an image
        if (url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i)) {
          setPreviewData({
            image: url,
            title: null,
            description: null,
            error: null
          });
          return;
        }

        // For non-image URLs, try to fetch metadata
        const response = await fetch(`/api/url-preview?url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch preview');
        }

        const data = await response.json();
        setPreviewData(data);

      } catch (error) {
        console.error('Error fetching URL preview:', error);
        setPreviewData({
          image: null,
          title: null,
          description: null,
          error: 'Could not load preview'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  if (isLoading) {
    return (
      <Card className={`p-4 ${className}`}>
        <Skeleton className="w-full h-40 mb-3" />
        {showMetadata && (
          <>
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-3 w-full" />
          </>
        )}
      </Card>
    );
  }

  if (previewData.error) {
    return (
      <Card className={`p-4 text-center ${className}`}>
        <div className="text-muted-foreground text-sm">{previewData.error}</div>
      </Card>
    );
  }

  if (!previewData.image) {
    return (
      <Card className={`p-4 text-center ${className}`}>
        <div className="text-muted-foreground text-sm">No preview available</div>
      </Card>
    );
  }

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="relative aspect-video">
        <Image
          src={previewData.image}
          alt={previewData.title || "URL preview"}
          fill
          className="object-cover"
          onError={() => {
            setPreviewData(prev => ({
              ...prev,
              error: 'Failed to load image'
            }));
          }}
        />
      </div>
      {showMetadata && (previewData.title || previewData.description) && (
        <div className="p-4">
          {previewData.title && (
            <h3 className="font-semibold text-sm mb-1 line-clamp-1">
              {previewData.title}
            </h3>
          )}
          {previewData.description && (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {previewData.description}
            </p>
          )}
        </div>
      )}
    </Card>
  );
}
