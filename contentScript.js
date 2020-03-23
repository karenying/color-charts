let images = document.getElementsByTagName('img');
console.log(images);

for (let i = 0; i < images.length; i++) {
    let base64_img = new Image();
	base64_img.src = images[i].src;

	base64_img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = base64_img.naturalWidth;
        canvas.height = base64_img.naturalHeight;
        
		var ctx = canvas.getContext("2d");
        ctx.drawImage(base64_img, 0, 0);
        
        var base64_url = canvas.toDataURL();
        images[i].src = base64_url;
    };
}