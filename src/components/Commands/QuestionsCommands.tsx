import React from 'react';

const faqItems = [
  {
    question: "O que é Git?",
    answer: "Git é um sistema de controle de versão distribuído que permite rastrear mudanças no código-fonte durante o desenvolvimento de software."
  },
  {
    question: "Como faço um commit?",
    answer: `
      Para fazer um commit, siga estes passos:
      <br />1. Adicione suas mudanças ao índice (staging area) com:
      <br /><code>git add .</code> - Este comando adiciona todas as mudanças no seu diretório de trabalho para o índice.
      <br />2. Registre as mudanças no repositório com:
      <br /><code>git commit -m "mensagem do commit"</code> - Este comando cria um commit com a mensagem fornecida, registrando suas mudanças no histórico do repositório.
    `
  },
  {
    question: "Como reverter um commit?",
    answer: `
      Para desfazer as mudanças introduzidas por um commit específico, use:
      <br /><code>git revert hash-do-commit</code> - Este comando cria um novo commit que desfaz as alterações do commit especificado.
    `
  },
  {
    question: "Qual a diferença entre Git e GitHub?",
    answer: "Git é um sistema de controle de versão que você usa localmente no seu computador, enquanto GitHub é uma plataforma de hospedagem na web para repositórios Git, que facilita a colaboração e o compartilhamento de código."
  },
  {
    question: "Como faço um branch?",
    answer: `
      Para criar e usar uma nova branch, siga estas etapas:
      <br />1. Crie uma nova branch com:
      <br /><code>git branch nome-da-branch</code> - Este comando cria uma nova branch com o nome especificado.
      <br />2. Troque para a nova branch com:
      <br /><code>git checkout -b nome-da-branch</code> - Este comando cria e muda para a nova branch em um único passo.
    `
  },
  {
    question: "Como faço o merge de uma branch?",
    answer: `
      Para mesclar as mudanças de uma branch para outra, siga estes passos:
      <br />1. Troque para a branch principal com:
      <br /><code>git checkout nome-da-branch-principal</code> - Este comando muda para a branch onde você deseja mesclar as mudanças.
      <br />2. Mescle a branch desejada com:
      <br /><code>git merge nome-da-branch</code> - Este comando aplica as mudanças da branch especificada na branch atual.
    `
  },
  {
    question: "Como faço para clonar um repositório?",
    answer: `
      Para copiar um repositório remoto para sua máquina local, use:
      <br /><code>git clone URL-do-repositório</code> - Este comando cria uma cópia completa do repositório remoto no seu computador.
    `
  },
  {
    question: "O que é um rebase?",
    answer: "O rebase é uma técnica para integrar mudanças de uma branch em outra, aplicando os commits de forma linear, o que evita a criação de commits de merge e mantém um histórico mais limpo."
  },
  {
    question: "Como faço para descartar mudanças não commitadas?",
    answer: `
      Para descartar alterações não commitadas em um arquivo específico, use:
      <br /><code>git checkout -- nome-do-arquivo</code> - Este comando descarta todas as mudanças locais feitas no arquivo especificado.
    `
  },
  {
    question: "Como faço para visualizar o histórico de commits?",
    answer: `
      Para ver a lista de commits feitos no repositório, utilize:
      <br /><code>git log</code> - Este comando mostra o histórico de commits, incluindo mensagens, autores e hashes dos commits.
    `
  },
  {
    question: "O que é um conflito de merge?",
    answer: "Um conflito de merge ocorre quando mudanças conflitantes são feitas em duas branches diferentes e precisam ser resolvidas manualmente. Para resolver, edite os arquivos em conflito, depois use <code>git add nome-do-arquivo</code> para marcar como resolvido e finalize o merge com <code>git commit</code>."
  },
  {
    question: "Como reverter alterações não commitadas?",
    answer: `
      Para descartar alterações não commitadas em um arquivo específico, use:
      <br /><code>git checkout -- nome-do-arquivo</code> - Este comando restaura o arquivo para o estado do último commit.
    `
  },
  {
    question: "Como trabalhar com branches?",
    answer: `
      Para trabalhar com branches, siga estas etapas:
      <br />1. Crie uma nova branch com:
      <br /><code>git branch nome-da-branch</code>
      <br />2. Troque entre branches com:
      <br /><code>git checkout nome-da-branch</code>
      <br />3. Mescle mudanças com:
      <br /><code>git merge nome-da-branch</code> - Este comando aplica as mudanças da branch especificada na branch atual.
    `
  },
  {
    question: "Como reverter um commit específico?",
    answer: `
      Para desfazer as mudanças de um commit específico e criar um novo commit que desfaz essas alterações, use:
      <br /><code>git revert hash-do-commit</code> - Este comando cria um novo commit que reverte as alterações do commit especificado.
    `
  },
  {
    question: "Como atualizar o repositório local com mudanças remotas?",
    answer: `
      Para atualizar seu repositório local com as mudanças do repositório remoto, siga estes passos:
      <br />1. Baixe as mudanças com:
      <br /><code>git fetch</code> - Este comando baixa as mudanças sem aplicá-las.
      <br />2. Mescle as mudanças na branch atual com:
      <br /><code>git merge origin/main</code> - Este comando aplica as mudanças baixadas da branch principal do remoto.
    `
  },
  {
    question: "Como mandar mudanças para o repositório remoto?",
    answer: `
      Para enviar suas mudanças locais para o repositório remoto, siga estes passos:
      <br />1. Adicione as mudanças ao índice com:
      <br /><code>git add .</code> - Este comando adiciona todas as mudanças locais ao índice.
      <br />2. Crie um commit com:
      <br /><code>git commit -m "mensagem do commit"</code> - Este comando cria um commit com a mensagem fornecida.
      <br />3. Envie as mudanças para o remoto com:
      <br /><code>git push origin nome-da-branch</code> - Este comando envia as mudanças para a branch especificada no repositório remoto.
    `
  },
  {
    question: "Como fazer staging de mudanças parciais?",
    answer: `
      Para adicionar partes específicas de um arquivo ao índice, use:
      <br /><code>git add -p</code> - Este comando permite selecionar interativamente partes de um arquivo para adicionar ao índice.
    `
  }
];

const QuestionsCommands = () => {
    return (
        <div className="max-w-[800px] w-full mx-auto my-0 px-4">
            <hr className="my-8 border-t-2 border-gray-300" />
            <h1 className='text-lg font-bold mb-1 mt-2'>Dúvidas Frequentes</h1>
            {faqItems.map((item, index) => (
                <div key={index} className="mb-3">
                    <h2 className="text-sm font-bold mb-1 mt-2">{item.question}</h2>
                    <p className="ml-6 text-gray-800 leading-6" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
            ))}
            <hr className="my-8 border-t-2 border-gray-300" />
        </div>
    );
};

export default QuestionsCommands;
