function initImageSlideshow(photoImages, informatiqueImages) {
    let currentPhotoIndex = Math.floor(Math.random() * photoImages.length);
    let currentInformatiqueIndex = Math.floor(Math.random() * informatiqueImages.length);

    function changeBackgroundImage(element, newImage) {
        // Fondu sortant
        element.classList.add('fade-out');

        setTimeout(() => {
            element.style.backgroundImage = `url('${newImage}')`;

            // Retirer le fondu sortant et ajouter le fondu entrant
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

            setTimeout(() => {
                // Retirer le fondu entrant après qu'il ait fini
                element.classList.remove('fade-in');
            }, 400); // Durée du fondu entrant
        }, 400); // Durée du fondu sortant
    }

    const photoImage = document.getElementById('photo-image');
    const informatiqueImage = document.getElementById('informatique-image');
    changeBackgroundImage(photoImage, photoImages[currentPhotoIndex]);
    changeBackgroundImage(informatiqueImage, informatiqueImages[currentInformatiqueIndex]);

    setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoImages.length;
        currentInformatiqueIndex = (currentInformatiqueIndex + 1) % informatiqueImages.length;

        changeBackgroundImage(photoImage, photoImages[currentPhotoIndex]);
        changeBackgroundImage(informatiqueImage, informatiqueImages[currentInformatiqueIndex]);
    }, 7000);
}
