

let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener("click", myfunction);
function myfunction(){
	collapse.forEach(col=>col.classList.toggle("collapse-toggle"))
};

// With Masonry

new Masonry ("#posts .grid",{
	itemSelector:'.grid-item',
	gutter:20
});

//Swiper library initialization

const swiper = new Swiper('.swiper-container',{
	direction:'horizontal',
	loop: true,
	slidesPerView: 5,
	autoplay:{
		delay: 3000
	},
	// responsive the slider
    
    breakpoints : {
        '@0.75' : {
            slidesPerView : 2
        },
        // 888px
        '@1.00' : {
            slidesPerView : 3
        },
        // 1110px
        '@1.25' : {
            slidesPerView : 4
        },
        // 1330px
        '@1.50' : {
            slidesPerView: 5
        }
    }
})






