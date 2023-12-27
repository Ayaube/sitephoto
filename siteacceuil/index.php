<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/logo.png" type="image/x-icon">
    <link rel="shortcut icon" href="images/logo.png" type="image/x-icon">
    <title>Ayoub Lamchichi</title>
    <link rel="stylesheet" href="css/style.css">
</head>


<body>
<?php
$imagesp = glob('images/photographie/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
$randomImagep = $imagesp[array_rand($imagesp)];

$imagesi = glob('images/informatique/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
$randomImagei = $imagesi[array_rand($imagesi)];
?>
<div class="container">
    <a href="https://photos.ayoub-lamchichi.com" class="box photo">
        <div class="image" id="photo-image"></div>
        <span>Photographie</span>
    </a>
    <div class="al-text">AL</div>
    <a href="https://informatique.ayoub-lamchichi.com" class="box informatique">
        <div class="image" id="informatique-image"></div>
        <span>Informatique</span>
    </a>
</div>
</body>

<script src="js/main.js"></script>
<script>
    // Convertir les données PHP en JSON et les passer à la fonction JavaScript
    const photoImages = <?php echo json_encode($imagesp); ?>;
    const informatiqueImages = <?php echo json_encode($imagesi); ?>;


    initImageSlideshow(photoImages, informatiqueImages);
</script>
</body>

</html>
