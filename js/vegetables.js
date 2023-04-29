// ***** very Important Code for me *****
$('.owl-carousel').owlCarousel({
    loop: true, // loop item
    margin: 10, // margin between items
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {  // screen responsive
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },  
})

// ****** end ***** //

// start features
// ************** start ul li projects ****************************************//
let liFeature = document.querySelectorAll(".swicher-ul li");
let boxFeature = document.querySelectorAll(".box"); 
// console.log(imgsProjects)

liFeature.forEach( (li)=> {
    li.addEventListener("click", manageBox);
    li.addEventListener("click", removeActive);
});
// remove active class from all li and add to the current element you clicked on it
function removeActive(){
    liFeature.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
};
// manage box
function manageBox() {
    boxFeature.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.work).forEach((ele) => {
        ele.style.display = "block";
    })
};
// ************** End ul li projects ************************************//
// end features
