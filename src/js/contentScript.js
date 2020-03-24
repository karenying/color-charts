// ------------------- color constants --------------------------------------
const OI_ORANGE = [230, 159, 0];
const OI_LIGHT_BLUE = [86, 180, 233];
const OI_GREEN = [0, 158, 115];
const OI_YELLOW = [240, 228, 66];
const OI_RED = [213, 94, 0];
const OI_DARK_BLUE = [0, 114, 178];
const OI_PINK = [204, 121, 167];
const BLACK = [0, 0, 0];

const TB_PINK = [238, 102, 119];
const TB_GREEN = [34, 136, 51];
const TB_DARK_BLUE = [68, 119, 170];
const TB_YELLOW = [204, 187, 68];
const TB_LIGHT_BLUE = [102, 204, 238];
const TB_PURPLE = [170, 51, 119];
const TB_GRAY = [187, 187, 187];

const TM_LIGHT_BLUE = [136, 204, 238];
const TM_GREEN = [68, 170, 153];
const TM_DARK_GREEN = [17, 119, 51];
const TM_DARK_BLUE = [51, 34, 136];
const TM_YELLOW = [221, 204, 119];
const TM_DARK_YELLOW = [153, 153, 51];
const TM_PINK = [204, 102, 119];
const TM_DARK_PINK = [136, 34, 85];
const TM_PURPLE = [170, 68, 153];
const GRAY = [221, 221, 221];

const TL_LIGHT_GREEN = [191, 196, 101];
const TL_DARK_GREEN = [170, 170, 0];
const TL_BLUE = [119, 170, 221];
const TL_RED = [238, 136, 102];
const TL_YELLOW = [238, 221, 136];
const TL_PINK = [255, 170, 187];
const TL_LIGHT_BLUE = [153, 221, 255];
const TL_GREEN = [68, 187, 153];

const OKABE_ITO = [OI_ORANGE, OI_LIGHT_BLUE, OI_GREEN, OI_YELLOW, OI_RED, OI_DARK_BLUE, OI_PINK, BLACK];
const TOL_BRIGHT = [TB_PINK, TB_GREEN, TB_DARK_BLUE, TB_YELLOW, TB_LIGHT_BLUE, TB_PURPLE, TB_GRAY];
const TOL_MUTED = [TM_LIGHT_BLUE, TM_GREEN, TM_DARK_GREEN, TM_DARK_BLUE, TM_YELLOW, TM_DARK_YELLOW, TM_DARK_PINK, TM_PURPLE, GRAY]
const TOL_LIGHT = [TL_LIGHT_GREEN, TL_DARK_GREEN, TL_BLUE, TL_RED, TL_YELLOW, TL_PINK, TL_LIGHT_BLUE, TL_GREEN, GRAY];

const COLORBLIND_FRIENDLY_COLORS = OKABE_ITO;
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

    for (var j = 0; j < data.length; j += 4) {
        let r = data[j], g = data[j + 1], b = data[j + 2];
    
        let rg_diff = Math.abs(r - g), gb_diff = Math.abs(g - b), br_diff = Math.abs(b - r);

        // if color isn't a shade of gray
        if (rg_diff >= 15 || gb_diff >= 15 || br_diff >= 15) {
            let closest, diff = Number.POSITIVE_INFINITY;

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

    // replace original src with base64 url
    images[i].src = base64_url;
}