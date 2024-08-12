import React from 'react'

export const commonSituationsItems = [
  {
    id: "merge-conflicts",
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
    id: "reverting-changes",
    situation: "Revertendo alterações",
    resolution: `
      Para descartar alterações não commitadas em um arquivo específico e restaurá-lo ao estado do último commit, use:
      <br /><code>"git checkout -- nome-do-arquivo"</code> - Este comando descarta todas as mudanças não salvas no arquivo especificado e o retorna ao estado do último commit confirmado.
    `
  },
  {
    id: "working-with-branches",
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
    id: "updating-main-branch",
    situation: "Atualizando branch principal",
    resolution: `
      Para atualizar a branch principal com as últimas mudanças do repositório remoto, use:
      <br /><code>"git pull origin main"</code> - Este comando baixa as alterações da branch principal no repositório remoto e as aplica à sua branch local atual. 
      Se a branch remota estiver com um nome diferente, substitua "main" pelo nome correto da branch.
    `
  },
  {
    id: "resolve-merge-conflicts",
    situation: "Resolvendo conflitos de merge",
    resolution: `
      Para resolver conflitos de merge, primeiro edite os arquivos que contêm conflitos para corrigir as diferenças. 
      Após resolver os conflitos, use:
      <br /><code>"git add nome-do-arquivo"</code> para marcar os arquivos como resolvidos.
      Em seguida, finalize o merge com:
      <br /><code>"git commit"</code> - Este comando cria um commit que registra a resolução dos conflitos e completa o merge.
    `
  },
  {
    id: "check-repo-status",
    situation: "Verificando o estado do repositório",
    resolution: `
      Para verificar o estado atual do repositório e identificar quais arquivos foram modificados, adicionados ou excluídos, use:
      <br /><code>"git status"</code> - Este comando mostra uma visão geral das mudanças não commitadas e o estado atual dos arquivos em seu repositório.
    `
  },
  {
    id: "reverting-commits",
    situation: "Revertendo commits",
    resolution: `
      Para desfazer um commit específico e criar um novo commit que reverte suas alterações, use:
      <br /><code>"git revert hash-do-commit"</code> - Substitua "hash-do-commit" pelo identificador do commit que deseja reverter. 
      Isso cria um novo commit que aplica a inversão das mudanças feitas pelo commit especificado, sem alterar o histórico dos commits anteriores.
    `
  },
  {
    id: "local-unpushed-commits",
    situation: "Lidando com commits locais não enviados",
    resolution: `
      Para enviar commits locais não enviados ao repositório remoto, use:
      <br /><code>"git push origin nome-da-branch"</code> - Isso envia suas alterações locais para a branch especificada no repositório remoto.
    `
  },
  {
    id: "recover-deleted-files",
    situation: "Recuperando arquivos deletados",
    resolution: `
      Para recuperar arquivos que foram deletados mas ainda não foram commitados, use:
      <br /><code>"git checkout nome-do-arquivo"</code> - Isso restaura o arquivo deletado ao seu estado mais recente conhecido.
    `
  },
  {
    id: "check-commit-differences",
    situation: "Verificando diferenças entre commits",
    resolution: `
      Para comparar as diferenças entre dois commits específicos, use:
      <br /><code>"git diff hash1 hash2"</code> - Substitua "hash1" e "hash2" pelos identificadores dos commits que deseja comparar. 
      Este comando mostra as diferenças entre os dois commits indicados.
    `
  },
  {
    id: "undo-recent-commits",
    situation: "Desfazendo commits recentes",
    resolution: `
      Para desfazer os commits mais recentes de sua branch local, use:
      <br /><code>"git reset --hard hash-do-commit"</code> - Este comando retorna o repositório ao estado do commit especificado, descartando todas as mudanças realizadas após esse commit.
    `
  },
  {
    id: "show-specific-commit",
    situation: "Verificando commits específicos",
    resolution: `
      Para visualizar detalhes de um commit específico, use:
      <br /><code>"git show hash-do-commit"</code> - Substitua "hash-do-commit" pelo identificador do commit. 
      Este comando exibe informações detalhadas sobre o commit, incluindo as mudanças feitas.
    `
  },
  {
    id: "uncommitted-changes",
    situation: "Comparando mudanças não commitadas",
    resolution: `
      Para ver as mudanças que foram feitas em relação ao último commit, use:
      <br /><code>"git diff"</code> - Este comando mostra todas as alterações não commitadas em seus arquivos desde o último commit.
    `
  },
  {
    id: "creating-tags",
    situation: "Criando tags",
    resolution: `
      Para criar uma tag em um commit específico, use:
      <br /><code>"git tag nome-da-tag hash-do-commit"</code> - Substitua "nome-da-tag" pelo nome da tag e "hash-do-commit" pelo identificador do commit.
      Tags são usadas para marcar pontos específicos na história do repositório, como versões de lançamento.
    `
  },
  {
    id: "removing-tags",
    situation: "Removendo tags",
    resolution: `
      Para remover uma tag localmente, use:
      <br /><code>"git tag -d nome-da-tag"</code> - Substitua "nome-da-tag" pelo nome da tag que deseja remover.
      Para remover uma tag do repositório remoto, use:
      <br /><code>"git push origin --delete nome-da-tag"</code>
    `
  },
  {
    id: "syncing-branches",
    situation: "Sincronizando branches locais e remotas",
    resolution: `
      Para sincronizar sua branch local com a branch remota correspondente, use:
      <br /><code>"git pull"</code> - Esse comando puxa e aplica as mudanças do repositório remoto na sua branch local.
      Para verificar se a branch local está atualizada com o remoto, use:
      <br /><code>"git fetch"</code> e depois <br /><code>"git status"</code> para comparar com o estado remoto.
    `
  },
  {
    id: "handling-large-files",
    situation: "Lidando com arquivos grandes",
    resolution: `
      Se você precisar lidar com arquivos grandes no seu repositório, considere usar Git Large File Storage (LFS). 
      Para adicionar um arquivo grande com Git LFS, use:
      <br /><code>"git lfs track nome-do-arquivo"</code> e depois adicione e commit o arquivo normalmente.
    `
  }
];

const SituationsCommands = () => {
    return (
        <div className="max-w-[800px] w-full mx-auto my-0 px-4">
            <h1 className='text-lg font-bold mb-1 mt-2'>Situações Comuns:</h1>
            {commonSituationsItems.map((item, index) => (
                <div key={index} className="mb-3">
                    <h2 className="text-sm font-bold mb-1 mt-2" id={item.id}>{item.situation}</h2>
                    <p className="ml-6 text-gray-800 leading-6" dangerouslySetInnerHTML={{ __html: item.resolution }}></p>
                </div>
            ))}
            <hr className="my-8 border-t-2 border-gray-300" />
        </div>
      );
    };

export default SituationsCommands
