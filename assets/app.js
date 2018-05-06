function imgdblclick()
{
    var img = document.getElementById("image");
    var oldurl = img.src;
    var url = prompt("Please insert your image URL!");
    if (!url) {
        url = oldurl
    }
    img.src = url;
}