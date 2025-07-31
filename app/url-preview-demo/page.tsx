"use client";

import { useState } from 'react';
import { UrlPreview } from '@/components/UrlPreview';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UrlPreviewDemo() {
  const [url, setUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handlePreview = () => {
    setPreviewUrl(url);
  };

  const exampleUrls = [
    'https://img-c.udemycdn.com/course/750x422/5031058_14a5_5.jpg',
    'https://admin.wac.co/uploads/Features_Of_Python_1_f4ccd6d9f7.jpg',
    'https://miro.medium.com/v2/resize:fit:1192/1*jXusXvCfxECPU_Jh9S_E3w.jpeg',
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">URL Preview Demo</h1>
        <p className="text-muted-foreground">
          Test the URL preview functionality with image URLs or web pages
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Try URL Preview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter a URL (image or webpage)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePreview()}
            />
            <Button onClick={handlePreview} disabled={!url.trim()}>
              Preview
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Quick examples:</p>
            <div className="flex flex-wrap gap-2">
              {exampleUrls.map((exampleUrl, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setUrl(exampleUrl);
                    setPreviewUrl(exampleUrl);
                  }}
                >
                  Example {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {previewUrl && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Preview Result</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Basic Preview</h3>
              <UrlPreview url={previewUrl} className="w-full" />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">With Metadata</h3>
              <UrlPreview url={previewUrl} className="w-full" showMetadata />
            </div>
          </div>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Basic Usage:</h4>
            <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`import { UrlPreview } from '@/components/UrlPreview';

<UrlPreview url="https://example.com/image.jpg" />`}
            </pre>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">With Metadata:</h4>
            <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`<UrlPreview 
  url="https://example.com" 
  showMetadata={true}
  className="w-full max-w-md"
/>`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
