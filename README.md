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

![Day 3 Output](output/Day3.png)


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


# Day 4_Task - HTML Table Task
 Book Your Car Service – HTML Form
A clean and responsive HTML form for booking car service appointments.

Features
Customer Info: Name, Email, Phone, City (with suggestions)

Vehicle Details: Reg. Number, Model, Make, Color, Year

Service Options: Checkboxes for services, pickup option, preferred time

Feedback: Rating slider and special instructions

Upload: RC document (file input)

Form Controls: Submit & Reset buttons

Tech Used
HTML5

Internal CSS

Flexbox for layout

Modern input types (email, date, color, range, etc.)

## Output Screenshot

![Day 4 Output](output/day4_task.png)



#  **Day-5 Task: Car Service Booking Form (HTML + CSS + JS)**

This **Day-5** project focuses on building a fully functional and visually styled **Car Service Booking Form** using HTML, CSS, and basic JavaScript. It demonstrates form structure, layout using Flexbox, input variety, and DOM manipulation for a real-world use case.

---

##  Features

-  Responsive layout using Flexbox
-  Clean UI with shadows, padding, and rounded corners
-  Semantic HTML: fieldsets and legends used for structure
-  Rich input elements:
  - Text, Email, Phone, Number
  - Color picker, Range slider with live value
  - DateTime picker
  - Checkbox and Radio buttons
  - File upload input
  - Datalist for auto-suggest city input
-  JavaScript:
  - Submit button: Prevents form default behavior & shows alert
  - Reset button: Custom reset alert

---

## 📷 Screenshot

> Replace below with your actual output screenshot

![Form Preview](output/day5.png)

---

## 🧠 Concepts Covered

| HTML/CSS Concept   | Description                                                  |
|--------------------|--------------------------------------------------------------|
| `<form>`           | Form wrapper element                                          |
| `fieldset` & `legend` | Semantic grouping of related inputs                     |
| `input` types      | `text`, `email`, `tel`, `file`, `range`, `datetime-local`    |
| `textarea`         | Multi-line input                                              |
| Flexbox            | Responsive row and column alignment                           |
| JavaScript         | `addEventListener`, `preventDefault()`, DOM manipulation      |

---


