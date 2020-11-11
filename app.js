const currentImage = document.querySelector("#image");
const images = ["img/pic1.jpeg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg", "img/sott.jpg"];


function changeImage(){
    console.log("good morning brazil");
    let rnd = Math.floor(Math.random() * images.length);
    currentImage.src = images[rnd]
    console.log(rnd)
}