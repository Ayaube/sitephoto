
function initImageSlideshow(photoImages, informatiqueImages) {
    let currentPhotoIndex = 0;
    let currentInformatiqueIndex = 0;


    function updateImages() {
        document.getElementById('photo-container').style.backgroundImage = `url('${photoImages[currentPhotoIndex]}')`;
        document.getElementById('informatique-container').style.backgroundImage = `url('${informatiqueImages[currentInformatiqueIndex]}')`;
    }


    updateImages();


    setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoImages.length;
        currentInformatiqueIndex = (currentInformatiqueIndex + 1) % informatiqueImages.length;
        updateImages();
    }, 5000);
}
