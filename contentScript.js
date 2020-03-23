// import { COLORBLIND_FRIENDLY_COLORS } from './colors';
// get all images
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
            // go through all the seen colors
            Object.keys(colorMap).forEach(color => {
                // calculate difference between every seen color and current color
                let r_diff = Math.abs(color[0] - r), g_diff = Math.abs(color[1] - g), b_diff = Math.abs(color[2] - b);

                // if different enough, add the color to the dictionary
                if (r_diff >= 10 && g_diff >= 10 && b_diff >= 10) {
                    let rgb = [r, g, b];
                    colorMap[rgb] = 0;
                }
            })  
            /*
            if (!colorMap.hasOwnProperty(rgb)) {
                colorMap[rgb] = 0;
            }
            */

            data[j] = 0;
            data[j + 1] = 255;
            data[j + 2] = 0;
        } 
    }

    // update canvas image 
    ctx.putImageData(imgData, 0, 0, 0, 0, canvas.width, canvas.height);

    // create base64 url
    var base64_url = canvas.toDataURL();

    // replace src with base64 url
    images[i].src = base64_url;
}