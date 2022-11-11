var error;
var rand = [];

function getNumber() {
    for (var i = 0; i < 4; i++) {
        rand[i] = Math.floor(Math.random() * 2);
    }

    rand[4] = (rand[0] + rand[1] + rand[3]) % 2;
    rand[5] = (rand[0] + rand[2] + rand[3]) % 2;
    rand[6] = (rand[1] + rand[2] + rand[3]) % 2;

    error = Math.random() * 7 | 0;

    rand[error] = (rand[error] + 1) % 2;

    console.log(error);

    document.getElementById("c1").innerHTML = rand[0];
    document.getElementById("c2").innerHTML = rand[1];
    document.getElementById("c3").innerHTML = rand[2];
    document.getElementById("c4").innerHTML = rand[3];
    document.getElementById("c5").innerHTML = rand[4];
    document.getElementById("c6").innerHTML = rand[5];
    document.getElementById("c7").innerHTML = rand[6];

    const question = document.getElementById("question");
    question.innerHTML = "The given vector is <br> <b> " + rand[0] + rand[1] + rand[2] + rand[3] + rand[4] + rand[5] + rand[6] + "</b>";



    return false;
}

function ref() {

    const question = document.getElementById("question");
    const comment = document.getElementById("comment");
    const ans = document.getElementById("answer");

    question.innerHTML = "";
    comment.innerHTML = "";
    ans.innerHTML = "";
    getNumber();
}

function reset() {
    const comment = document.getElementById("comment");
    const ans = document.getElementById("answer");

    comment.innerHTML = "";
    ans.innerHTML = "";

    document.getElementById("c1").innerHTML = rand[0];
    document.getElementById("c2").innerHTML = rand[1];
    document.getElementById("c3").innerHTML = rand[2];
    document.getElementById("c4").innerHTML = rand[3];
    document.getElementById("c5").innerHTML = rand[4];
    document.getElementById("c6").innerHTML = rand[5];
    document.getElementById("c7").innerHTML = rand[6];

}


function verify() {
    const e1 = document.getElementById("c1").innerHTML;
    const e2 = document.getElementById("c2").innerHTML;
    const e3 = document.getElementById("c3").innerHTML;
    const e4 = document.getElementById("c4").innerHTML;
    const e5 = document.getElementById("c5").innerHTML;
    const e6 = document.getElementById("c6").innerHTML;
    const e7 = document.getElementById("c7").innerHTML;
    const comment = document.getElementById("comment");
    const ans = document.getElementById("answer");

    comment.innerHTML = "The decoded codeword is <br> <b>" + e1 + e2 + e3 + e4 + e5 + e6 + e7 + "</b>";

    var temp = rand.slice();
    temp[error] = (temp[error] + 1) % 2;

    if ((e1 == temp[0]) && (e2 == temp[1]) && (e3 == temp[2]) && (e4 == temp[3]) && (e5 == temp[4]) && (e6 == temp[5]) && (e7 == temp[6])) {
        ans.innerHTML = "<b>Correct Answer!!!</b>";
        ans.style.color = "green";
    }

    else {
        ans.style.color = "red";
        ans.innerHTML = "<b>Wrong Answer :(</b>";

    }
}




function toggle(id) {
    const bit = document.getElementById(id);
    if (bit.innerHTML == "1") {
        bit.innerHTML = "0";
    }
    else {
        bit.innerHTML = "1";
    }
}