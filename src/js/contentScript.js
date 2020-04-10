// ------------------- color constants --------------------------------------
// Okabe & Ito
const OI_ORANGE = {
    rgb: [230, 159, 0],
    Lab: [70.60762637435988, 16.479368409699436, 74.68205534443231]
};
const OI_LIGHT_BLUE = {
    rgb: [86, 180, 233],
    Lab: [69.82710600588366, -12.016685908533443, -34.773378828178195]
};
const OI_GREEN = {
    rgb: [0, 158, 115],
    Lab: [57.74308134412172, -45.74064450080628, 12.75498766717198]
};
const OI_YELLOW = {
    rgb: [240, 228, 66],
    Lab: [89.11374483025025, -13.325520162133841, 75.45401525170064]
};
const OI_RED = {
    rgb: [213, 94, 0],
    Lab: [54.18742429248152, 43.274479516557385, 63.28428306351207]
};
const OI_DARK_BLUE = {
    rgb: [0, 114, 178],
    Lab: [45.9733427569253, -2.7341220208763617, -41.37285042024996]
};
const OI_PINK = {
    rgb: [204, 121, 167],
    Lab: [61.047355974201054, 38.53526903867133, -10.607542323987573]
};
const BLACK = {
    rgb: [0, 0, 0],
    Lab: [0, 0, 0]
};

// Tol (bright)
const TB_PINK = {
    rgb: [238, 102, 119],
    Lab: [60.79203693921427, 53.84879361524636, 17.27317349172872]
};
const TB_GREEN = {
    rgb: [34, 136, 51],
    Lab: [49.72263896411893, -46.76254071031405, 36.735986216635055]
};
const TB_DARK_BLUE = {
    rgb: [68, 119, 170],
    Lab: [48.66679781991668, -1.3058506936485803, -32.36144006257147]
};
const TB_YELLOW = {
    rgb: [204, 187, 68],
    Lab: [75.32384768169656, -7.683001687697699, 60.03656876314142]
};
const TB_LIGHT_BLUE = {
    rgb: [102, 204, 238],
    Lab: [77.39046821126635, -20.186890383484645, -25.785712958573725]
};
const TB_PURPLE = {
    rgb: [170, 51, 119],
    Lab: [41.60384371395073, 54.415673982225854, -11.863230196590123]
};
const TB_GRAY = {
    rgb: [187, 187, 187],
    Lab: [75.88062353321, 0.004166707036734607, -0.008244055896833302]
};

// Tol (muted)
const TM_LIGHT_BLUE = {
    rgb: [136, 204, 238],
    Lab: [78.80626208508707, -12.759163081336345, -23.498078164004042]
};
const TM_GREEN = {
    rgb: [68, 170, 153],
    Lab: [63.57223369051775, -33.6419138090891, -0.04608227218834138]
};
const TM_DARK_GREEN = {
    rgb: [17, 119, 51],
    Lab: [43.58323284129402, -43.077417458006224, 29.44723889604677]
};
const TM_DARK_BLUE = {
    rgb: [51, 34, 136],
    Lab: [22.392352955864773, 37.73178147263176, -54.039310633841666]
};
const TM_YELLOW = {
    rgb: [221, 204, 119],
    Lab: [81.77824982129096, -5.455493114701671, 44.30095011825017]
};
const TM_DARK_YELLOW = {
    rgb: [153, 153, 51],
    Lab: [61.475886861471, -13.052804785520344, 51.38233421367734]
};
const TM_PINK = {
    rgb: [204, 102, 119],
    Lab: [55.75790794113969, 42.05991100830536, 9.496420925424465]
};
const TM_DARK_PINK = {
    rgb: [136, 34, 85],
    Lab: [31.884577050838026, 46.95197384210989, -5.520197672762506]
};
const TM_PURPLE = {
    rgb: [170, 68, 153],
    Lab: [45.607065619762764, 52.2037775424824, -26.395536865726555]
};
const GRAY = {
    rgb: [221, 221, 221],
    Lab: [88.11543698710965, 0.004721545275254702, -0.009341833449094672]
};

