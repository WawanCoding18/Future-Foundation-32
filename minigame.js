const card = document.getElementById('card');
const dropZone = document.getElementById('drop-zone');
const dropZone1 = document.getElementById('drop-zone1');

card.addEventListener('dragstart', function (event) {
  console.log(event);
});

dropZone.addEventListener('dragover', function (event) {
  event.preventDefault();
});

dropZone1.addEventListener('dragover', function (event) {
  event.preventDefault();
});

dropZone.addEventListener('drop', function (event) {
  if (card.classList.contains('organik')) {
    alert('Maaf, salah masuk tempat sampah!');
  } else {
    dropZone.prepend(card);
  }
});

dropZone1.addEventListener('drop', function (event) {
  if (card.classList.contains('anorganik')) {
    alert('Maaf, salah masuk tempat sampah!');
  } else {
    dropZone1.prepend(card);
  }
});



