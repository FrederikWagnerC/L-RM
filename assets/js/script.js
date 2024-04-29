// TILE SWITCHER 

const mainImage = document.getElementById('mainImage')
const smallImageOne = document.getElementById('smallImageOne')
const smallImageTwo = document.getElementById('smallImageTwo')
const smallImageThree = document.getElementById('smallImageThree')
const smallImageFour = document.getElementById('smallImageFour')
console.log(smallImageOne);
function imageSwitcher() {
    let eventImageSrc = event.target.src

    mainImage.src = eventImageSrc
    console.log('asd')
}


smallImageOne.addEventListener('click', imageSwitcher)
smallImageTwo.addEventListener('click', imageSwitcher)
smallImageThree.addEventListener('click', imageSwitcher)
smallImageFour.addEventListener('click', imageSwitcher)
