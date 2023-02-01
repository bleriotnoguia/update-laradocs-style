// 
var title = document.querySelector(".docs_main #main-content :nth-child(1)")

var summary = document.querySelector(".docs_main #main-content :nth-child(2)")

var rightMenu = document.createElement("div");

document.querySelector("body section").insertBefore(rightMenu, document.querySelector("body section div"))

rightMenu.appendChild(title)
rightMenu.appendChild(summary)
rightMenu.setAttribute("id", "right-menu")