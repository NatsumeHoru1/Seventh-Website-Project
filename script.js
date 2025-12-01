window.onload = function() {
  console.log("Page loaded – adding tabindex to images...");
  
  const images = document.querySelectorAll('.gallery img');
  
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', i + 1); 
    console.log(`Added tabindex="${i + 1}" to image ${i + 1}`);
  }
};

function upDate(previewPic) {
  console.log("Preview triggered:", previewPic.alt);

  document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
  document.getElementById('imageText').innerText = previewPic.alt;
}

function unDo() {
  document.getElementById('image').style.backgroundImage = "url('')";
  document.getElementById('imageText').innerText = "Hover or focus on an image above to display here.";
}