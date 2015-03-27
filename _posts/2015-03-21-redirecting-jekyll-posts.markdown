---
layout: post
title:  "Redirecting Jekyll Posts To Other Links"
date: 2015-03-21 03:55:35
permalink: "/redirecting-jekyll-posts"
tags: CSS
description: "A short tip on redirecting your jekyll posts to other sites."
featured-image: "https://camo.githubusercontent.com/820c4eeae7e0e934ea25d23e8e72f2b1f43b4088/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f31323733322f313536363638352f31353761353632652d353039332d313165332d383939392d3037326262633231636334352e706e67"
comments: true
---


If you've a [Jekyll](http://jekylrb.com/) blog and you write not only on your blog but sometimes on other sites too;  you'd probably want to give a link to the post you wrote on other site so that your blog readers can know about it too. So what are the ways of doing this? 
For doing this we can use notification bar, pop-ups, redirection and many more ways. Redirection is the one 
which works best for this purpose. In this post I'm gonna show you how Jekyll 
posts can be redirected to other links.

We're going to [redirect](http://en.wikipedia.org/wiki/Meta_refresh) our post using <i>meta</i> tag with the attribute <i>http-equiv</i> which has <i>refresh</i> as its value. Here's how the code to be put under <i>head</i> looks.


<pre>
<code class="language-markup">

&lt;head http-equiv="refresh" content="0; url="http://example.com">
</code>
</pre>

The code above will redirect your posts to example.com in 0 seconds. But it doesn't make any sense as it will 
redirect all our posts to a particular link i.e. example.com while we need to redirect different posts to different links. We need to build a function using Jekyll's [endif](https://docs.shopify.com/themes/liquid-documentation/basics/operators) condition so that we can 
specify in the post's front matter that whether we want to redirect the post and if yes, to which link? Jekyll's endif 
solves our problem pretty awesomely.

Replace that code above with the code below-

<pre>
<code class="language-markup">

 &#123;if page.redirection %} 
 &lt;meta http-equiv="refresh" content="0; url= &#123;&#123;page.redirect-to}}">
 &#123;endif %}
</code>
</pre>

The code is self explanatory. if redirection will be set true in YAML the meta tag will be included in the post and 
page will redirect to the link set to <i>redirect-to</i>.

The last step is to start using the feature we created by putting following code in posts' front matter-

<pre>
<code class="language-git">

 ---
 redirection: true
 redirect-to: "http://example.com"
 ---
</code>
</pre>

PRO Tip: Don't keep the replica post on your blog empty. Write some introduction about the original post which the user is going to be redirected to. Also hint that "You're about to be redirected".

Now your visitors can access all your posts at one place. No matter where you write them. Cheers!