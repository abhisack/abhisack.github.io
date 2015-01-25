---
layout: post
title:  "Possibilities With CSS Target Pseudo Element"
date: 2015-01-24 17:39:55
tags: CSS
description: "A short list of useful git commands to help the beginners get started with GIT and Github."
comments: true
---

Target pseudo element isn't just what it sounds like. You'd be amazed to get to know it's powers and what It can do. I've recently been hanging around codepen building some stuff with this super hacky element and it made my week. Actually my passion for hacking with target element grew after [Sara](https://twitter.com/SaraSoueidan) wrote an article [here](http://blogs.adobe.com/dreamweaver/2015/01/using-the-css-target-selector-to-create-javascript-less-ui-effects.html).
Target enables you to go js-less to lessen burden on your webpages for good performences.
I'm taking two theories here to explain how target element can be useful.

1. "The goal is to have two apperences of a same element, first it's default apperence that's visible after the page loads and the other when the element is targeted(kinda awakened)"

2. "Traget is smart at awekening a sleeping element"

These theories might have explained you a lot of what I'm trying to tell you. But you might question, how to target any element? It's simple. Give that element an unique ID and then call or aweken this ID through any anchor element.

Supoose if we have a div with ID #nav having following CSS-

<pre>
<code class="language-css">

#nav {
opacity: 0;
display: none;
}
</code>
</pre>

We target the element from outside using a link like following:

<pre>
<code class="language-markup">

&lt;a href="#nav">MENU&lt;/a>
</code>
</pre>

So when you click the link above it awekens the element and sets to it the properties that look like following in your CSS.

<pre>
<code class="language-css">

#nav:target {
opacity: 1;
display: block;
}
</code>
</pre>

So what we did here? A div with ID #nav had opacity set to 0 and display set to none which means object was invisible. Later we targeted this element clicking the link located somewhere in the page and set new values to it's properties using :target element. To conclude, we faded in a hidden element.

The same you could have done with following JS too-

<pre>
<code class="language-javascript">

$("a").click(function){
$("#nav").animate({"opacity":"1","background-color": "#333"});
});
</code>
</pre>

But why to increase burden on your webpage until you can do the same with just pure CSS. Yeah, CSS is of course lighter than the JS in terms of performence. Also does it affect the webpages to be faster than they could be using bunch of JS. In other words, lesser the JS, faster is the webpage's speed.

####So What Are the Possibilities?

There're many awesome things you can create using target element, especially show/hide things. Like-

###Popup Blocks

Yeah! you don't need to burden your webpages with jquery's animations and fadeIns/fadeOuts to bring in the search block when user clicks any search icon/button on your site. Stick to pure CSS for the same.

Here's a search popup's demo I created being inspired by Sara Soueidan's article.

<p data-height="268" data-theme-id="0" data-slug-hash="KwqNbv" data-default-tab="result" data-user="abhisack" class='codepen'>See the Pen <a href='http://codepen.io/abhisack/pen/KwqNbv/'>CSS-Only Search Toggle with Target element</a> by Abhishek Sachan (<a href='http://codepen.io/abhisack'>@abhisack</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The same way you can create the lightboxes too.

###Awesome Search Blocks

Target element can be super useful in creating awesome ux search inputs like the one I created below-

<p data-height="268" data-theme-id="0" data-slug-hash="MYoELr" data-default-tab="result" data-user="abhisack" class='codepen'>See the Pen <a href='http://codepen.io/abhisack/pen/MYoELr/'>CSS-Only Search Toggle with Target element</a> by Abhishek Sachan (<a href='http://codepen.io/abhisack'>@abhisack</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

In these two demos the theories listed at the beginning of the post are applied. Note how we come out of the targeted element (clicking close buttons) by putting a second anchor element linking to '#'.

And a lots more you can imagine.

####Going Further
If you want to explore more about awesome things you can do with target pseudo element and escape needless JS, I recommend you reading [this post](http://css-tricks.com/tour-performant-responsive-css-site/) by Rajoshi Ghosh and [Tanmai Gopal](http://codepen.io/tanmaig). Also don't miss Sara's [article](http://blogs.adobe.com/dreamweaver/2015/01/using-the-css-target-selector-to-create-javascript-less-ui-effects.html) if you haven't read it already.
Created something awesome with target? Yes? Awesome!! I'm waiting for your demo.






