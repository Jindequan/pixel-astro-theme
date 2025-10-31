# 📝 Content Management Guide

## Overview

Pixel Astro Theme uses Astro's Content Collections for managing blog posts and other content. This provides type safety, performance optimization, and a great developer experience.

## Content Structure

```
src/content/
├── blog/                   # Blog posts
│   ├── post-1.md
│   ├── post-2.md
│   └── post-3.md
└── config.ts              # Content schema configuration
```

## Blog Posts

### Creating a New Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Amazing Blog Post"
description: "A brief description of your post content"
publishDate: 2024-01-15
updateDate: 2024-01-20
author: "Your Name"
tags: ["tutorial", "astro", "pixel-theme"]
color: "#00ff00"
featured: true
draft: false
---

# Your Blog Post Title

Write your content here in standard Markdown format!
```

### Front Matter Fields

#### Required Fields

- **title** (`string`): The post title
- **description** (`string`): SEO description and preview text
- **publishDate** (`Date`): Publication date

#### Optional Fields

- **updateDate** (`Date`): Last update date (shows "Updated" notice)
- **author** (`string`): Author name (defaults to site config)
- **tags** (`string[]`): Array of tags for categorization
- **color** (`string`): Custom theme color for the post
- **featured** (`boolean`): Show in featured section
- **draft** (`boolean`): Exclude from production build

### Date Formats

Use ISO format for dates:

```yaml
publishDate: 2024-01-15T10:00:00.000Z
# Or simple date
publishDate: 2024-01-15
```

### Tags and Categories

Tags help organize content:

```yaml
tags: ["web-development", "astro", "frontend", "tutorial"]
```

Tags will be:
- Displayed on article pages
- Used for filtering in search
- Shown in article cards

### Featured Articles

Featured articles appear prominently:

```yaml
featured: true  # Shows in featured section on homepage
color: "#ff6b35"  # Custom color for this article
```

### Draft Mode

Work on posts privately:

```yaml
draft: true  # Excluded from production builds
```

Draft posts will:
- Not appear in production builds
- Still work in development mode
- Be excluded from search and navigation

## Writing Content

### Markdown Support

Full CommonMark and GitHub Flavored Markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** and *italic text*

- Unordered list item
- Another item

1. Ordered list item
2. Another item

[Link text](https://example.com)

![Alt text](image.jpg)
```

### Code Blocks

Syntax highlighting with Prism:

```javascript
// JavaScript code
function hello() {
  console.log('Hello, pixel world!');
}
```

```css
/* CSS code */
.pixel-text {
  font-family: 'Doto', monospace;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
}
```

### Component Integration

Use Astro components in Markdown:

```markdown
Some markdown content here.

<Card title="Custom Card">
  This is embedded in a card component!
</Card>

More markdown content.
```

### Media Integration

#### Images

```markdown
![Alt text](/images/my-image.jpg)

![Responsive image](/images/hero.jpg "Hero Image")
```

#### Audio

```markdown
<Audio src="/audio/podcast.mp3" title="Episode 1" />
```

#### Video

```markdown
<Video
  src="/videos/demo.mp4"
  poster="/images/demo-poster.jpg"
  title="Demo Video" />
```

### Tables

```markdown
| Feature | Status | Notes |
|---------|--------|-------|
| Pixel Fonts | ✅ | Doto and Sixtyfour |
| Dark Mode | ✅ | Automatic detection |
| Responsive | ✅ | Mobile-first design |
```

### Blockquotes

```markdown
> This is a blockquote with important information.
> It can span multiple lines.
```

## Content Organization

### File Naming

Use descriptive filenames:

```
src/content/blog/
├── 2024-01-15-getting-started.md
├── 2024-01-20-advanced-customization.md
├── 2024-02-01-deployment-guide.md
└── tutorial-pixel-perfect-design.md
```

### Folder Structure

For complex content, use subdirectories:

```
src/content/
├── blog/
│   ├── tutorials/
│   │   ├── basic-setup.md
│   │   └── advanced-theming.md
│   ├── news/
│   │   ├── release-notes.md
│   │   └── announcements.md
│   └── reviews/
│       ├── framework-comparison.md
│       └── tool-recommendations.md
```

