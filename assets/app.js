var img = document.getElementById("image");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");

hashchange();

function imgclick(el)
{
    var url = document.URL;
    var oldurl = el.src;
    var url = prompt("Please insert your image URL!", oldurl);
    if (!url) {
        url = oldurl;
    }
    el.src = url;
}

function hashchange()
{
    var url = document.URL;
    if (url.indexOf("##")) {
        var s = decodeURI(url);
        s = s.split("##")[1];
        s = s.split("|");
        t1.innerHTML = s[0];
        t2.innerHTML = s[1];
        t3.innerHTML = s[2];
        img.src = s[3];
    }
}

function generate()
{
    var s = 'https://wy3.github.io/chayngaydi/##'
    + t1.innerHTML + '|'
    + t2.innerHTML + '|'
    + t3.innerHTML + '|'
    + img.src;
    var input = document.getElementById("input");
    input.value = encodeURI(s);
    input.select();
    document.execCommand("Copy");
}



