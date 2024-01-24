function getUserSelectedDate() {
    var usdate = document.getElementById("sedate").value;
    var title = document.getElementById("settitle").value;
    var dec = document.getElementById("setdec").value;
    document.getElementById("title").style.display="block"
    document.getElementById("tit1").innerHTML = title;
    document.getElementById("dec1").innerHTML = dec;

    var dayButtons = document.querySelectorAll('.s1in');
    dayButtons.forEach(button => {
        button.style.backgroundColor = "";
    });

    if (usdate) {
        var date = new Date(usdate);
        var day = date.getDay();


        var dayButton = document.getElementById(getDayButtonId(day));
        dayButton.style.backgroundColor = "gray";
    }
}

function getDayButtonId(day) {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return days[day];
}

function dlt() {
    document.getElementById("tit1").innerHTML = "The tile1";
    document.getElementById("dec1").innerHTML = "Sample description1";
    document.getElementById("settitle").value = "";
    document.getElementById("setdec").value = "";
    document.getElementById("sedate").value = "";
    document.getElementById("title").style.display="none"

    var dayButtons = document.querySelectorAll('.s1in');
    dayButtons.forEach(button => {
        button.style.backgroundColor = "";
    });
}
