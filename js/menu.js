
var nav= document.querySelector(".nav");
var bar= document.querySelector(".bars");
var about_home= document.querySelector(".about-home");
var btn_about= document.querySelector(".site-title span");

var search_block= document.querySelector(".search-block");
var open_search= document.querySelector("#open-search");
var close_search= document.querySelector(".close-search");

//Navigation

bar.addEventListener("click", toggleMenu, false);

function toggleMenu() {
 nav.classList.toggle("open-nav");
 bar.classList.toggle("open-bar");
 document.body.classList.toggle("no-scroll");
}

//key support
window.addEventListener("keydown", function(e) {
    if(e.keyCode===36) {
      toggleMenu();
    }
});

//Search box 

open_search.addEventListener("click", function(e) {
    e.preventDefault();
   search_block.classList.add("open-search-box");
});

close_search.addEventListener("click", function(e) {
    e.preventDefault();
   search_block.classList.remove("open-search-box");
});


//open about on homepage and blog

btn_about.addEventListener("click", function() {
    about_home.classList.toggle("open-about-home");
});

//Initiate "Jekyll Simple Search" Plugin

SimpleJekyllSearch.init({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results'),
  dataSource: '/search.json',
});


//show notification for the desktop users

if(window.innerWidth > 1080) {
    function setNotAccess() {
        localStorage.setItem("status", "true");
    }
    if(!localStorage.getItem("status")) {
    var menuNotification= new Notification("Pro Tip!", {tag: "Tip", body: "you can open & close navigation menu using 'HOME' key"});
        setNotAccess();
    } else {
        //notification for returning user 
        }
    
}


