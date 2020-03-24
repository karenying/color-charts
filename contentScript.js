// ------------------- color constants --------------------------------------
const ORANGE = [230, 159, 0];
const LIGHT_BLUE = [86, 180, 233];
const GREEN = [0, 158, 115];
const YELLOW = [240, 228, 66];
const RED = [213, 94, 0];
const DARK_BLUE = [0, 114, 178];
const PINK = [204, 121, 167];
const BLACK = [0, 0, 0];
const COLORBLIND_FRIENDLY_COLORS = [ORANGE, LIGHT_BLUE, GREEN, YELLOW, RED, DARK_BLUE, PINK, BLACK];
// -------------------------------------------------------------------------
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

        // if color isn't a shade of gray
        if (rg_diff >= 15 || gb_diff >= 15 || br_diff >= 15) {
            let closest;
            let diff = Number.POSITIVE_INFINITY;
            COLORBLIND_FRIENDLY_COLORS.forEach(color => {
                let r_diff = Math.abs(color[0] - r), g_diff = Math.abs(color[1] - g), b_diff = Math.abs(color[2] - b);
                let curr_diff = r_diff + g_diff + b_diff;

                if (curr_diff < diff) {
                    closest = color;
                    diff = curr_diff;
                }
            });
            
            data[j] = closest[0];
            data[j + 1] = closest[1];
            data[j + 2] = closest[2];
        } 
    }

    // update canvas image 
    ctx.putImageData(imgData, 0, 0, 0, 0, canvas.width, canvas.height);

    // create base64 url
    var base64_url = canvas.toDataURL();

    // replace src with base64 url
    images[i].src = base64_url;
}