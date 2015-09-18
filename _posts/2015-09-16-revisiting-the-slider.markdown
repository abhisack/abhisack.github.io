---
layout: post
title:  "Revisiting the Slider"
date: 2015-09-22 11:50:35
permalink: "blog/revisiting-the-slider"
tags: CSS, Javascript
description: "Creating a responsive, minimal and accessible slider."
featured-image: none
comments: true
codepen: false
---
Most of the beginners are interested in making sliders. I was too when I started out as a front-end devlopment learner. Since then we have seen many trends in our industry but slider is sort of classic, a never-ending trend. In past sliders used to be especially for desktops but now they are used on all size of viewports, be it on mobile, tablet, desktop or a retina screen. So today I'm going to share with you one of the way of making a responsive, user-accessible slider.

###Concept

The concept we are going to code the slider upon is same as of many other sliders on the web. We are going to align some slides(covering full width and height of it's container) next to each other(horizontally) and then we are going to wrap these slides in a slide container(covering full area of main container) and further we are going to wrap the slide container in a main container. To make the slider work we are going to make the slide container shift left and right by the width of the slide(s) on user's action.

Framing Markup

markup is simple and self- explanatory! We take a main container (`*&lt;main`) and a slide container (`.slide-con`) and put our slides (`.slide`) inside the slide container.


<pre>
<code class="language-markup">
 &lt;main>
    &lt;div class="slide-con">
        &lt;div class="slide slide-1">
            &lt;section>
                &lt;h1>SLIDE-1&lt;/h1>
            &lt;/section>
        &lt;/div>
        
        &lt;div class="slide slide-2">
            &lt;section>
                &lt;h1>SLIDE-2&lt;/h1>
            &lt;/section>
        &lt;/div>
        
        &lt;div class="slide slide-3">
            &lt;section>
                &lt;h1>SLIDE-3&lt;/h1>
            &lt;/section>
        &lt;/div>
        
        &lt;div class="slide slide-4">
            &lt;section>
                &lt;h1>SLIDE-4&lt;/h1>
            &lt;/section>
        &lt;/div>
        
    &lt;/div>
&lt;/main>
         </code>
         </pre>
We also need navigation buttons to shift slides left or right. So we put two of them, in a *nav*; one for going to next slide and the other for going to previous slide.

<pre>
<code class="language-markup">

&lt;nav>
&lt;button class="prev">&lt; &lt;/button>
&lt;button class="next">> &lt;/button>
&lt;/nav>
</code>
</pre>
             
             
###Styling 

I have included only the important CSS. Other is excluded. 

####The main container 
      
<pre>
<code class="language-css">

      main {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
}
</code>
</pre>

We give it a width and height of 100vw and 100vh respectively so that it covers full viewport. However, you can set these properties with the values you desire. Position is set to relative because we'd absolutely position navigation buttons later so we have to make sure that those buttons are positioned bound to the *main*.

Now comes the time to style slide container(`.slide-con`) in which we have to take extra care! (using flexbox for ease)

<pre>
<code class="language-css">

.slide-con {
    display: flex;
    width: 100%;
    height: 100%;
    transition: all .3s ease-out;
}
</code>
</pre>

we make it a flexbox by setting `display` to `flex` and give a width and height of `100%` so that it adapts the size of it's parent container i.e. *main*. Transition is given for the sake of sliding effect.

Now that the main things have been styled, we go on to style our navigation buttons using which we will slide our slides next and previous.


<pre>
<code class="language-css">

main nav button {
    position: absolute;
    top: 50%;
    color: #333;
    border: 0;
    outline: none;
    font-size: 2em;
    background: white;
    padding: 10px 20px;
    z-index: 15;
    transition: all .3s ease-out;
    cursor: pointer;
}
</code>
</pre>


As promised earlier, we've absolutely positioned both the buttons inside nav to 50% from the top. To make sure that the previous button stays at the left and the next button stays at the right, Do the following styling too-

<pre>
<code class="language-css">

.prev {
left: 0;
}
.next {
right: 0;
}
</code>
</pre>

Did you notice that we didn't even touch *nav* for the styling and just style the two buttons inside it. Guess why? Actually, this is because we have to make the *nav* here work as just as container (yes we could have put the buttons without this container too). and if we positioned it absolutely, or even set any padding to it, it would have blocked the access to slides' content. To conclude we need to be able to access both, the content of slides and navigation buttons so we style only the buttons not it's container.

####The slides

<pre>
<code class="language-css">

.slide {
    position: relative;
    flex: 1 0 100%;
    height: 100%;
    display: flex;
    /***for the content inside the slide***/
    align-items: center;
    justify-content: center;
    background-size: cover;
}
</code>
</pre>

We make each slide occupy full width and height of the slide container (`.slide-container`). We make it a flexbox and center it's content vetically and horizontally using the flexbox alignment properties.
Eariler, as we had set container of slides, `.slide-con` to be a `flexbox` it has by default `flex-wrap` property set to `no-wrap`. This makes all the slides align next to each other instead of aligning below each-other. Now, as these slides would overflow the slide container and a horizontal scrollbar will apeear, we set `overflow` of the main container *&lt;main>* to `hidden`- 

<pre>
<code class="language-css">

main {
overflow: hidden;
}
</code>
</pre>

The main styling finishes here.

###Adding Interactivity-

We are going to use vanilla JS.

Select the needed Elements first-

<pre>
<code class="language-javascript">

var sCon= document.querySelector(".slide-con");
var prev= document.querySelector(".prev");
var next= document.querySelector(".next");
</code>
</pre>

Add the event listeners on previous and next button, each calling different event handlers.

<pre>
<code class="language-javascript">

next.addEventListener("click", moveNext, false);
prev.addEventListener("click", movePrevious, false);
</code>
</pre>

Define event Handlers

<pre>
<code class="language-javascript">

function moveNext() {
    sCon.style.transform += "translateX(-100%)";
}

function movePrevious() {
    sCon.style.transform += "translateX(100%)";
}
</code>
</pre>


Each time we click next button, the slide container shifts 100% left revealing the next slide. Similarly when we click previous button slide container shifts 100% to the right revealing the previous slide. This works well but there are two problems and that too very big ones that we must take care of-

1. Unlike most of you may think; when previous and next buttons are clicked, the value of the `transformX(value)` doesn't increase or decrease. Infact chained translates are formed. When you click the next button, a transform of `translateX(-100%)` and when you click the previous button, a transform of `translateX(100%)` is added to the chain. This means that if a user clicks these buttons 20 times, a total of 20 translates will be added to the chain. That's not what we want. So we've gotta fix this.

2. Slide container keeps translating left or right as many times as a user clicks the navigation buttons i.e. if you are on last slide and click the next button, the slider still slides and if you are on first slide and click previous button, the slider still translates 100% to right each time we click this button. `We need to do something to make the slider slide only between the first and the last slide.`

Following is the demo including both the problems-

<p data-height="268" data-theme-id="15151" data-slug-hash="MayPyZ" data-default-tab="result" data-user="abhisack" class='codepen'>See the Pen <a href='http://codepen.io/abhisack/pen/MayPyZ/'>Revisiting Slider- Demo 1</a> by Abhishek Sachan (<a href='http://codepen.io/abhisack'>@abhisack</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The solutions of both the problems are-

<pre>
<code class="language-javascript">

//global vaiable
var tValue= 0;

function moveNext() {
    tValue -= 100;
    if(tValue > (sCon.children.length) * 100*-1) {
     sCon.style.transform= "translateX("+tValue+"%)";
    } else {
        tValue=(sCon.children.length-1) * 100*-1;
    }
}

function movePrevious() {
   
    tValue += 100;
    if(tValue <= 0) {
    sCon.style.transform= "translateX("+tValue+"%)";
    } else {
        tValue=0;
    }
}
</code>
</pre>


Notice how the code inside *moveNext()* and *movePrevious()* has changed. We have introduced a new global variable `tValue` having intial value 0 which decreases by `100` when next button is clicked and increases by the same when previous button is clicked. We use the same variable `tValue` as the value of `translateX (translateX(tValue))`. This helps us get rid of chained translates as now only the magnitude of `translateX` gets changed.

To solve the second problem we have used if else conditions which are self explanatory.

Now that all our problems are solved and everything is fair; for the sake of accessibility we also set an event listener to the window so that we can call *moveNext()* and movePrevious using left(keyCode=37) and right(keyCode=39) keyboard arrow buttons respectively.

<pre>
<code class="language-javascript">

window.addEventListener("keydown", function(e) {
    if(e.keyCode=== 39) {
        moveNext();
    } else if(e.keyCode=== 37) {
        movePrevious();
    }
});
</code>
</pre>


This makes our slider accessible.

###The Final Javscript Code
<pre>
<code class="language-javascript">

//global variables
var sCon= document.querySelector(".slide-con");
var prev= document.querySelector(".prev");
var next= document.querySelector(".next");
 var tValue= 0;

//Event Listeners

next.addEventListener("click", moveNext, false);
prev.addEventListener("click", movePrevious, false);
   
//Event Handlers

function moveNext() {
    tValue -= 100;
    if(tValue > (sCon.children.length) * 100*-1) {
     sCon.style.transform= "translateX("+tValue+"%)";
    } else {
        tValue=(sCon.children.length-1) * 100*-1;
    }
}

function movePrevious() {
   
    tValue += 100;
    if(tValue <= 0) {
    sCon.style.transform= "translateX("+tValue+"%)";
    } else {
        tValue=0;
    }
}

window.addEventListener("keydown", function(e) {
    if(e.keyCode=== 39) {
        moveNext();
    } else if(e.keyCode=== 37) {
        movePrevious();
    }
});
</code>
</pre>


###The Final demo

<p data-height="343" data-theme-id="15151" data-slug-hash="jbqeyv" data-default-tab="result" data-user="abhisack" class='codepen'>See the Pen <a href='http://codepen.io/abhisack/pen/jbqeyv/'>Revisiting the Slider- Demo</a> by Abhishek Sachan (<a href='http://codepen.io/abhisack'>@abhisack</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###Concluding

This was just an insight of how a responsive and accessible slider can be created with the lesser code possible. As I wanted to focus only on the concept of making a slider, I haven't included many features a slider is supposed to have such as dot navigations (or whatever we call them) and auto sliding. However, I'd like to have your views on what makes the kind of slider discussed in the post good or bad (like should it even be used in production?) and suggestions on how it could be made better in terms of responsiveness, accessibility and performance. 