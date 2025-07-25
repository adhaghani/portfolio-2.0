# Markdown Support Documentation

Your blog now supports full **Markdown** and **HTML** formatting! Here's a comprehensive guide on how to use all the supported features:

## Supported Markdown Features

### Headers

Use `#` for different heading levels:

```markdown
# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header
```

### Text Formatting

**Bold text** using `**bold**` or `__bold__`
_Italic text_ using `*italic*` or `_italic_`
**_Bold and italic_** using `***text***`
~~Strikethrough~~ using `~~strikethrough~~`

### Links and Images

Create links: `[Link text](https://example.com)`
Embed images: `![Alt text](image-url.jpg)`

### Lists

**Unordered lists:**

```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

**Ordered lists:**

```markdown
1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item
```

### Code

**Inline code:** Use backticks \`like this\` for `inline code`

**Code blocks:**
\`\`\`javascript
function hello() {
console.log("Hello, World!");
}
\`\`\`

### Blockquotes

Use `>` for blockquotes:

```markdown
> This is a blockquote
> It can span multiple lines
>
> And have multiple paragraphs
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Horizontal Rules

Use `---` or `***` for horizontal rules:

```markdown
---
```

### HTML Support

You can also use HTML directly:

```html
<div class="custom-class">
  <p>This is HTML content</p>
  <strong>Bold HTML text</strong>
</div>
```

## Advanced Features

### Task Lists (GitHub Flavored Markdown)

```markdown
- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
```

### Tables with Alignment

```markdown
| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| Text         |      Text      |          Text |
```

### Syntax Highlighting

The blog supports syntax highlighting for many programming languages:

\`\`\`python
def fibonacci(n):
if n <= 1:
return n
return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

\`\`\`typescript
interface User {
name: string;
age: number;
email?: string;
}

const user: User = {
name: "John Doe",
age: 30
};
\`\`\`

## Best Practices

1. **Use Headers Properly**: Structure your content with proper heading hierarchy
2. **Code Blocks**: Always specify the language for syntax highlighting
3. **Images**: Use descriptive alt text for accessibility
4. **Links**: Use meaningful link text instead of "click here"
5. **Lists**: Use ordered lists for sequential steps, unordered for general items

## Example Blog Post

Here's an example of how a well-formatted blog post might look:

```markdown
# How to Build a React Component

React components are the building blocks of any React application. In this tutorial, we'll learn how to create reusable components.

## What You'll Learn

- Component basics
- Props and state
- Event handling
- Best practices

## Creating Your First Component

Let's start with a simple **Hello World** component:

\`\`\`jsx
function HelloWorld() {
return <h1>Hello, World!</h1>;
}
\`\`\`

### Adding Props

Props allow you to pass data to components:

\`\`\`jsx
function Greeting({ name }) {
return <h1>Hello, {name}!</h1>;
}
\`\`\`

> **Tip**: Always use descriptive prop names to make your components self-documenting.

## Conclusion

React components are powerful tools for building **maintainable** and **reusable** UI elements. Practice creating different types of components to master this concept!

---

_Happy coding!_ 🚀
```

This will render beautifully with proper formatting, syntax highlighting, and styling!
