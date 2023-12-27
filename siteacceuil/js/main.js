function initImageSlideshow(photoImages, informatiqueImages) {
    let currentPhotoIndex = Math.floor(Math.random() * photoImages.length);
    let currentInformatiqueIndex = Math.floor(Math.random() * informatiqueImages.length);

    function preloadImage(url) {
        const img = new Image();
        img.src = url;
    }

    function getNextIndex(currentIndex, imagesArray) {
        return (currentIndex + 1) % imagesArray.length;
    }

    // Précharge la première image suivante
    preloadImage(photoImages[getNextIndex(currentPhotoIndex, photoImages)]);
    preloadImage(informatiqueImages[getNextIndex(currentInformatiqueIndex, informatiqueImages)]);

    function changeBackgroundImage(element, newImage, imagesArray, currentIndex) {
        // Fondu sortant
        element.classList.add('fade-out');

        setTimeout(() => {
            // Fondu entrant avec la nouvelle image
            element.style.backgroundImage = `url('${newImage}')`;
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

            setTimeout(() => {
                // Retirer le fondu entrant après qu'il ait fini
                element.classList.remove('fade-in');
            }, 450); // Durée du fondu entrant faut le mettre plus long, question de fluidité

            // Précharger la prochaine image
            preloadImage(imagesArray[getNextIndex(currentIndex, imagesArray)]);
        }, 400); // Durée du fondu sortant
    }

    const photoImage = document.getElementById('photo-image');
    const informatiqueImage = document.getElementById('informatique-image');

    changeBackgroundImage(photoImage, photoImages[currentPhotoIndex], photoImages, currentPhotoIndex);
    changeBackgroundImage(informatiqueImage, informatiqueImages[currentInformatiqueIndex], informatiqueImages, currentInformatiqueIndex);

    setInterval(() => {
        currentPhotoIndex = getNextIndex(currentPhotoIndex, photoImages);
        currentInformatiqueIndex = getNextIndex(currentInformatiqueIndex, informatiqueImages);

        changeBackgroundImage(photoImage, photoImages[currentPhotoIndex], photoImages, currentPhotoIndex);
        changeBackgroundImage(informatiqueImage, informatiqueImages[currentInformatiqueIndex], informatiqueImages, currentInformatiqueIndex);
    }, 7000);
}
