var timer = 60;
var score = 0;
var hittn = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#sl").textContent=score;
}


function getNewHit(){
    var hittn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble() {
    var clutter = ""
    for (var i = 1; i <= 147; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;

}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;

        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML="";

        }

    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(clickedNum===hittn){
        increaseScore();
        makeBubble();
        getNewHit();
    }


});



runtimer();
makeBubble();
getNewHit();
increaseScore();


// 34.58sec
