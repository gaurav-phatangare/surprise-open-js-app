
var drawerTop = document.querySelector(".drawer-top");
var drawerBottom = document.querySelector(".drawer-bottom");
var drawerLeft = document.querySelector(".drawer-left");
var drawerRight = document.querySelector(".drawer-right");
var openBtn = document.querySelector(".open-btn");

var currentStateLeft = 'closed'
var currentStateRight = 'closed'
var currentStateTop = 'closed'
var currentStateBottom = 'closed'

openBtn.addEventListener("click",()=>{

    if(currentStateLeft == 'open'){
        currentStateLeft = 'closed';
        drawerLeft.classList.add("open");

        currentStateRight= 'closed';
        drawerRight.classList.add("open");
        
        currentStateTop= 'closed';
        drawerTop.classList.add("op");
         
        currentStateBottom= 'closed';
        drawerBottom.classList.add("op");

    }else{
        currentStateLeft = 'open';
        drawerLeft.classList.add("hidden");
        drawerLeft.classList.remove("open");

        currentStateRight = 'open';
        drawerRight.classList.add("hidden");
        drawerRight.classList.remove("open");

        currentStateTop = 'op';
        drawerTop.classList.add("hi");
        drawerTop.classList.remove("op");

        currentStateRight = 'op ';
        drawerBottom.classList.add("hi");
        drawerBottom.classList.remove("op");

    }
});

