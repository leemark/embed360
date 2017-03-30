# embed360

Easily embed multiple 360° photos into your webpages using the power and simplicity of [A-frame](https://aframe.io/). 

Step 1: Include the embed360.js script.

```html
<script src="path/to/embed360.js"></script>
```

Step 2: Add each 360 photo as HTML. Each one should have a container element and an image element as seen below.

```html
<div class="embed360">
  <img src="/path/to/image.jpg">
</div>
```

Step 3: Call the embed360() function, passing in a selector for your container element(s)

```javascript
embed360('.embed360');
```

See examples and documentation at https://leemark.github.io/embed360/.  