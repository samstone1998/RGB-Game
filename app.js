


let answer;
let score = 0;
let question;
const check_answer = event => {if(event.target.id === answer){
  score +=1;
  document.getElementById("score_num").innerHTML = score;
}
else{
  score = 0;
  document.getElementById("score_num").innerHTML = 0;
}
generate_challenge()};


window.onload = function(){
  generate_challenge();
  document.getElementById('answer-1').addEventListener('click',check_answer);
  document.getElementById('answer-2').addEventListener('click',check_answer);
  document.getElementById('answer-3').addEventListener('click',check_answer);
  document.getElementById('answer-4').addEventListener('click',check_answer);

}



function generate_challenge(){
  let colors = [];
  for(let i = 1; i < 5;i++){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    document.getElementById(`answer-${i}`).style.backgroundColor = `rgb(${red},${green},${blue})`;
    colors.push(`rgb(${red},${green},${blue})`);
  }
  answer = `answer-${Math.floor(Math.random()*colors.length+1)}`;
  document.getElementById('game-question').innerHTML = document.getElementById(answer).style.backgroundColor;
}