## SEO and Metadata

### SEO Best Practices

1. **Descriptive Titles**: Clear, concise titles
2. **Compelling Descriptions**: 150-160 character descriptions
3. **Relevant Tags**: Use consistent tag naming
4. **Update Dates**: Keep content current
5. **Custom Colors**: Use brand-appropriate colors

### Example SEO-Friendly Post

```yaml
---
title: "Complete Guide to Astro Performance Optimization"
description: "Learn how to optimize your Astro site for maximum performance with these proven techniques and best practices."
publishDate: 2024-01-15
updateDate: 2024-01-20
author: "Performance Expert"
tags: ["performance", "optimization", "astro", "web-vitals"]
color: "#00ff00"
featured: true
draft: false
---

# Complete Guide to Astro Performance Optimization

Optimize your Astro site for lightning-fast loading times...
```

## Content Management Workflow

### Development Workflow

1. **Create Draft**: Start with `draft: true`
2. **Write Content**: Use Markdown format
3. **Add Media**: Place images in `public/`
4. **Test Locally**: `npm run dev`
5. **Review**: Check appearance and functionality
6. **Publish**: Set `draft: false` and commit

### Publishing Process

```bash
# 1. Create new post
touch src/content/blog/my-new-post.md

# 2. Write content with draft: true

# 3. Test in development
npm run dev

# 4. When ready, publish
git add src/content/blog/my-new-post.md
git commit -m "Add: New blog post - My New Post"
git push
```

### Content Updates

For updating existing content:

```yaml
---
title: "Updated Post Title"
updateDate: 2024-01-25  # Add/update this field
---
```

## Advanced Features

### Content Collections API

Access content programmatically:

```astro
---
import { getCollection } from 'astro:content';

// Get all published posts
const allPosts = await getCollection('blog');

// Get only featured posts
const featuredPosts = await getCollection('blog', ({ data }) => data.featured);

// Get posts by tag
const tutorialPosts = await getCollection('blog',
  ({ data }) => data.tags?.includes('tutorial')
);

// Sort by date
const sortedPosts = allPosts.sort((a, b) =>
  new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
);
---
```

### Dynamic Routes

Create dynamic page routes:

```astro
---
// src/pages/posts/[slug].astro
import { getCollection, type CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

const { title, content } = Astro.props;
---

<h1>{title}</h1>
<div>{content}</div>
```

### Content Validation

Strong typing with Zod schemas:

```typescript
// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    color: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

## Best Practices

### Writing Guidelines

1. **Clear Structure**: Use proper heading hierarchy
2. **Scannable Content**: Use lists, bold text, and short paragraphs
3. **Descriptive Links**: Use meaningful link text
4. **Alt Text**: Provide alt text for all images
5. **Code Examples**: Use syntax highlighting for code

### Performance Tips

1. **Image Optimization**: Use appropriate image formats
2. **Content Length**: Keep posts focused and scannable
3. **Media Files**: Optimize audio and video files
4. **Lazy Loading**: Use lazy loading for heavy content

### SEO Tips

1. **Keyword Research**: Use relevant keywords naturally
2. **Meta Descriptions**: Write compelling descriptions
3. **Internal Linking**: Link to related content
4. **Regular Updates**: Keep content fresh and relevant

## Troubleshooting

### Common Issues

**Content not appearing:**
- Check `draft: false` is set
- Verify front matter syntax
- Run `npm run build` to check for errors

**Missing images:**
- Verify paths are correct (start with `/`)
- Check file existence in `public/`
- Clear browser cache

**Build errors:**
- Check front matter validation
- Verify required fields are present
- Use `astro check` for detailed errors

### Debug Tools

```javascript
// Log content data
console.log('Posts:', await getCollection('blog'));

// Check front matter
console.log('Post data:', post.data);

// Validate schema
import { validateCollection } from '@astrojs/zod';
```

This content management system provides a powerful yet simple way to manage your blog content with full type safety and performance optimization! 🚀