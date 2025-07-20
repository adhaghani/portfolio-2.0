# Image Configuration for Supabase

## Next.js Configuration

Your `next.config.ts` has been configured to handle images from Supabase Storage with optimal settings:

### Features Added:

- ✅ **Supabase Storage Support**: Handles images from your Supabase project
- ✅ **Wildcard Supabase Domains**: Supports `*.supabase.co` for scalability
- ✅ **Modern Image Formats**: WebP and AVIF support for better compression
- ✅ **SVG Support**: Safely handles SVG images with CSP
- ✅ **Image Caching**: 60-second minimum cache TTL for performance

## Image Components

### 1. `OptimizedImage` Component

General-purpose optimized image component with loading states and error handling.

```tsx
import OptimizedImage from "@/components/ui/optimized-image";

<OptimizedImage
  src="https://your-supabase-url.supabase.co/storage/v1/object/public/blog-images/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={true} // For above-the-fold images
  quality={85}
  className="rounded-lg"
/>;
```

### 2. `BlogImage` Component

Specialized component for blog posts with predefined sizes and styling.

```tsx
import BlogImage from "@/components/ui/blog-image";

<BlogImage
  src="https://your-supabase-url.supabase.co/storage/v1/object/public/blog-images/image.jpg"
  alt="Blog image description"
  caption="Optional image caption"
  size="medium" // small, medium, large, full
  priority={false}
/>;
```

### 3. `ImageUpload` Component

Drag & drop image upload with Supabase Storage integration.

```tsx
import ImageUpload from "@/components/ui/image-upload";

<ImageUpload
  value={imageUrl}
  onChange={(url) => setImageUrl(url)}
  label="Upload Image"
  description="Drag and drop or click to upload"
/>;
```

## Usage in Blog Posts

### Cover Images

```tsx
// In your blog post template
<OptimizedImage
  src={post.cover_image_url}
  alt={post.title}
  width={1200}
  height={630}
  priority={true}
  className="w-full h-64 object-cover rounded-lg"
/>
```

### Inline Images in Content

```tsx
// For images within blog content
<BlogImage
  src="https://your-supabase-url.supabase.co/storage/v1/object/public/blog-images/content-image.jpg"
  alt="Content image"
  size="large"
  caption="This is an example image in the blog content"
/>
```

## Supabase Storage URLs

Your images will have URLs in this format:

```
https://eiclppoikpzmffrucwmw.supabase.co/storage/v1/object/public/blog-images/posts/filename.jpg
```

## Performance Optimizations

### Automatic Features:

- **Image Compression**: Automatic compression during upload
- **Format Conversion**: WebP/AVIF support for modern browsers
- **Lazy Loading**: Images load as user scrolls
- **Responsive Images**: Multiple sizes for different devices
- **Progressive Loading**: Blur placeholder while loading

### Manual Optimizations:

- Use `priority={true}` for above-the-fold images
- Choose appropriate `quality` (75-85 for most cases)
- Use correct `sizes` prop for responsive images
- Provide meaningful `alt` text for accessibility

## Storage Structure

Images are organized in your Supabase Storage:

```
blog-images/
├── posts/           # Blog post images
├── covers/          # Cover images
├── thumbnails/      # Auto-generated thumbnails
└── uploads/         # Direct uploads
```

## Environment Variables

Make sure these are set in your environment:

```env
NEXT_PUBLIC_SUPABASE_URL=https://eiclppoikpzmffrucwmw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Best Practices

1. **Image Sizes**: Upload high-quality images (1200px+ width)
2. **Alt Text**: Always provide descriptive alt text
3. **File Names**: Use descriptive, SEO-friendly filenames
4. **Compression**: Let the system handle compression automatically
5. **Formats**: Upload JPEG/PNG, system converts to WebP/AVIF
6. **Caching**: Images are cached for optimal performance

## Troubleshooting

If images aren't loading:

1. Check your Supabase Storage bucket is public
2. Verify the RLS policies allow public access
3. Ensure the domain is configured in `next.config.ts`
4. Check the image URL format is correct
