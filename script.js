const animalPicDiv = document.getElementById('animal-pics');
const videoPlayerDiv = document.getElementById('video-player');
videoPlayerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${animalsArr[0].youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

const h2 = document.querySelector("h2");
const p = document.querySelector("p");
h2.textContent = animalsArr[0].name;
p.textContent = animalsArr[0].desc;

for (let i = 0; i < animalsArr.length; i++) {
    let animal = animalsArr[i];
    let name = animal.name.toLowerCase().replace(' ', '-');
    let imageTag = `<img src="./images/${name}.jpg" onclick="swapAnimal(${i})">`;
    animalPicDiv.innerHTML += imageTag;
}

function swapAnimal(indx) {
    h2.textContent = animalsArr[indx].name;
    p.textContent = animalsArr[indx].desc;
    videoPlayerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${animalsArr[indx].youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}