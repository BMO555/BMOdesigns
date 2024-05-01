function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var image = document.getElementById('colorModeImage');
    if (image.src.match("9055356.png")) {
        image.src = "dezow0w-a5b24d1d-048e-44fc-b5bc-5b2ece8cd8d9.png";
    } else {
        image.src = "9055356.png";
    }
 }
