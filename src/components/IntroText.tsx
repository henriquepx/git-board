import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
    question: "Como descartar mudanças não commitadas?",
    answer: `
      Para descartar alterações não commitadas em um arquivo específico, use:
      <br /><code>git checkout -- nome-do-arquivo</code> - Este comando restaura o arquivo para o estado do último commit.
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
    answer: `
      Um conflito de merge ocorre quando mudanças conflitantes são feitas em duas branches diferentes e precisam ser resolvidas manualmente. 
      Para resolver, edite os arquivos em conflito, depois use <code>git add nome-do-arquivo</code> para marcar como resolvido e finalize o merge com <code>git commit</code>.
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
const commonSituationsItems = [
  {
    situation: "Conflitos de merge",
    resolution: `
      Quando há mudanças conflitantes entre branches, você precisará resolver os conflitos manualmente. 
      Edite os arquivos em conflito para corrigir as diferenças. 
      Depois de resolver os conflitos, use:
      <br /><code>"git add nome-do-arquivo"</code> para marcar os arquivos como resolvidos. 
      Finalize o merge com:
      <br /><code>"git commit"</code> - Isso cria um commit que registra a resolução dos conflitos.
    `
  },
  {
    situation: "Revertendo alterações",
    resolution: `
      Para descartar alterações não commitadas em um arquivo específico e restaurá-lo ao estado do último commit, use:
      <br /><code>"git checkout -- nome-do-arquivo"</code> - Este comando descarta todas as mudanças não salvas no arquivo especificado e o retorna ao estado do último commit confirmado.
    `
  },
  {
    situation: "Trabalhando com branches",
    resolution: `
      Para criar uma nova branch, use:
      <br /><code>"git branch nome-da-branch"</code> - Isso cria uma nova branch com o nome especificado a partir da branch atual.
      Para mudar para a nova branch, use:
      <br /><code>"git checkout nome-da-branch"</code> - Este comando muda a branch ativa para a branch especificada.
      Para criar e mudar para a nova branch em um único comando, use:
      <br /><code>"git checkout -b nome-da-branch"</code>
    `
  },
  {
    situation: "Atualizando branch principal",
    resolution: `
      Para atualizar a branch principal com as últimas mudanças do repositório remoto, use:
      <br /><code>"git pull origin main"</code> - Este comando baixa as alterações da branch principal no repositório remoto e as aplica à sua branch local atual. 
      Se a branch remota estiver com um nome diferente, substitua "main" pelo nome correto da branch.
    `
  },
  {
    situation: "Verificando o estado do repositório",
    resolution: `
      Para verificar o estado atual do repositório e identificar quais arquivos foram modificados, adicionados ou excluídos, use:
      <br /><code>"git status"</code> - Este comando mostra uma visão geral das mudanças não commitadas e o estado atual dos arquivos em seu repositório.
    `
  },
  {
    situation: "Revertendo commits",
    resolution: `
      Para desfazer um commit específico e criar um novo commit que reverte suas alterações, use:
      <br /><code>"git revert hash-do-commit"</code> - Substitua "hash-do-commit" pelo identificador do commit que deseja reverter. 
      Isso cria um novo commit que aplica a inversão das mudanças feitas pelo commit especificado, sem alterar o histórico dos commits anteriores.
    `
  },
  {
    situation: "Lidando com commits locais não enviados",
    resolution: `
      Para enviar commits locais não enviados ao repositório remoto, use:
      <br /><code>"git push origin nome-da-branch"</code> - Isso envia suas alterações locais para a branch especificada no repositório remoto.
    `
  },
  {
    situation: "Recuperando arquivos deletados",
    resolution: `
      Para recuperar arquivos que foram deletados mas ainda não foram commitados, use:
      <br /><code>"git checkout nome-do-arquivo"</code> - Isso restaura o arquivo deletado ao seu estado mais recente conhecido.
    `
  },
  {
    situation: "Verificando diferenças entre commits",
    resolution: `
      Para comparar as diferenças entre dois commits específicos, use:
      <br /><code>"git diff hash1 hash2"</code> - Substitua "hash1" e "hash2" pelos identificadores dos commits que deseja comparar. 
      Este comando mostra as diferenças entre os dois commits indicados.
    `
  },
  {
    situation: "Desfazendo commits recentes",
    resolution: `
      Para desfazer os commits mais recentes de sua branch local, use:
      <br /><code>"git reset --hard hash-do-commit"</code> - Este comando retorna o repositório ao estado do commit especificado, descartando todas as mudanças realizadas após esse commit.
    `
  },
  {
    situation: "Verificando commits específicos",
    resolution: `
      Para visualizar detalhes de um commit específico, use:
      <br /><code>"git show hash-do-commit"</code> - Substitua "hash-do-commit" pelo identificador do commit. 
      Este comando exibe informações detalhadas sobre o commit, incluindo as mudanças feitas.
    `
  },
  {
    situation: "Comparando mudanças não commitadas",
    resolution: `
      Para ver as mudanças que foram feitas em relação ao último commit, use:
      <br /><code>"git diff"</code> - Este comando mostra todas as alterações não commitadas em seus arquivos desde o último commit.
    `
  },
  {
    situation: "Criando tags",
    resolution: `
      Para criar uma tag em um commit específico, use:
      <br /><code>"git tag nome-da-tag hash-do-commit"</code> - Substitua "nome-da-tag" pelo nome da tag e "hash-do-commit" pelo identificador do commit.
      Tags são usadas para marcar pontos específicos na história do repositório, como versões de lançamento.
    `
  },
  {
    situation: "Removendo tags",
    resolution: `
      Para remover uma tag localmente, use:
      <br /><code>"git tag -d nome-da-tag"</code> - Substitua "nome-da-tag" pelo nome da tag que deseja remover.
      Para remover uma tag do repositório remoto, use:
      <br /><code>"git push origin --delete nome-da-tag"</code>
    `
  },
  {
    situation: "Sincronizando branches locais e remotas",
    resolution: `
      Para sincronizar sua branch local com a branch remota correspondente, use:
      <br /><code>"git pull"</code> - Esse comando puxa e aplica as mudanças do repositório remoto na sua branch local.
      Para verificar se a branch local está atualizada com o remoto, use:
      <br /><code>"git fetch"</code> e depois <br /><code>"git status"</code> para comparar com o estado remoto.
    `
  },
  {
    situation: "Lidando com arquivos grandes",
    resolution: `
      Se você precisar lidar com arquivos grandes no seu repositório, considere usar Git Large File Storage (LFS). 
      Para adicionar um arquivo grande com Git LFS, use:
      <br /><code>"git lfs track nome-do-arquivo"</code> e depois adicione e commit o arquivo normalmente.
    `
  }
];

