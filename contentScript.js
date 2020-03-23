// import { COLORBLIND_FRIENDLY_COLORS } from './colors';

let images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
    let image = images[i];
    
    var canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;

    let colorMap = {}, index = 0;

    for (var j = 0; j < data.length; j += 4) {
        let r = data[j], g = data[j + 1], b = data[j + 2];
    
        let rg_diff = Math.abs(r - g), gb_diff = Math.abs(g - b), br_diff = Math.abs(b - r);

        if (rg_diff >= 15 || gb_diff >= 15 || br_diff >= 15) {
            /*
            let rgb = [r, g, b];

            if (!colorMap.hasOwnProperty(rgb)) {
                colorMap[rgb] = 0;
            }
            */

            data[j] = 0;
            data[j + 1] = 255;
            data[j + 2] = 0;
        } 
    }
    console.log(colorMap);
    ctx.putImageData(imgData, 0, 0, 0, 0, canvas.width, canvas.height);

    var base64_url = canvas.toDataURL();
    images[i].src = base64_url;
}