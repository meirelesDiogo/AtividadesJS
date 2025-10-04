function mudarNome(){
   // pede o nome só quando o botão for clicado
   const nome = prompt("Digite seu nome");
   document.getElementById("mensagemSaudacao").textContent="Olá," + nome;
}