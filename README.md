Day1: 
This HTML page is structured to help you understand the layout and usage of various tags commonly used in web development.
Below are the tag i used in this project

     Tag                              Description 

`<!DOCTYPE html>`            Declares the HTML5 document type 
 `<html>`                    Root element of the page 
 `<head>`                    Contains meta-information like charset and title 
 `<meta>`                    Defines metadata and responsiveness 
 `<title>`                   Sets the title of the page 
 `<body>`                    Contains all visible content 
 `<header>`                  Defines the top section (heading + nav) 
 `<nav>`                     Contains navigation links 
 `<a>`                       Used for linking to page sections 
 `<section>`                 Organizes content into logical blocks 
 `<h1>`, `<h2>`              Headings for title and subsections 
 `<img>`                     Embeds an image 
 `<ul>`, `<ol>`, `<li>`      Unordered/Ordered lists with list items 
 `<audio>` / `<video>`       Embeds audio and video players 
 `<source>`                  Provides file sources for media 
`<hr>`                       Horizontal line for separation 
 `<footer>`                  Footer content (credits/info) 

 # Day 2: Nested List HTML Task

This HTML page demonstrates the structure and styling of **nested ordered and unordered lists** using various list types in HTML. It helps understand how different `list-style-type` values and nesting levels work together to create structured lists.

## 📄 File Name:
`day2_task.html`

##  Description:

This page contains a nested list structure including:

- Roman numeral ordered lists (`type="I"`)
- Alphabetic ordered lists (`type="a"`)
- Numeric ordered lists (`type="1"`)
- Unordered lists with `circle` and `disc` styles

The list demonstrates deep nesting, combining both `<ol>` (ordered list) and `<ul>` (unordered list) elements to represent hierarchical data.

## Tags & Attributes Used:

| Tag / Attribute              | Description                                                 |
|-----------------------------|-------------------------------------------------------------|
| `<!DOCTYPE html>`           | Declares the HTML5 document type                            |
| `<html lang="en">`          | Sets the language to English                                |
| `<meta charset="UTF-8">`    | Sets character encoding to UTF-8                            |
| `<meta name="viewport">`    | Ensures responsiveness on different devices                 |
| `<title>`                   | Sets the page title shown on browser tab                    |
| `<ol>`                      | Ordered List (supports types: `1`, `a`, `A`, `i`, `I`)       |
| `<ul>`                      | Unordered List (supports styles: `disc`, `circle`, `square`) |
| `<li>`                      | List item in both ordered and unordered lists               |
| `style="list-style-type:"`  | Inline style to change bullet type in unordered lists       |

---

## Output Screenshot

![Day 2 Output](output/day2_output.png)

# Day 3_Task - HTML Table Task

This project demonstrates the use of HTML table tags such as `rowspan`, `colspan`, and layout control using CSS to create a complex table structure letter.

## Features

- Complex HTML table with merged cells using `rowspan` and `colspan`
- CSS styling with `border-collapse`, `table-layout`, and column widths
- Semantic HTML using `<thead>` and `<tbody>`
- Fixed-width layout using `table-layout: fixed`

##  HTML Tags Used

| Tag        | Purpose                                          |
|------------|--------------------------------------------------|
| `<table>`  | Defines the table structure                      |
| `<tr>`     | Table row                                        |
| `<td>`     | Table data cell                                  |
| `<th>`     | Table header cell                                |
| `colspan`  | Merges cells horizontally across columns         |
| `rowspan`  | Merges cells vertically across rows              |
| `<thead>`  | Table header section                             |
| `<tbody>`  | Table body section                               |

## Output Screenshot

![Day 3 Output](output/day3_task.png)


## CSS Styling

```css
table {
    border-collapse: collapse;
    width: 28%;
    table-layout: fixed;
}

table, th, td {
    border: 1px solid black;
    text-align: center;
    padding: 8px;
}