// Tol (light)
const TL_LIGHT_GREEN = {
    rgb: [191, 196, 101],
    Lab: [76.97837346208507, -15.229395589503813, 46.70353112686612]
};
const TL_DARK_GREEN = {
    rgb: [170, 170, 0],
    Lab: [67.49813867059089, -15.908662820362684, 69.729838337105]
};
const TL_BLUE = {
    rgb: [119, 170, 221],
    Lab: [67.94082792758167, -3.316905783813495, -31.01573877306969]
};
const TL_RED = {
    rgb: [238, 136, 102],
    Lab: [67.08510460798784, 35.7487375206943, 35.10583544081545]
};
const TL_YELLOW = {
    rgb: [238, 221, 136],
    Lab: [87.80835645572, -5.671762030260097, 43.73343142033082]
};
const TL_PINK = {
    rgb: [255, 170, 187],
    Lab: [78.22633784294831, 33.42700739567406, 4.1933027420084645]
};
const TL_LIGHT_BLUE = {
    rgb: [153, 221, 255],
    Lab: [84.84582407583349, -12.926675337134652, -23.271175855387515]
};
const TL_GREEN = {
    rgb: [68, 187, 153],
    Lab: [68.80157855384934, -41.34912237733279, 7.513750272739461]
};

const OKABE_ITO = [OI_ORANGE, OI_LIGHT_BLUE, OI_GREEN, OI_YELLOW, OI_RED, OI_DARK_BLUE, OI_PINK, BLACK];
const TOL_BRIGHT = [TB_PINK, TB_GREEN, TB_DARK_BLUE, TB_YELLOW, TB_LIGHT_BLUE, TB_PURPLE, TB_GRAY];
const TOL_MUTED = [TM_LIGHT_BLUE, TM_GREEN, TM_DARK_GREEN, TM_DARK_BLUE, TM_YELLOW, TM_DARK_YELLOW, TM_PINK, TM_DARK_PINK, TM_PURPLE, GRAY]
const TOL_LIGHT = [TL_LIGHT_GREEN, TL_DARK_GREEN, TL_BLUE, TL_RED, TL_YELLOW, TL_PINK, TL_LIGHT_BLUE, TL_GREEN, GRAY];

// ------------------- helper methods --------------------------------------
rgbToLab = function (rgb) {
    var r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        x, y, z;

    r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

    x = (x > 0.008856) ? Math.pow(x, 1 / 3) : (7.787 * x) + 16 / 116;
    y = (y > 0.008856) ? Math.pow(y, 1 / 3) : (7.787 * y) + 16 / 116;
    z = (z > 0.008856) ? Math.pow(z, 1 / 3) : (7.787 * z) + 16 / 116;

    return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
}

//----------------------------------------------------------------------------
// get cached prefernces
chrome.storage.local.get(['applyAll'], function(settings) {
    if (settings.applyAll) {
        chrome.storage.local.get(['paletteSelected'], function(result) {
            let currPalette;

            switch (result.paletteSelected) {
                case "okabe_ito":
                    currPalette = OKABE_ITO;
                    break;
                case "tol_bright":
                    currPalette = TOL_BRIGHT;
                    break;
                case "tol_muted":
                    currPalette = TOL_MUTED;
                    break;
                case "tol_light":
                    currPalette = OKABE_ITO;
                    break;
            }

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
                    let rgb = [r, g, b];
                    let Lab = rgbToLab(rgb);

                    let rg_diff = Math.abs(r - g), gb_diff = Math.abs(g - b), br_diff = Math.abs(b - r);

                    // if color isn't a shade of gray
                    if (rg_diff >= 15 || gb_diff >= 15 || br_diff >= 15) {
                        let closest, dist = Number.POSITIVE_INFINITY;

                        currPalette.forEach(color => {
                            // compute distance
                            let curr_dist = Math.pow((color.Lab[0] - Lab[0]), 2) + Math.pow((color.Lab[1] - Lab[1]), 2) + Math.pow((color.Lab[2] - Lab[2]), 2);

                            if (curr_dist < dist) {
                                closest = color;
                                dist = curr_dist;
                            }
                        });

                        // overwrite current color with closest match based on Lab distance
                        data[j] = closest.rgb[0];
                        data[j + 1] = closest.rgb[1];
                        data[j + 2] = closest.rgb[2];
                    }
                }

                // update canvas image 
                ctx.putImageData(imgData, 0, 0, 0, 0, canvas.width, canvas.height);

                // create base64 url
                var base64_url = canvas.toDataURL();

                // replace original src with base64 url
                images[i].src = base64_url;
            }
        });
    }
});