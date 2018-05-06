function imgclick()
{
    var img = document.getElementsByName("img");
    var oldurl = img.src;
    var url = prompt("Please insert your image URL!");
    if (!url) url = oldurl;
    img.src = url;
}
