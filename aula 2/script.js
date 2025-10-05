function adicionarTarefa() {
        //Configura a função
        let mensagem = "Tarefa adicionada com sucesso!"; //Declara variavel e coloca o valor nela

        let input = document.getElementById("inputTarefa"); //Declara variavel e coloca dentro dela o input
        let tarefa = input.value; // declara variavel tarefa pegando tudo q o usuario digitou dentro do input

        if (!tarefa) {
          document.getElementById("mensagem").textContent =
            "Campo Vazio. Digite Algo para colocar na lista";
        } else {
          document.getElementById("mensagem").textContent = mensagem; // Dps disso pega o valor da variavel mensagem e coloca no P q ta cm o id mensagem
          let listaTarefas = document.getElementById("Lista"); //Declara variavel e coloca dentro dela a UL
          let novaTarefa = document.createElement("li"); //Declara variavel e coloca dentro dela a opção de criar uma LI
          novaTarefa.textContent = tarefa; // Coloca dentro da variavel nova tarefa oq o usuario digitou dentro do input

          listaTarefas.appendChild(novaTarefa); //Coloca a variavel da UL, dentro dela pra criar o elemento q ta na variavel novaTarefa, q criar um LI
        }

        inputTarefa.value = ""; //Aqui usa pra apagar oq for escrito no input
      }