import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // Validate URL
    new URL(url);

    // Fetch the URL with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; URLPreview/1.0)',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || '';

    // If it's an image, return the URL directly
    if (contentType.startsWith('image/')) {
      return NextResponse.json({
        image: url,
        title: null,
        description: null,
        error: null
      });
    }

    // If it's HTML, parse for Open Graph tags
    if (contentType.includes('text/html')) {
      const html = await response.text();
      
      // Extract Open Graph and meta tags
      const imageMatch = html.match(/<meta[^>]*property=["\']og:image["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i);
      const titleMatch = html.match(/<meta[^>]*property=["\']og:title["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) ||
                        html.match(/<title[^>]*>([^<]*)<\/title>/i);
      const descriptionMatch = html.match(/<meta[^>]*property=["\']og:description["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) ||
                              html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i);

      const image = imageMatch ? imageMatch[1] : null;
      const title = titleMatch ? titleMatch[1] : null;
      const description = descriptionMatch ? descriptionMatch[1] : null;

      return NextResponse.json({
        image,
        title,
        description,
        error: null
      });
    }

    // Unsupported content type
    return NextResponse.json({
      image: null,
      title: null,
      description: null,
      error: 'Unsupported content type'
    });

  } catch (error) {
    console.error('URL preview error:', error);
    return NextResponse.json({
      image: null,
      title: null,
      description: null,
      error: 'Failed to fetch preview'
    });
  }
}
