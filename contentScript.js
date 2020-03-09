import { $, jQuery } from 'jquery';

const desaturateImage = function(image) {
    var canvas = document.createElement("canvas");
    image.parentNode.insertBefore(canvas, image);
    canvas.width = image.width;
    canvas.height = image.height;
    image.parentNode.removeChild(image);

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width * image.width / image.naturalWidth, image.height * image.height / image.naturalHeight);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;

    for (var i = 0; i < data.length; i += 4) {
        var grey =
            0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
        data[i] = grey;
        data[i + 1] = grey;
        data[i + 2] = grey;
    }
    ctx.putImageData(imgData, 0, 0, 0, 0, canvas.width, canvas.height);
}

let images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
    console.log($(images[i]).css());
    desaturateImage(images[i]);
}