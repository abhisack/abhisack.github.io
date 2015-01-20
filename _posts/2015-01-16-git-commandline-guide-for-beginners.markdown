---
layout: post
title:  "GIT Commandline Guide for Beginners"
date: 2015-01-16 17:39:55
tags: GIT
description: "A short list of useful git commands to help the beginners get started with GIT and Github."
comments: true
---
If you're [GIT](http://git-scm.com/) noob like me and having hard times using with it with Github(BTW, you can use this GUI [version](http://windows.github.com)), this is the right place you're at. I've made collection of few basic but useful git commands that would get you started.


###Cloning A Repo

Use follwing command to clone a repo via HTTPS. I recommend you to prefer HTTPS over SSH for convinience, expecially if you're a beginner.

<pre>
<code class="language-git">

git clone REPO URL
</code>
</pre>

#####Example

<pre>
<code class="language-git">

git clone https://github.com/h5bp/html5-boilerplate.git
</code>
</pre>

will clone html 5 boilerplate.

###Commiting And Pushing Changes

After you've cloned your directory, made some changes to its files; you need to push your changes to remote respiratory now.
Here's how you do it.

1. CD to your local repo directory.

2. Commit changes and push to the remote respiratory using following commands

<pre>
<code class="language-git">

git add --all
#will add all the files in the local repo
commit --all -m "YOUR COMMIT MESSAGE"
#will reocrd all the changes made to your local repo
git push origin master
#will push changes to remote repo
</code>
</pre>

If you make changes to just a single file, you can use its name in place of "--all". For example if you made changes to index.html file of your repo. Use simply this.

<pre>
<code class="language-git">

git add index.html
commit index.html -m "YOUR COMMIT MESSAGE"
git push origin master
</code>
</pre>

Note: "origin master" is used here to specify branch name. You could use gh-pages or any other branch depending on your need.

### Switching Between Branches

<pre>
<code class="language-git">

git check out {branch name}
</code>
</pre>

Switches you branch from current to the specified one.

I hope I could help I could help you getting started with GIT. If you still encounter any problem, you're welcomed to share with me below. I'm here to help you with my best. Cheers!


