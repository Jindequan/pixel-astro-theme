---
title: "Markdown Format Example Guide"
description: "Complete example of how to write blog posts using standard Markdown format with Pixel Astro Theme"
publishDate: 2025-10-30
updateDate: 2025-10-30
tags: ["markdown", "tutorial", "formatting", "blogging", "example"]
author: "Jindequan"
featured: false
color: "#ffff00"
draft: false
---

# How to Write Blog Posts in Markdown Format

This is a complete example showing how to create blog posts using standard Markdown format instead of MDX. Use this format if you prefer writing in pure Markdown without custom components.

## 🎯 Front Matter Structure

Every Markdown file should start with YAML front matter enclosed in `---`:

```yaml
---
title: "Your Post Title"
description: "A brief description of your content"
publishDate: 2025-10-30
updateDate: 2025-10-30  # Optional
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
featured: false  # true for featured articles
color: "#00ff00"  # Theme color for the article
draft: false  # true to hide from production
---
```

## 📝 Basic Markdown Formatting

### Headings

Use `#` for headings (1-6 levels):

```markdown
# Main Title (H1)
## Section Title (H2)
### Subsection Title (H3)
#### Detailed Title (H4)
```

### Text Formatting

```markdown
**Bold text** and *italic text* and ***bold italic***.

`Inline code` for technical terms.

~~Strikethrough text~~ for corrections.
```

### Lists

#### Unordered Lists

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

#### Ordered Lists

```markdown
1. First step
2. Second step
3. Third step
```

### Links and Images

```markdown
[Link text](https://example.com)

![Image alt text](https://picsum.photos/seed/example/800/400.jpg)
```

## 🎨 Media Integration

While MDX allows custom components, Markdown still supports media through HTML:

### Images with Markdown

![Pixel Art Example](https://picsum.photos/seed/pixel-art-example/800/400.jpg)

### Videos via HTML

You can embed videos using HTML in Markdown:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

## 📊 Tables

Create tables using standard Markdown syntax:

| Feature | Support Level | Description |
|---------|---------------|-------------|
| **Headers** | ✅ | H1-H6 headings |
| **Lists** | ✅ | Ordered and unordered |
| **Images** | ✅ | With alt text |
| **Links** | ✅ | Internal and external |
| **Tables** | ✅ | Grid layouts |
| **Code** | ✅ | Inline and blocks |
| **HTML** | ✅ | Embedded HTML |

## 💻 Code Blocks

Use fenced code blocks with syntax highlighting:

```javascript
// Example JavaScript code
function greetUser(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to Pixel Astro Theme, ${name}`;
}

greetUser("Developer");
```

```bash
# Example shell commands
npm run dev
npm run build
npm run preview
```

## 📝 Blockquotes

Use `>` for blockquotes:

> **Important Note**: This is a blockquote. Use it for highlighting important information, quotes, or callouts.

> You can have multiple lines in a blockquote to create longer quoted sections.

## 🔗 Internal Links

Link to other articles in your blog:

- [Markdown Format Example](/articles/markdown-example.md)
- [Multimedia Integration Showcase](/articles/multimedia-showcase.md)

## 📋 Checklist for Markdown Posts

Before publishing, ensure your Markdown post includes:

- [ ] Proper YAML front matter with all required fields
- [ ] Clear, descriptive title and description
- [ ] Appropriate tags for categorization
- [ ] Alt text for all images
- [ ] Valid links (check if they work)
- [ ] Proper heading structure (H1 should be the title)
- [ ] Content preview (first paragraph should be engaging)

## 🚀 When to Use MDX vs Markdown

### Use Markdown when:
- You're writing standard blog posts
- You don't need custom Astro components
- You prefer pure Markdown syntax
- You want simpler, portable content

### Use MDX when:
- You need custom Astro components (Video, Audio, Gallery)
- You want interactive elements
- You need complex layouts
- You require custom JavaScript functionality

## 📈 SEO Best Practices

1. **Descriptive Title**: Make it clear and engaging
2. **Compelling Description**: Summarize the content effectively
3. **Relevant Tags**: Help with categorization and search
4. **Internal Links**: Connect to related content
5. **Image Alt Text**: Improve accessibility and SEO

## 🎨 Styling Tips

The Pixel Astro Theme automatically applies pixel styling to your Markdown content:

- **Headings** get pixel font styling and shadows
- **Text** has subtle pixel effects
- **Links** are themed with accent colors
- **Code blocks** get pixel-style syntax highlighting
- **Tables** have pixel-style borders and styling

---

**Pro Tip**: Start with Markdown format, and if you need more complex features later, you can easily convert to MDX by adding custom components where needed!