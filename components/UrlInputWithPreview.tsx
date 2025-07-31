"use client";

import { useState } from 'react';
import { UrlPreview } from '@/components/UrlPreview';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface UrlInputWithPreviewProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  showPreview?: boolean;
  className?: string;
}

export function UrlInputWithPreview({
  label = "URL",
  placeholder = "Enter URL...",
  value = "",
  onChange,
  showPreview = true,
  className = ""
}: UrlInputWithPreviewProps) {
  const [url, setUrl] = useState(value);

  const handleUrlChange = (newValue: string) => {
    setUrl(newValue);
    onChange?.(newValue);
  };

  const isValidUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="space-y-2">
        <Label htmlFor="url-input">{label}</Label>
        <Input
          id="url-input"
          type="url"
          placeholder={placeholder}
          value={url}
          onChange={(e) => handleUrlChange(e.target.value)}
        />
      </div>

      {showPreview && url && isValidUrl(url) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Preview</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <UrlPreview url={url} className="w-full" />
          </CardContent>
        </Card>
      )}

      {url && !isValidUrl(url) && (
        <p className="text-sm text-red-500">Please enter a valid URL</p>
      )}
    </div>
  );
}
