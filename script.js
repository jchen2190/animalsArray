const animalPicDiv = document.getElementById('animal-pics');

// get video player div
const videoPlayerDiv = document.getElementById('video-player');
videoPlayerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${animalsArr[0].youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

// get h2 for animal name
const h2 = document.querySelector("h2");

// get p tag for description
const p = document.querySelector("p");
h2.textContent = animalsArr[0].name; // go to animals.js for "name" + "desc"
p.textContent = animalsArr[0].desc;

for (let i = 0; i < animalsArr.length; i++) {
    let animal = animalsArr[i];
    // animalPicDiv.innerHTML += animal.name + "<br>"
    let name = animal.name.replace(' ', '-');
    let imageTag = `<img src="images/${name}.jpg" onclick="swapAnimal(${i})">`;
    animalPicDiv.innerHTML += imageTag; // output the dynamically generated img tag
}

function swapAnimal(indx) {
    // alert(animalsArr[indx].name);
    h2.textContent = animalsArr[indx].name;
    p.textContent = animalsArr[indx].desc;
    videoPlayerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${animalsArr[indx].youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}