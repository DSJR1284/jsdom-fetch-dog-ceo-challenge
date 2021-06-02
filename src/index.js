console.log('%c HI', 'color: firebrick')
const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray = []

ulContainer.addEventListener('click', handelClick)
dropDown.addEventListener('change', handelChange)

document.addEventListener('DOMContentLoaded', () => {
    // console.log(container)
})

// Challenge 1 
function getImages(){
    const img = fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => { 
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderElement(imgsArray)
    });
}
    // take this array of images
    // turn it into img elements 
    // append each img element to the DOM   
function createImgElement(imgs){
        return imgs.map((img) => {            
            let i = `<img src=${img}>`            
            return i
        });    
    
}

function renderImg(imgsArray){
        imgsArray.forEach(element => {
             renderElement(element)
        });
}

function renderElement(element){
    ulContainer.innerHTML += element
}

// Challenge 2
function getBreeds(){
    const breed = fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => { 
        breedsArray = Object.keys(breeds.message) 
        const breedsLis =createLiElements(breedsArray) 
        renderLis(breedsLis)   
        
    });
}

function createLiElements(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        // console.log(li)
        return li
    });
}

function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
    });
}

// Challenge 3 
function handelClick(event){
    if (event.target.nodeName === 'LI'){
        if (event.target.style.color === "blue"){
            event.target.style.color = "black"
        } else {
            event.target.style.color = "blue"
        }
    }  
} 

// Challege 4 
function handelChange(event){
    const letter = event.target.value    
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredLis = createLiElements(filteredBreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredLis)
}

getImages()
getBreeds()