# URL Preview Component

A React component that provides URL preview functionality with image and metadata extraction.

## Features

- ✅ **Image URL Preview**: Direct support for image URLs (jpg, png, gif, webp, svg)
- ✅ **Webpage Metadata**: Extracts Open Graph images, titles, and descriptions
- ✅ **Loading States**: Shows skeleton loaders while fetching
- ✅ **Error Handling**: Graceful fallbacks for failed requests
- ✅ **Responsive Design**: Works across different screen sizes
- ✅ **TypeScript Support**: Fully typed for better development experience

## Components

### 1. UrlPreview

Main component for displaying URL previews.

```tsx
import { UrlPreview } from '@/components/UrlPreview';

<UrlPreview 
  url="https://example.com/image.jpg" 
  className="w-full"
  showMetadata={true}
/>
```

**Props:**
- `url` (string): The URL to preview
- `className` (string, optional): Additional CSS classes
- `showMetadata` (boolean, optional): Whether to show title/description

### 2. UrlInputWithPreview

Input field with real-time URL preview.

```tsx
import { UrlInputWithPreview } from '@/components/UrlInputWithPreview';

<UrlInputWithPreview
  label="Course Thumbnail"
  placeholder="Enter image URL..."
  onChange={(url) => setImageUrl(url)}
  showPreview={true}
/>
```

**Props:**
- `label` (string, optional): Input label
- `placeholder` (string, optional): Input placeholder
- `value` (string, optional): Controlled input value
- `onChange` (function, optional): Value change handler
- `showPreview` (boolean, optional): Show/hide preview
- `className` (string, optional): Additional CSS classes

## API Route

The component uses a custom API route for fetching URL metadata:

**Endpoint:** `/api/url-preview`

**Parameters:**
- `url` (query): The URL to fetch preview data for

**Response:**
```json
{
  "image": "https://example.com/og-image.jpg",
  "title": "Page Title",
  "description": "Page description",
  "error": null
}
```

## Usage Examples

### 1. Course Card with URL Preview

```tsx
// Replace static Image component
<UrlPreview 
  url={course.thumbnail}
  className="aspect-video"
/>
```

### 2. Form with URL Input

```tsx
const [imageUrl, setImageUrl] = useState('');

<UrlInputWithPreview
  label="Course Thumbnail URL"
  value={imageUrl}
  onChange={setImageUrl}
  showPreview={true}
/>
```

### 3. Link Preview in Chat/Comments

```tsx
<UrlPreview 
  url={messageUrl}
  showMetadata={true}
  className="max-w-md"
/>
```

## Supported URL Types

- **Direct Images**: .jpg, .jpeg, .png, .gif, .webp, .svg
- **Webpages**: Any HTML page with Open Graph tags
- **Social Media**: Twitter, Facebook, LinkedIn posts
- **Video Platforms**: YouTube, Vimeo (shows thumbnail)
- **Documentation**: GitHub, npm packages

## Error Handling

The component handles various error scenarios:

- Invalid URLs
- Network timeouts (10 seconds)
- Missing images
- CORS issues
- Rate limiting

## Styling

The component uses Tailwind CSS classes and is compatible with your existing design system:

- Uses `Card`, `Skeleton` components from shadcn/ui
- Responsive aspect ratios
- Dark mode support
- Hover effects
- Loading animations

## Demo Page

Test the functionality at `/url-preview-demo` which includes:

- Interactive URL input
- Example URLs
- Usage documentation
- Live previews

## Security Considerations

- URLs are validated before processing
- Requests have timeout limits
- No server-side URL storage
- Client-side error handling
- Safe HTML parsing for metadata

## Performance

- Lazy loading for images
- Caching for repeated URLs
- Optimized with Next.js Image component
- Skeleton loaders for perceived performance
- Abort controllers for request management
