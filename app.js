var header = document.getElementById("header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var rs = document.getElementById("roadster");
var cyber = document.getElementById("cyber");
var model = document.getElementById("model");
var time = document.getElementById("time");
var speed = document.getElementById("speed");

        ms.onclick = function(){
            header.style.backgroundImage = "url(images/image-1.png)";
            model.innerHTML = " Model S";
            time.innerHTML = "2.15 s";
            speed.innerHTML = "60 mph";
        }

        m3.onclick = function(){
            header.style.backgroundImage = "url(images/image-2.png)";
            model.innerHTML = " Model 3";
            time.innerHTML = "1.9 s";
            speed.innerHTML = "70 mph";
        }
        mx.onclick = function(){
            header.style.backgroundImage = "url(images/image-3.png)";
            model.innerHTML = " Model X";
            time.innerHTML = "200 mph";
            speed.innerHTML = "Top Speed";
        }
        my.onclick = function(){
            header.style.backgroundImage = "url(images/image-4.png)";
            model.innerHTML = "Model Y";
            time.innerHTML = "396 mi s";
            speed.innerHTML = "Max Range";
        }

        rs.onclick = function(){
            header.style.backgroundImage = "url(images/image-14.jpg)";
            model.innerHTML = "Roadster";
            time.innerHTML = "19.88 s";
            speed.innerHTML = "250 mph";
        }

        cyber.onclick = function(){
            header.style.backgroundImage = "url(images/image-15.jpg)";
            model.innerHTML = "Cyber Trucks";
            time.innerHTML = "1 s";
            speed.innerHTML = "60 mph";
        }

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener ("click", () =>{
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
    }));