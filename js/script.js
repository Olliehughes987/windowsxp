startflip = true;
notepadStatus = false;

setTimeout(doTime, 1000);

function toggleStart() {
    if (startflip) {
        document.getElementById("start").classList.add('startpressed');
        document.getElementById("start").classList.remove('startneutral');

        document.getElementById("menu").hidden = false;
    } else {
        document.getElementById("start").classList.add('startneutral');
        document.getElementById("start").classList.remove('startpressed');

        document.getElementById("menu").hidden = true;
    }
    startflip = !startflip;
}

function toggleNotepad() 
{
    if (notepadStatus) {
        document.getElementById("notepad").style.display = "none";
    } else {
        document.getElementById("notepad").style.display = "";
    }
    notepadStatus = !notepadStatus;
}

function doTime()
{
    let time = ""   

    var d = new Date();
    hour = d.getHours(); 
    min = d.getMinutes(); 
    if (min < 10) {
        min = "0" + min;
    }

    time = "" + hour + ":" + min;
    document.getElementById("time").innerHTML = time;
}