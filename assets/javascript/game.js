var crystal_1;
var crystal_2;
var crystal_3;
var crystal_4;
var randomTarget;
var win = 0;
var loss = 0;
var score = 0;

function randomNumGen(){
    crystal_1 = Math.floor((Math.random() * 12) + 1);//Will generate random num between 1 & 12.
    crystal_2 = Math.floor((Math.random() * 12) + 1);//Will generate random num between 1 & 12.
    crystal_3 = Math.floor((Math.random() * 12) + 1);//Will generate random num between 1 & 12.
    crystal_4 = Math.floor((Math.random() * 12) + 1);//Will generate random num between 1 & 12.
    randomTarget = Math.floor((Math.random() * 102) + 19);//Will generate random num between 19-120.
    $("#t_score").text(score);
    $("#r_number").text(randomTarget);
    $("#win").text(win);
    $("#loss").text(loss);
};

function check(){//This will check if user won or lost and restart game if either is true.
    if(score === randomTarget){
        win++;
        score = 0;
        randomNumGen();
    }
    else if(score > randomTarget){
        loss++;
        score = 0;
        randomNumGen();
    }
}
//function reset(){};

$(document).ready( function(){
    randomNumGen();
    $("#reset").on("click", function(){//This will reset the game
        win = 0;
        loss = 0;
        score = 0;
        randomNumGen();
    });
    $("#ameth").on("click", function(){
        score += crystal_1;
        $("#t_score").text(score);
        check();
    });
    $("#peridot").on("click", function(){
        score += crystal_2;
        $("#t_score").text(score);
        check();
    });
    $("#quartz").on("click", function(){
        score += crystal_3;
        $("#t_score").text(score);
        check();
    });
    $("#zircon").on("click", function(){
        score += crystal_4;
        $("#t_score").text(score);
        check();
    });
});//Generate random numbers when document is fully loaded.


