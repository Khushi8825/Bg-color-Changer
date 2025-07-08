document.addEventListener("DOMContentLoaded",function(){
    const boxes = document.querySelectorAll(".empty-box");
    const reset = document.querySelector(".reset-button");
    const main = document.querySelector(".main");
    const color = window.getComputedStyle(main).backgroundColor;
    boxes.forEach(function(box){
        box.addEventListener("click",function(){
            document.body.style.backgroundColor = window.getComputedStyle(box).backgroundColor;
        });
    });
    reset.addEventListener("click",function(){
        document.body.style.backgroundColor = color;
    });
});
