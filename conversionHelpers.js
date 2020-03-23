export function hexToRgb(hex) {
    var parsed = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let output = [];
    if (parsed) {
        output.push(parseInt(parsed[1], 16), parseInt(parsed[2], 16), parseInt(parsed[3], 16))
    }
    return output;
}

