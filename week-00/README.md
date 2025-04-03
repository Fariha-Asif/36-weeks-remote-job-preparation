# HTML & CSS Basics

## HTML Basics (Tags and Attributes)
HTML (HyperText Markup Language) is the standard language for creating web pages. It consists of various elements, defined using **tags** and **attributes**, to structure content on a webpage.

### 1. HTML TAGS
#### a. Semantic Tags
Semantic tags clearly define their meaning, improving readability and SEO. Examples:
- `<header>` - Defines a header section.
- `<nav>` - Defines navigation links.
- `<article>` - Represents an article.
- `<section>` - Defines a section in a document.
- `<footer>` - Defines a footer for a document.

#### b. Formatting Tags
Formatting tags help style text and content:
- `<b>` - Bold text.
- `<i>` - Italic text.
- `<u>` - Underlined text.
- `<mark>` - Highlights text.
- `<sup>` - Superscript text.
- `<sub>` - Subscript text.

#### c. Structural Tags
Structural tags help in organizing the web page:
- `<div>` - Defines a container.
- `<span>` - Inline container.
- `<br>` - Line break.
- `<hr>` - Horizontal rule.

### 2. Forms in HTML
Forms allow user input:
```html
<form action="submit.php" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="submit" value="Submit">
</form>
```
- `<input>` - Defines an input field.
- `<textarea>` - Defines a multi-line input field.
- `<button>` - Defines a clickable button.
- `<select>` - Defines a dropdown list.

### 3. Tables in HTML
Tables structure data in rows and columns:
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
```
- `<table>` - Defines a table.
- `<tr>` - Table row.
- `<th>` - Header cell.
- `<td>` - Data cell.

### 4. Media in HTML
Multimedia elements include:
- `<img>` - Displays an image.
- `<audio>` - Embeds audio content.
- `<video>` - Embeds a video file.
- `<iframe>` - Embeds another webpage.

Example:
```html
<img src="image.jpg" alt="Description" width="300">
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
</audio>
```

### 5. Head Tag, Meta Tag, and SEO in HTML
- `<head>` contains metadata like title and links.
- `<meta>` improves SEO and responsiveness.

Example:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML and CSS basics">
</head>
```

---

## CSS Basics
CSS (Cascading Style Sheets) is used to style HTML elements.

### 1. CSS Basics (Selectors, Colors, Fonts)
Selectors target HTML elements:
```css
p { color: blue; font-family: Arial; }
```
- `color` sets text color.
- `font-family` changes font.

### 2. Box Model
The box model consists of **content, padding, border, and margin**:
```css
div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

### 3. Inline vs Block vs Inline-Block
- **Inline**: `<span>`, `<a>` (width & height not applied).
- **Block**: `<div>`, `<p>` (full-width block).
- **Inline-Block**: Behaves like inline but respects width/height.

### 4. Flexbox
Used for flexible layouts:
```css
display: flex;
justify-content: center;
align-items: center;
```

### 5. Grid
CSS Grid for complex layouts:
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
```

### 6. Position
Controls element positioning:
- `static` (default)
- `relative`
- `absolute`
- `fixed`
- `sticky`

### 7. Animation, Scroll-based Animation, Transition, Transform, and 3D Transform
```css
@keyframes example {
  0% { background-color: red; }
  100% { background-color: blue; }
}
```

### 8. Media Queries
Used for responsiveness:
```css
@media (max-width: 600px) {
  body { background-color: lightblue; }
}
```
This completes an overview of HTML & CSS basics!