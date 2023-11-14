document.addEventListener('DOMContentLoaded', function () {
  const tempatOrganik = document.getElementById('tempat-organik');
  const tempatAnorganik = document.getElementById('tempat-anorganik');
  const tempatB3 = document.getElementById('tempat-B3');
  const musicTrue = document.getElementById('sound');
  const musicFalse = document.getElementById('sound1');
  

  // Add event listeners for drag and drop
  tempatOrganik.addEventListener('dragover', allowDrop);
  tempatAnorganik.addEventListener('dragover', allowDrop);
  tempatB3.addEventListener('dragover', allowDrop);
  
  tempatOrganik.addEventListener('drop', handleDropOrganik);
  tempatAnorganik.addEventListener('drop', handleDropAnorganik);
  tempatB3.addEventListener('drop', handleDropB3);
  
  //
  function allowDrop(event) {
      event.preventDefault();
  }
  
  //organik
  function handleDropOrganik(event) {
      event.preventDefault();
      const draggedElement = document.querySelector('.dragging');
      if (isOrganik(draggedElement)) {
          tempatOrganik.appendChild(draggedElement);
          // Handle correct drop for organik waste
          musicTrue.currentTime= 0
          musicTrue.play()
      } else {
          // Handle incorrect drop for  waste
          musicFalse.currentTime= 0
          musicFalse.play()
      }
  }

  //anorganik
  function handleDropAnorganik(event) {
      event.preventDefault();
      const draggedElement = document.querySelector('.dragging');
      if (isAnorganik(draggedElement)) {
          tempatAnorganik.appendChild(draggedElement);
          // Handle correct drop for anorganik waste
          musicTrue.currentTime= 0
          musicTrue.play()
      } else {
          // Handle incorrect drop for waste
          musicFalse.currentTime= 0
          musicFalse.play()
      }
  }


    //B3
    function handleDropB3(event) {
      event.preventDefault();
      const draggedElement = document.querySelector('.dragging');
      if (isB3(draggedElement)) {
          tempatB3.appendChild(draggedElement);
          // Handle correct drop for B3 waste
          musicTrue.currentTime= 0
          musicTrue.play()
      } else {
          // Handle incorrect drop  waste
          musicFalse.currentTime= 0
          musicFalse.play()
      }
  }



  document.addEventListener('dragstart', function (event) {
      // Add a class to the dragged element
      event.target.classList.add('dragging');
  });

  document.addEventListener('dragend', function (event) {
      // Remove the class when dragging ends
      event.target.classList.remove('dragging');
  });

  

  function isOrganik(element) {
      // Check if the element is organik waste (you can modify this logic based on your needs)
      // For example, you can use a specific class name or data attribute
      return element.src.includes('sampahgame1') || element.src.includes('sampahgame2') || element.src.includes('sampahgame3');
  }
  function isAnorganik(element) {
      // Check if the element is anorganik waste (you can modify this logic based on your needs)
      // For example, you can use a specific class name or data attribute
      return element.src.includes('sampahgame4') || element.src.includes('sampahgame5') || element.src.includes('sampahgame6') || element.src.includes('sampahgambar7')
  }
  function isB3(element) {
      // Check if the element is b3 waste (you can modify this logic based on your needs)
      // For example, you can use a specific class name or data attribute
      return element.src.includes('sampahgmae8') || element.src.includes('sampahgambar9') || element.src.includes('gambar10');
  }

})




