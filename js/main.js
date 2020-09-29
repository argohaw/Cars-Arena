
const breakpoint = [{
    breakpoint:1280,
    setting:{
        slidesToShow:4
    }
},
{
breakpoint:1009,
setting:{
    slidesToShow:3
}
},
{
breakpoint:720,
setting:{
    slidesToShow:3
}
},
{
breakpoint:460,
setting:{
    slidesToShow:1
}
}
]

/* first slider*/
$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});

/* second slider*/
$('.slider-two')
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidesToShow:3,
    slidesTOScroll:1,
    autoplaySpeed:3000,
    responsive: breakpoint
});

/* third slider*/
$('.slider-three')
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-three .prev",
    nextArrow:".site-slider-three .next",
    slidesToShow:4,
    slidesTOScroll:1,
    autoplaySpeed:3000,
    infinite:false,
    responsive: breakpoint
});

/* four slider*/
$('.slider-four')
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-four .prev",
    nextArrow:".site-slider-four .next",
    slidesToShow:4,
    slidesTOScroll:1,
    autoplaySpeed:3000,
    responsive: breakpoint
});

/* five slider*/
$('.slider-five')
.not(".slick-initialized")
.slick({
    prevArrow:".slider-brand .prev",
    nextArrow:".slider-brand .next",
    slidesToShow:4,
    slidesTOScroll:1,
    autoplaySpeed:3000,
    responsive: breakpoint
});
