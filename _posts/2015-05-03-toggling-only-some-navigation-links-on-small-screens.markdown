---
layout: post
title:  "Toggling Only Some Navigation Links on Small Screens"
date: 2015-05-03 03:55:35
permalink: "blog/toggling-only-some-nav-links"
tags: CSS
description: "using nth-child selectors to hide less important links on smallscreens but toggle the most important ones."
featured-image: "https://camo.githubusercontent.com/820c4eeae7e0e934ea25d23e8e72f2b1f43b4088/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f31323733322f313536363638352f31353761353632652d353039332d313165332d383939392d3037326262633231636334352e706e67"
comments: true
codepen: true
---

Chris Coyier explains in his recent [post](https://css-tricks.com/the-priority-navigation-pattern/) why you may not want to hide all nav links on small screens. It's very likely that you'd intend to toggle less important nav links but show the most important ones. Here's my demo on his excellent idea. I used 'nth-child' selectors with the very popular, checkbox hack.

<p data-height="322" data-theme-id="0" data-slug-hash="jPPXBB" data-default-tab="result" data-user="abhisack" class='codepen'>See the Pen <a href='http://codepen.io/abhisack/pen/jPPXBB/'>jPPXBB</a> by Abhishek Sachan (<a href='http://codepen.io/abhisack'>@abhisack</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Resize your browser's window for the mobile view.



