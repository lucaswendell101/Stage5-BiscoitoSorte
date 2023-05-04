let lista=["A solidão é a sorte de todos os espíritos excepcionais.", 
"A perseverança é a mãe da boa sorte.",
"Sorte é estar pronto quando a oportunidade vem.", 
"A sorte ajuda os audazes.",
"Quanto mais eu treino, mais sorte eu tenho.",
"A sorte sorri aos fortes.",
"Não reclame do barulho quando a sorte lhe bater a porta.",
"Com sorte você atravessa o mundo, sem sorte você não atravessa a rua.",
"Felicidade é a combinação de sorte com escolhas bem feitas.",
"Eu quero a sorte de um amor tranquilo, com sabor de fruta mordida.",
"Eu ando tomando o rumo certo agora, me deseje sorte!"
]

let sorteio = Math.round(Math.random() * lista.length)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const biscoito = document.querySelector("#biscoito")
const restart = document.querySelector("#restart")

function fraseSorte(){
  document.querySelector("#quote").innerText = lista[sorteio];
}



function abrirTela2 (){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  fraseSorte()
  sorteio = Math.round(Math.random() * lista.length)
}

function voltarTela1 (){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  
}


  biscoito.addEventListener('click', abrirTela2)
  restart.addEventListener('click', voltarTela1)