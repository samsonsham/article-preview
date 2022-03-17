# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](https://ik.imagekit.io/c5xc1x6srka/screenshot/screen-article-preview_SJvj8PyYz.png)

### Links

- Solution URL: [https://github.com/samsonsham/article-preview](https://github.com/samsonsham/article-preview)
- Live Site URL: [https://samsonsham.github.io/article-preview/](https://samsonsham.github.io/article-preview/)

## My process

- Set up SCSS file structure. Define all the styles given by style guide, including colours and font into SCSS files.
- Define components and setup corresponding DOM elements in HTML file.
- Mobile first, build each elements by with colours, alignment, and adjusting size.
- Add click event listener for share button.

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- JS

### What I learned

- Making slide up animation
- Making tooltip
- Learnt how vertical-align works

```html
<div class="wrapper">
  <div class="card-share">
    <!-- icons group -->
  </div>
</div>
```

```css
.wrapper {
  position: absolute;
  bottom: -4.5rem;
  width: 100%;
  height: 4.5rem;
  transition: 0.2s;
}
.show-box {
  transition: 0.2s;
  bottom: 0;
}
```

```js
const shareBtnListener = () => {
  const shareBtn = document.querySelector('.card-share-btn');
  const sharePopup = document.querySelector('.wrapper');

  shareBtn.addEventListener('click', () => {
    sharePopup.classList.toggle('show-box');
  });
};
```

### Useful resources

- [CSS 3 slide-in from left transition](https://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition) - I learnt slide-in animation from this.
- [CSS Tooltip - W3Schools](https://www.w3schools.com/css/css_tooltip.asp) - I learnt makeing tooltip with bottom arrow from this.
- [How to vertically align an image inside a div](https://stackoverflow.com/questions/7273338/how-to-vertically-align-an-image-inside-a-div) - I learnt how vertical align works from this.

## Author

- Website - [Samson Sham](https://samson-sham-portfolio.vercel.app)
- Frontend Mentor - [@samsonsham](https://www.frontendmentor.io/profile/samsonsham)
- Twitter - [@samson_sham](https://www.twitter.com/samson_sham)
