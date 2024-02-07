let numeroLimite = 100;
let listaDeNumerosSorteados = [];

let gerarNumeroAleatorio = () => {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
};

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let limparCampo = () => {
  chute = document.querySelector("Input");
  chute.value = "";
};

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.6 });
}

let exibirMensagemInicial = () => {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
};
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(chute == numeroSecreto);
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentatina = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentatina}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "o número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

let novoJogo = () => {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
};

//DAQUI PARA BAIXO SÃO AS FUNÇÕES DOS BOTÕES QUE EU CRIEI
let test_botao = () => {
  let nome = prompt("Digite o seu nome");
  console.log(`Olá ${nome}`);
};

let test_botao_dobrar = () => {
  let numeroDobrado = prompt("Digite um número para dobrar");
  let dobroResultado = parseInt(numeroDobrado * 2);
  window.alert(`O dobro do número é ${dobroResultado}`);
};

let Test_media = () => {
  let media = 0;
  let QuantidadeDeNumerosMedia = prompt(
    "Digite a quantidade de números que quer tirar a média"
  );
  for (
    let contadorNumeros = 0;
    contadorNumeros < QuantidadeDeNumerosMedia;
    contadorNumeros++
  ) {
    let escrevaNumero = parseFloat(
      prompt("DIgite o número que quer adicionar em sua média")
    );

    media += escrevaNumero;

    console.log(media);
  }

  window.alert(
    `A média dos seus números é ${(media / QuantidadeDeNumerosMedia).toFixed(
      2
    )}`
  );
};

let testMaiorNumero = () => {
  let recebeNum1 = parseInt(prompt("Digite o primeiro número"));
  let recebeNum2 = parseInt(prompt("Digite o segundo número"));
  console.log(recebeNum1);

  if (recebeNum1 > recebeNum2) {
    window.alert(`O número ${recebeNum1} é maior que o número ${recebeNum2}`);
  } else if (recebeNum1 < recebeNum2) {
    window.alert(`O número ${recebeNum2} é maior que o número ${recebeNum1}`);
  } else if (isNaN(recebeNum1) && !isNaN(recebeNum2)) {
    window.alert("Você esqueceu de escrever o primeiro número");
  } else if (isNaN(recebeNum2) && !isNaN(recebeNum1)) {
    window.alert("Você esqueceu de escrever o segundo número");
  } else if (isNaN(recebeNum1) && isNaN(recebeNum2)) {
    window.alert("Você esqueceu de escrever os dois números");
  } else {
    window.alert("Os números são iguais");
  }
};
