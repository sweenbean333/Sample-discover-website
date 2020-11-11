//Gain access to DOM elements
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const background = document.querySelector('#background')
const smallImage = document.querySelectorAll('.small-image')

//Set a variable to keep track of 
let i = 2

//URLs of the small preview images
let smallImageArray = [
    "images/small1.png",
    "images/small2.png",
    "images/small3.png",
    "images/small4.png",
    "images/small5.png"
];

//URLS of the background images
let backgroundImageArray = [
    'images/bg1.png',
    'images/bg2.png',
    'images/bg3.png',
    'images/bg4.png',
    'images/bg5.png'
]

//Add event listeners for previous and next button and to each small preview image
prevBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);
smallImage.forEach(image  => {
    image.addEventListener('click', changeBgPreview)
});

//
function previous() {
    if(i > 0) {
        background.src = backgroundImageArray[i-1];
        smallImage[i].classList.remove('active');
        smallImage[i - 1].classList.add('active');
        i--;
        console.log(i)

    } //Cycles back to the end of the pictures
    else if(i == 0) { 
        i = smallImage.length - 1;
        document.querySelector('.active').classList.remove('active')
        smallImage[i].classList.add('active');
        background.src = backgroundImageArray[i];
    }
}

function next() {
    if(i < (backgroundImageArray.length - 1)) {
        background.src = backgroundImageArray[i+1];
        smallImage[i].classList.remove('active');
        smallImage[i + 1].classList.add('active');
        i++;
    }//Cycles back to the begginning of the pictures 
    else if(i == smallImage.length - 1) {
        i = 0;
        document.querySelector('.active').classList.remove('active')
        smallImage[i].classList.add('active');
        background.src = backgroundImageArray[i];
    }
};

//Allows each picture to be a button and change depeding on which picture is clicked

function changeBgPreview(e) {
    //Other way to get index of nodelist
    //[].indexOf.call(smallImage, e.target)
    //i = Array.prototype.indexOf.call(smallImage, e.target); //
    i = Array.from(smallImage).indexOf(e.target)  //Turns nodelist into array
    background.src = backgroundImageArray[i];
    document.querySelector('.active').classList.remove('active')
    if(smallImage[i].classList.contains('active')) {
        return
    } else {
        smallImage[i].classList.add('active');

    }
}

