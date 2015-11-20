---
layout: post
title:  "Creating Simple Fullscreen Modals"
date: 2015-05-22 09:19:35
permalink: "blog/creating-simple-fullscreen-modals"
tags: CSS, JS
description: "A tutorial on how to create fullscreen modals and make them work as a framework."
featured-image: /img/post/modal.jpg
comments: true
codepen: false
---

You often have some content on your site that you don't want to show the user by default but show it when he demands it. Fullscreen modals is a very good idea to store such sub-content (like some message, hint or faq) that can't be fit into a tooltip. There're many articles out there teaching you to create modals (that fixed position thingy!). [Sara Soueidan](https://twitter.com/SaraSoueidan) has got good [article](tympanus.net/codrops/2013/11/07/css-overlay-techniques/) on it. I recommend you reading that article first if you're new to modal UI.

If you've been into front-end development world for some time, you'd probably be familiar with techniques used for creating modals. Let's have a look at how we create a basic modal-


###The Markup

<pre>
<code class="language-markup">
&lt;div class="modal">
             &lt;header>
                 &lt;h2>Title&lt;/h2>
                &lt;button class="btn-close">X&lt;/button>
            &lt;/header>
            &lt;section>
                    &lt;p>...&lt;/p>
            &lt;/section>
&lt;/div>
         </code>
         </pre>

Here we wrapped a *header* having *h2* & close button and a `section` having *p* element in a div classed *.modal*. H2 in the header will contain title of the modal while button classed *.btn-close* will handle the event to close/hide the modal (to be discussed later).

Let's style it-

<pre>
<code class="language-css">

/***Basic styling for modal***/

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    pointer-events: none !important;
}
         </code>
         </pre>


 By default we've hide the modal setting `opacity` to `0` and `pointer-events` to none. As it's a modal, it will be at the top most of your page having highest `z-index`. If we set only opacity to 0 but pointer-events isn't set to none, we won't be able to access the content behind the modal i.e. the main content of you webapp. So setting `pointer-events` to `none` is must here.

 To hide the the modal by default we could have also used `visibility: hidden`, `display: none` but doing it with opacity and pointer-events seems more promising.

 Now the main thing comes in. Accepting the user action! Let's suppose we've a button on which we'll listen to an event to set a new class *modal-is-open* to the modal.


<pre>
<code class="language-javascript">

var modal= document.querySelector(".modal");
var opener= document.querySelector(".btn-open");
var close= document.querySelector(".btn-close");

 opener.addEventListener("click", openModal, false);

function openModal(e) {
modal.classList.add("modal-is-opened");
    
 close.addEventListener("click", closeModal, false);
    e.preventDefault();
}

function closeModal(e) {
modal.classList.remove("modal-is-opened");
    e.preventDefault();
}
 </code>
 </pre>

 Here's how our new added class *modal-is-open* looks like-

<pre>
<code class="language-css">

