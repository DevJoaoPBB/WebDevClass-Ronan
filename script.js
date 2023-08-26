let Vez = "X"
let Ganhou = 'N'

let q1 = document.getElementById("1");
let q2 = document.getElementById("2");
let q3 = document.getElementById("3");
let q4 = document.getElementById("4");
let q5 = document.getElementById("5");
let q6 = document.getElementById("6");
let q7 = document.getElementById("7");
let q8 = document.getElementById("8");
let q9 = document.getElementById("9");
let st = document.getElementById("partida");
let Jx = document.getElementById("Jx");
let Jo = document.getElementById("Jo");

function LimpaCampos(){
    q1.innerText = "";
    q2.innerText = "";
    q3.innerText = "";
    q4.innerText = "";
    q5.innerText = "";
    q6.innerText = "";
    q7.innerText = "";
    q8.innerText = "";
    q9.innerText = "";

}

function verificarVitoria() {
    if (
        (q1.innerText === "X" && q2.innerText === "X" && q3.innerText === "X") ||
        (q4.innerText === "X" && q5.innerText === "X" && q6.innerText === "X") ||
        (q7.innerText === "X" && q8.innerText === "X" && q9.innerText === "X") ||
        (q1.innerText === "X" && q4.innerText === "X" && q7.innerText === "X") ||
        (q2.innerText === "X" && q5.innerText === "X" && q8.innerText === "X") ||
        (q3.innerText === "X" && q6.innerText === "X" && q9.innerText === "X") ||
        (q1.innerText === "X" && q5.innerText === "X" && q9.innerText === "X") ||
        (q3.innerText === "X" && q5.innerText === "X" && q7.innerText === "X")
    ) {
        st.innerText="Jogador X - Venceu a partida!";
        Jx.innerText = parseInt(Jx.innerText)+1;
        setTimeout(LimpaCampos,250)
        Ganhou = 'X'
    } else if (
        (q1.innerText === "O" && q2.innerText === "O" && q3.innerText === "O") ||
        (q4.innerText === "O" && q5.innerText === "O" && q6.innerText === "O") ||
        (q7.innerText === "O" && q8.innerText === "O" && q9.innerText === "O") ||
        (q1.innerText === "O" && q4.innerText === "O" && q7.innerText === "O") ||
        (q2.innerText === "O" && q5.innerText === "O" && q8.innerText === "O") ||
        (q3.innerText === "O" && q6.innerText === "O" && q9.innerText === "O") ||
        (q1.innerText === "O" && q5.innerText === "O" && q9.innerText === "O") ||
        (q3.innerText === "O" && q5.innerText === "O" && q7.innerText === "O")
    ) {
        st.innerText="Jogador O - Venceu a partida!"
        Jo.innerText = parseInt(Jo.innerText)+1
        setTimeout(LimpaCampos,250)
        Ganhou = 'O'
    } 
    
    }

function MudarValor(quadrado){
        if (quadrado.innerText == ""){
           if( Vez == "X"){
            quadrado.innerText = "X"
            Vez = "O"
           
        } else{
            quadrado.innerText = "O"
            Vez = "X"
            }
        }
        verificarVitoria()
    } 

    function ()
    
    
