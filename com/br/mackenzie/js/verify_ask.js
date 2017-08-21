
//Esta function redireciona para próxima página
//function nextAsk(){
  //if (confirm('Deseja pular a pergunta?'))window.location="second-question.html";else alert('You selected Cancel');
//}

//Variável que armazena no cache do browser
localStorage.point;
localStorage.result;

function firstAsk(){

    if(document.getElementById("radioB").checked == true){

        localStorage.point = 1;
        localStorage.result =  localStorage.point;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="second-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.point;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="second-question.html";
    }
}

function secondAsk(){

    if(document.getElementById("radioA").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="third-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="third-question.html";
    }
}

function thirdAsk(){

    if(document.getElementById("radioB").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="fourth-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="fourth-question.html";
    }
}

function fourthAsk(){

    if(document.getElementById("radioA").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="fifth-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="fifth-question.html";
    }
}

function fifthAsk(){

    if(document.getElementById("radioB").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="sixth-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="sixth-question.html";
    }
}

function sixthAsk(){

    if(document.getElementById("radioA").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="seventh-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="seventh-question.html";
    }
}

function seventhAsk(){

    if(document.getElementById("radioB").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="eighth-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="eighth-question.html";
    }
}

function eighthAsk(){

    if(document.getElementById("radioC").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="ninth-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="ninth-question.html";
    }
}

function ninthAsk(){

    if(document.getElementById("radioD").checked == true){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="tenth-question.html";
    }
    else {
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="tenth-question.html";
    }
}

function tenthAsk(){

    var x;

    x = document.getElementById("txtAsk").value
    if(x == "Tanakh"){
        localStorage.point = 1;
        localStorage.result = parseInt(localStorage.result) + 1;
        alert("Você acertou! Seu saldo é : "+(localStorage.result));
        window.location="first-question.html";
    }
    else{
      localStorage.point = 0;
      localStorage.result = localStorage.result;
      alert("Você errou! Seu saldo é: "+localStorage.result)
      window.location="first-question.html";
    }
}
