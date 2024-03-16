

const images = document.querySelectorAll(".banner-img img");

let image_count = 0;

let intervel = null;

function initialstage() {

    if (images.length > 0) {
        images[image_count].classList.add("displayimage");
        intervel = setInterval(next,5000);
    }
}

function show_slide(index) {

    if (index >= images.length) {
        image_count = 0;
    }
    else if (index < 0) {
        image_count = images.length - 1;
    }

    images.forEach(slide => {
        slide.classList.remove("displayimage");
    });
    // images[image_count].style.scrollBehavior = "smooth";

    images[image_count].classList.add("displayimage");

}


function preview() {
    clearInterval(intervel);
    image_count--;
    show_slide(image_count);
}


function next() {
    image_count++;
    show_slide(image_count);
}

initialstage();

let pro_images = document.querySelectorAll(".item-1 img");
pro_images.forEach(i => {
    i.addEventListener("mouseover", () => {
        i.classList.add("zoom")
    });
    i.addEventListener("mouseout", () => {
        i.classList.remove("zoom")
    });
})

// console.log(pro_images)


// let all_pro = document.querySelector(".items");

// all_pro.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     all_pro.scrollLeft += e.deltaY;
// });

// let move_left = document.querySelector(".move-left");
// let move_right = document.querySelector(".move");

// move_left.addEventListener("click", () => {
//     all_pro.style.scrollBehavior = "smooth";
//     all_pro.scrollLeft -= 1300;
// })

// move_right.addEventListener("click", () => {
//     all_pro.style.scrollBehavior = "smooth";
//     all_pro.scrollLeft += 1300;
// })

let all_pro = document.querySelectorAll(".items");
let move_left = document.querySelectorAll(".move-left");
let move_right = document.querySelectorAll(".move");

for (let i = 0; i < all_pro.length; i++){  
    all_pro[i].addEventListener("mousemove", () => {
        move_right[i].addEventListener("click", () => {
            let a = all_pro[i];
            a.style.scrollBehavior = "smooth";
            a.scrollLeft += 1300;
        })
        move_left[i].addEventListener("click", () => {
            let a = all_pro[i];
            a.style.scrollBehavior = "smooth";
            a.scrollLeft -= 1300;
        })
    })
}
