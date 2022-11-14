function getNumber() {

    const rand1 = Math.floor(Math.random() * 2);
    const rand2 = Math.floor(Math.random() * 2);
    const rand3 = Math.floor(Math.random() * 2);
    const rand4 = Math.floor(Math.random() * 2);

    document.getElementById("m1").innerHTML = rand1;
    document.getElementById("m2").innerHTML = rand2;
    document.getElementById("m3").innerHTML = rand3;
    document.getElementById("m4").innerHTML = rand4;

    return false;
}

function ref() {
    const obs = document.getElementById("observations");
    obs.innerHTML="";

    document.getElementById("form").reset();
    getNumber();
}


function verify() {
    const p5 = document.getElementById("p5").value;
    const p6 = document.getElementById("p6").value;
    const p7 = document.getElementById("p7").value;
    const obs = document.getElementById("observations");

    var m1 = document.getElementById("m1").innerHTML;
    var m2 = document.getElementById("m2").innerHTML;
    var m3 = document.getElementById("m3").innerHTML;
    var m4 = document.getElementById("m4").innerHTML;

    m1 = parseInt(m1);
    m2 = parseInt(m2);
    m3 = parseInt(m3);
    m4 = parseInt(m4);

    const v5 = (m1 + m2 + m4) % 2;
    const v6 = (m1 + m3 + m4) % 2;
    const v7 = (m2 + m3 + m4) % 2;
    

    if (p5.length == 0 || p6.length == 0 || p7.length == 0) {
        obs.style.color = "black";
        obs.innerHTML="Enter all the bits";
        return;
    }

    else if (p5.length > 1 || p6.length > 1 || p7.length > 1) {
        obs.style.color = "black";
        obs.innerHTML="Choose values from the set {0, 1}";
        return;
    }

    else if (p5 > 1 || p5 < 0 || p5 > 1 || p6 < 0 || p7 > 1 || p7 < 0) {
        obs.style.color = "black";
        obs.innerHTML="Choose values from the set {0, 1}";
        return;
    }
    
    else if ((p5 == v5) && (p6 == v6) && (p7 == v7)) {
        obs.innerHTML = "<b>Correct Answer!!! </b>";
        obs.style.color = "green";
        return;
    }

    else {
        obs.style.color="red";
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }

}