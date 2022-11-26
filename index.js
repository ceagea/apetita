
$( document ).ready( function() {
    for(i of $(".products .list li:nth-child(odd)")) {
        $(i).children("p").css("left", -1800)
        $(i).children("img").css("margin", "20px 20px 20px 0")
        $(i).append(`<div class="left-layer" style="width: ${$(i).children("img").width() + 20}px"></div`)
    }
    for(i of $(".products .list li:nth-child(even)")) {
        $(i).children("p").css("right", -1800)
        $(i).children("img").css("margin", "20px 0 20px 20px")
        $(i).append(`<div class="right-layer" style="width: ${$(i).children("img").width() + 20}px"></div`)
    }
});


/* left side \/ (i could do both sides in here but fuck jquery) */

let leftSideOffset = 30

$(document).on('mouseenter','.products .list li:nth-child(odd)',function(){
    $(this).children("p").animate({
        left: $(this).children("img").width()+leftSideOffset
    },
    400, 'linear');

    $(this).children("img").css("margin-left", 20)
    $(this).children(".left-layer").css("background-color", "whitesmoke")
    $(this).children(".left-layer").css("width", $(this).children("img").width()+leftSideOffset)
});

$(document).on('mouseleave','.products .list li:nth-child(odd)',function(){
    $(this).children("p").animate({
        left: "-1800px"
    },
    400, 'linear');

    $(this).children("img").css("margin-left", 0)
    $(this).children(".left-layer").css("background-color", "#fff")
    $(this).children(".left-layer").css("width", $(this).children("img").width()+leftSideOffset)
});

/* right side \/ */

let rightSideOffset = 30;

$(document).on('mouseenter','.products .list li:nth-child(even)',function(){
    $(this).children("p").animate({
        right: $(this).children("img").width() + rightSideOffset
    },
    400, 'linear');

    $(this).children("img").css("margin-right", 20)
    $(this).children(".right-layer").css("background-color", "whitesmoke")
    $(this).children(".right-layer").css("width", $(this).children("img").width() + rightSideOffset)
});

$(document).on('mouseleave','.products .list li:nth-child(even)',function(){
    $(this).children("p").animate({
        right: "-1800px"
    },
    400, 'linear');

    $(this).children("img").css("margin-right", 0)
    $(this).children(".right-layer").css("background-color", "#fff")
    $(this).children(".right-layer").css("width", $(this).children("img").width()+rightSideOffset)
});