.modal-is-opened {
    opacity: 1;
    pointer-events: auto !important;
  
}
 </code>
 </pre>
 Adding this new class sets opacity to 1 and pointer events to auto making the content of modal user-accessible.

 Here's a live demo-

 <p data-height="268" data-theme-id="15151" data-slug-hash="RPRozW" data-default-tab="result" data-user="abhisack" class='codepen'>See the Pen <a href='http://codepen.io/abhisack/pen/RPRozW/'>Creating Simple Fullscreen Modals</a> by Abhishek Sachan (<a href='http://codepen.io/abhisack'>@abhisack</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h3>But That's not Enough</h3>
 
 Well, we could pretty easily create our modal. As of the code above, When a button having *btn-open* class is clicked in our document, our modal opens. But hey,
 It doesn't solve our problem at all when we've more than one button to open the modals of same pattern but with different content. So are we going to use mutiple markups for multiple modals? Are we going to let only a single button having a *btn-open* class open the modal? Are we going to write multiple event handlers for different elements that are supposed to open a modal? Of course not! Who has got all that time when things could be done in much shorter code?
 Well, this is where `DOM Element Creation` `(document.createElement("element-name"))`, `Event Deligations` and [data-attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) come into play.

 Just imagine how lazy you'd feel to handle the three things together. First putting modal into your pages , then styling it and then using JS to call events to open it. Isn't that a long process. What if we could handle HTML part using JS? Well, it looks like we can. Javascript provides a way to create elements and append them (kinda push em) to any element. Here's how it goes for the markup we dealt with above-

 <pre>
<code class="language-javascript">

// creating div
var modal= document.createElement("div");
// creating header to be appended to div
var modalHeader= document.createElement("header");
// appending header to div
modal.appendChild(modalHeader);

// creating h2 to be appended to header
var header_title= document.createElement("h2");
// creating button to be appended to header
var header_btn= document.createElement("button");
// content for close button. Could have also used an icon
header_btn.textContent= "X";
// assigning .btn-close class to button inside header
header_btn.classList.add("btn-close");
// appending h2 to header
modalHeader.appendChild(header_title);
//appending buton to header
modalHeader.appendChild(header_btn);

//creating section element
var modal_section= document.createElement("section");
//appending section to div created earlier. This section falls after header
modal.appendChild(modal_section);
//creating p element to be append to section element
var modal_section_text= document.createElement("p");
//appending p element to section
modal_section.appendChild(modal_section_text);

//appending modal to body and giving it the class 'modal'
document.body.appendChild(modal);
modal.classList.add("modal");
 </code>
 </pre>

 Here, we created a `div`, `header`, `h2`, `button`, `section`, `p` and gave them classes we can style using css. Then we appended header to modal, h2 & button to header. On the other hand we appended section to modal and p to section. And finally append modal as a whole to body.

 Now comes the time to listen to the events-

 <pre>
<code class="language-javascript">

$(document).on("click", "[data-modal]", openModal);
function openModal(e) {
modal.classList.add("modal-is-opened");
    close.addEventListener("click", closeModal, false);
    e.preventDefault();
}

var close= header_btn;
function closeModal() {
  modal.classList.remove("modal-is-opened");
}
 </code>
 </pre>

 Notice how is this code different from the one we had above. Here, Line 1 isn't native JS, it's jQuery. We used jQuery's `on` method instead of native javascript's `.addEventListener` method to make Event Deligations easier to handle (To know what an event deligation is and how it helps see [this](https://learn.jquery.com/events/event-delegation/
) article).
Also notice that rather than using a class selector to run openModal() function, we use attribute selector *[data-modal]* to enable any element having data-modal attribute open the modal. Using data-attributes will make our modal work like a framework. 


 Let's also grab the the title and description (.modal > section > p) for the modal when any element having *data-modal* attribute is clicked. For this let's fall back to openModal() event handler/function we discussed above.

  <pre>
<code class="language-javascript">
function openModal(e) {
    var modalTitle= this.getAttribute("data-title");
    var modalText= this.getAttribute("data-text");
    header_title.textContent= modalTitle;
    modal_section_text.textContent= modalText;
    e.preventDefault(); 
    }
 </code>
 </pre>

 Here, we get the content sotred within *data-title* and *data-modal* of clicked element and set it to header_title (.modal > header > h2) and modal_section (.modal > section > p) respectively using *this* and *getAttribute* method.

###The Final Code


   <pre>
<code class="language-javascript">

//creating and appending modal elements
var modal= document.createElement("div");
var modalHeader= document.createElement("header");
modal.appendChild(modalHeader);


var header_title= document.createElement("h2");
var header_btn= document.createElement("button");
header_btn.textContent= "X";
header_btn.classList.add("btn-close");
modalHeader.appendChild(header_title);
modalHeader.appendChild(header_btn);

var modal_section= document.createElement("section");
modal.appendChild(modal_section);
var modal_section_text= document.createElement("p");
modal_section.appendChild(modal_section_text);

//appending modal to body and giving it the class 'modal'
document.body.appendChild(modal);
modal.classList.add("modal");

//seeting event deligation using jQuery's 'on' method
$(document).on("click", "[data-modal]", openModal);


//event handler to open modal
function openModal(e) {
    var modalTitle= this.getAttribute("data-title");
    var modalText= this.getAttribute("data-text");
    header_title.textContent= modalTitle;
    modal_section_text.textContent= modalText;
    modal.classList.add("modal-is-opened");


//assigning variable for header_btn
    var close= header_btn;
    close.addEventListener("click", closeModal, false);
    e.preventDefault();
}

//event handler to close modal
function closeModal() {
  modal.classList.remove("modal-is-opened");
}
 </code>
 </pre>

  Now see, everything is being controlled using three attributes; *data-modal* is being used to define the modal, *data-title* for the title and *data-text* for the main content (.modal > section > p). Now any element having *data-modal* (empty or set to true) will be listening to event-handler openModal().

  Here's the live demo-

  <p data-height="268" data-theme-id="0" data-slug-hash="bdeVmK" data-default-tab="result" data-user="abhisack" class='codepen'>See the Pen <a href='http://codepen.io/abhisack/pen/bdeVmK/'>A pen for post</a> by Abhishek Sachan (<a href='http://codepen.io/abhisack'>@abhisack</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###Summing It Up

UI components like modals using `data-attributes` can be made to work as a framework. Once you've finished wrting your code, everything can be handled so easily, even by a non-developer.



