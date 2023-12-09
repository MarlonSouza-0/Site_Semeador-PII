var oldId = 1
var imgsUrls = [
    './img/fotoGrupo.jpg',
    './img/imgeduca2.jpg',
    './img/fotoprofLivro.jpg',
    './img/imgeduca1.jpeg',
    './img/fotoPiscina.jpg',
]

function nextId(){
    removeActiveImg()
    oldId++
    if(oldId == 6){
        oldId = 1
    }
    activeImg(oldId)
}

function previusId(){
    removeActiveImg()
    oldId--
    if(oldId == 0){
        oldId = 5
    }
    activeImg(oldId)
}

function activeImg(id){
    document.getElementById("img" + id).classList.add("bg-secondary");
    document.getElementById("img" + id).classList.remove("bg-zinc-100");
    useImg(id)
}

function removeActiveImg(){
    console.log(oldId)
    document.getElementById("img" + oldId).classList.remove("bg-secondary");
    document.getElementById("img" + oldId).classList.add("bg-zinc-100");
}

function changeImg(id){
    removeActiveImg()
    activeImg(id)
    oldId = id
}

function useImg(id){
    document.getElementById("imagem").src = imgsUrls[id - 1]
}