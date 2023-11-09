const card = document.getElementById('card')
const dropZone = document.getElementById("drop-zone")
const dropZone1 = document.getElementById("drop-zone1")

card.addEventListener('dragstart', function(event){
    console.log(event)
})

dropZone.addEventListener('dragover', function(event){
    event.preventDefault()
})

dropZone.addEventListener('drop', function(event){
    dropZone.prepend(card)
})

if (card == dropZone){
    prompt("Yey benar")
}
else if (card == dropZone1){
    prompt("Yey salah")
}


