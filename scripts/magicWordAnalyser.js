// var sanitizeHtml = require('sanitize-html');

function magicWordAnalyser(pass){
    // sanepass = sanitizeHtml(pass);
    function clearField() {
        document.getElementById('pass').value = '';
    }

// console.log(sanepass)
    if(pass === "") {
        // document.getElementById('passerror').innerHTML ="Uh-Oh!! Give me the magic word!"
        alert("Nooooo")
        clearField();
    }
    else if(pass === "hello") {
        alert("success");
        clearField();
    }
    else {
        alert("Boo Boo!");
        clearField();
    }
}