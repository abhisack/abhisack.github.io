---
layout: post
title:  "Making Awesome Show/Hide Follow Buttons"
date: 2014-11-03 17:39:55
tags: experiment
permalink: "blog/making-awesome-show-hide-follow-buttons"
description: "Have you ever wondered seeing the plugins like Addthis on Wordpress that how they really work. Well, today I'm going to share with you a simple plugin powered by jQuery & css which you of course will love to use on your site"
comments: true
---

Have you ever wondered seeing the plugins like Addthis on Wordpress that how they really work. Well, today I'm going to share with you a simple plugin powered by jQuery & css which you of course will love to use on your site but I guess not because it's not responsive. Infact this is the first thing I had experimented with jQuery back then when I began with it at the age of 15. So here we go.

###What We'll Need 

1. Font Awesome's CSS File

2. jQuery

3. Two Images (one as show button second as hide button) or you can make your buttons with markup & css.

###The Markup


<pre>
<code class="language-markup">

&lt;div class="social-plugin">

           &lt;div class="social-icons" id="demo">
                  &lt;a href=" #YOUR FACEBOOK URL" target="_parent">
                  &lt;i id="twitter"  class="fa fa-twitter fa-2x ">
                  &lt;/i>
                  &lt;/a>
                 &lt;a href="#YOUR GOOGLE PLUS URL">
                 &lt;i id="g"  class="fa fa-google-plus fa-2x ">
                 &lt;/i>
                 &lt;/a>
                 &lt;a href="#YOUR DRIBBLE PLUS URL">
                 &lt;i id="dribble" class="fa fa-dribbble fa-2x ">
                 &lt;/i>
                 &lt;/a>
                 &lt;a href="#YOUR PINTEREST PLUS URL">
                 &lt;i id="pin" class="fa fa-pinterest fa-2x ">
                 &lt;/i>
                 &lt;/a>
                 &lt;a href="mailto:you@domain.com">
                 &lt;i id="en"  class="fa fa-envelope fa-2x ">
                 &lt;/i>
                 &lt;/a>
                 &lt;img id="hide-btn" src="IMG/hide2.png"/>
             &lt;/div>

                &lt;img id="show-btn" src="IMG/hide21.png"/>

&lt;/div>

</code>
</pre>




###The CSS 

<pre class="line-numbers">
<code class="language-css">

#show-btn {
       position: absolute;
       top: 250;
       left: -5;
       width: 50px;
       height: 100px;
       border: 2px solid #53464D;
       -webkit-transition: all 400ms ease;
       -moz-transition: all 400ms ease;
       -o-transition: all 400ms ease;
       -ms-transition: all 400ms ease;
        transition: all 400ms ease;
}

#show-btn:hover {
         opacity: 0.9;
         border-radius: 5px;
         cursor: hand;
         margin-left: -5;
}

#hide-btn {

        width: 10px;
        height: 20px;
        margin: 5px 0px 0px 15px;
}
#hide-btn:hover {

            cursor: hand;
            margin-left: 14px;

}

.social-icons {
              position: absolute;
              top: 150px;
}

.social-icons i {
       display: block;
              margin-left: -10;
              text-decoration: none;
              text-align: center;
              width: 50px;
             height: 50px;
              padding: 5px;
              line-height: 50px;
              font-size: 2em;
              font-weight: 10px;
              background-color: #3D4037;
               border-bottom: 1px solid white;
              -webkit-transition: all 400ms ease-in-out;         
}
        

.social-icons a {
              color: white;
              text-decoration: none;
}

.social-icons #twitter:hover {
                     opacity: 0.7;
                     background-color: #00aced;
                     color: white;
                     padding-left: 100px;
               
}

.social-icons #g:hover {
                     opacity: 0.7;
                     background-color: #dd4b39;
                     color: white;
                     padding-left: 100px;

}


.social-icons #dribble:hover {
                     opacity: 0.7;
                     background-color: #ea4c89;
                     color: white;
                     padding-left: 100px;
}


.social-icons #pin:hover {
                     opacity:0.7;
                     background-color: #cb2027;
                     color: white;
                     padding-left: 100px;
}


.social-icons #en:hover {
                     opacity:0.7;
                     background-color: #21759b;
                     color: white;
                     padding-left: 100px;
}

</code>
</pre>

###jQuery

<pre>
<code class="language-javascript">

$(document).ready(function(){
$(".social-icons").animate({left:'-250px'});
$("#show-btn").click(function(){
     $("#show-btn").hide("fast");
    $(".social-icons").animate({left:'0px'});
  });
$("#hide-btn").click(function(){
  
    $(".social-icons").animate({left:'-250px'});
    $("#show-btn").fadeIn("slow");
});
});
</code>
</pre>

###The Output

<img src="/img/port/follow.jpg">

###Clone Using GIT

<pre>
<code class="language-git">
git clone https://gituhub.com/abhisack/awesome-follow-buttons.git
</code>
</pre>


