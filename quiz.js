console.log("Welcome to the survey!")
let lang_vocab=0, memory=0, visual=0, audio=0;
let ans=[], arr=[];
for(let i=1; i<=10; i++)
    ans[i]=0;

function q1score() {
    if (document.getElementById('q1a').checked)
        ans[1] = document.getElementById('q1a').value;
        
    else if (document.getElementById('q1b').checked)
        ans[1] = document.getElementById('q1b').value;
}

function q2score() {
    if (document.getElementById('q2a').checked)
        ans[2] = document.getElementById('q2a').value;

    else if (document.getElementById('q2b').checked)
        ans[2] = document.getElementById('q2b').value;

    else if (document.getElementById('q2c').checked)
        ans[2] = document.getElementById('q2c').value;
    
        else if (document.getElementById('q2d').checked)
        ans[2] = document.getElementById('q2d').value;
}

function q3score() {
    if (document.getElementById('q3a').checked)
        ans[3] = document.getElementById('q3a').value;

    else if (document.getElementById('q3b').checked)
        ans[3] = document.getElementById('q3b').value;
}

function q4score() {
    if (document.getElementById('q4a').checked)
        ans[4] = document.getElementById('q4a').value;

    else if (document.getElementById('q4b').checked)
        ans[4] = document.getElementById('q4b').value5
}

function q5score() {
    if (document.getElementById('q5a').checked)
        ans[5] = document.getElementById('q5a').value;

    else if (document.getElementById('q5b').checked)
        ans[5] = document.getElementById('q5b').value;

    else if (document.getElementById('q5c').checked)
        ans[5] = document.getElementById('q5c').value;
}

function q6score() {
    if (document.getElementById('q6a').checked)
        ans[6] = document.getElementById('q6a').value;

    else if (document.getElementById('q6b').checked)
        ans[6] = document.getElementById('q6b').value;
}

function q7score() {
    if (document.getElementById('q7a').checked)
        ans[7] = document.getElementById('q7a').value;

    else if (document.getElementById('q7b').checked)
        ans[7] = document.getElementById('q7b').value;
}

function q8score() {
    if (document.getElementById('q8a').checked)
        ans[8] = document.getElementById('q8a').value;

    else if (document.getElementById('q8b').checked)
        ans[8] = document.getElementById('q8b').value;
}

function q9score() {
    if (document.getElementById('q9a').checked)
        ans[9] = document.getElementById('q9a').value;

    else if (document.getElementById('q9b').checked)
        ans[9] = document.getElementById('q9b').value;
}

function q10score() {
    if (document.getElementById('q10a').checked)
        ans[10] = document.getElementById('q10a').value;

    else if (document.getElementById('q10b').checked)
        ans[10] = document.getElementById('q10b').value;

    else if (document.getElementById('q10c').checked)
        ans[10] = document.get1ElementById('q10c').value;

    else if (document.getElementById('q10d').checked)
        ans[10] = document.get1ElementById('q10d').value;
}


function submitscore() {
    for(var i=0; i<=10; i++)
        arr[i]=Number(ans[i]);

    lang_vocab = (arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[8])/28;
    memory = (arr[2]+arr[9])/8;
    visual = (arr[1]+arr[3]+arr[4]+arr[6])/16;
    audio = (arr[7]+arr[10])/8;

    alert(` Language Vocabulary Score = ${lang_vocab} \n Memory Score = ${memory} \n Visual Discrimination Score = ${visual} \n Audio Discrimination Score = ${audio}`)
}