const IntroText = () => {
    return (
        <div className="max-w-[800px] w-full mx-[auto] my-[0] mt-0 px-4 md:mt-24">
        <h1 className="text-4xl font-extrabold text-red-600 mt-8">Git Tutorial</h1>
        <p className="text-lg text-gray-700">Tenha os códigos Git e sua explicação na palma da sua mão. Saiba algumas situações do dia e dúvidas recorrentes.</p>
        <div>
        <Accordion type="multiple" className="w-full">
            <AccordionItem value="topics">
                <AccordionTrigger>Tópicos</AccordionTrigger>
                <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                          <a href="#config" className="text-black-500 hover:text-black-900 hover:underline">Inicialização e Configuração</a>
                        </li>
                        <li>
                          <a href="#add-commit" className="text-black-500 hover:text-black-900 hover:underline">Adicionando e Cometendo Alterações</a>
                        </li>
                        <li>
                          <a href="#branches" className="text-black-500 hover:text-black-900 hover:underline">Trabalhando com Branches</a>
                        </li>
                        <li>
                          <a href="#reporemoto" className="text-black-500 hover:text-black-900 hover:underline">Trabalhando com Repositórios Remotos</a>
                        </li>
                        <li>
                          <a href="#conflits" className="text-black-500 hover:text-black-900 hover:underline">Resolução de Conflitos</a>
                        </li>
                        <li>
                          <a href="#tag" className="text-black-500 hover:text-black-900 hover:underline">Tagging e Versionamento</a>
                        </li>
                        <li>
                          <a href="#history" className="text-black-500 hover:text-black-900 hover:underline">Visualização e Navegação do Histórico</a>
                        </li>
                        <li>
                          <a href="#commit" className="text-black-500 hover:text-black-900 hover:underline">Alterações e Manipulação de Commits</a>
                        </li>
                        <li>
                          <a href="#merge" className="text-black-500 hover:text-black-900 hover:underline">Merge e Rebase</a>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq">
                <AccordionTrigger>Dúvidas Frequentes</AccordionTrigger>
                <AccordionContent>
                <ul className="list-inside space-y-2">
                            {faqItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0">-</div>
                                    <div className="ml-4 text-gray-700">
                                        <p><strong>{item.question}</strong></p>
                                        <p className="mt-1" dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="situations">
                <AccordionTrigger>Situações Comuns</AccordionTrigger>
              <AccordionContent>
              <ul className="list-inside space-y-2">
                            {commonSituationsItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0">-</div>
                                    <div className="ml-4 text-gray-700">
                                        <p><strong>{item.situation}</strong></p>
                                        <p className="mt-1" dangerouslySetInnerHTML={{ __html: item.resolution }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    )
}

export default IntroText
