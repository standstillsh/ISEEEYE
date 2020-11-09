// script_members.js

var darkerEls = document.querySelectorAll(".darker"),
    slideEls = document.querySelectorAll(".slides"),
    _cuId = null,
    _exId = null;

// 요소 노드 목록을 배열로 치환.
darkerEls = Array.prototype.slice.call(darkerEls);
slideEls = Array.prototype.slice.call(slideEls);

function onMouseOverSlide(e) {

    var el = e.currentTarget, index = darkerEls.indexOf(el);

    for(var i = 0; i <= 4; i++) {
        darkerEls[i].classList.remove("selected");
        darkerEls[i].classList.add("unselected");
    }

    el.classList.remove("unselected");
    el.classList.add("selected");

}

for(var i = 0; i <= 4; i++) {
    darkerEls[i].addEventListener("click", onMouseOverSlide);
}