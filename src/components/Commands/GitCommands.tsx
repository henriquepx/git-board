import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const sections = [
  {
    "title": "Inicialização e Configuração",
    "id": "config",
    "commands": [
      {
        "command": "git init",
        "explanation": "Inicializa um novo repositório Git na pasta atual. Cria um novo diretório .git no seu projeto, permitindo que o Git comece a rastrear o histórico de alterações."
      },
      {
        "command": "git clone <url-do-repositorio>",
        "explanation": "Clona um repositório existente. Cria uma cópia local de um repositório remoto."
      },
      {
        "command": 'git config --global user.name "Seu Nome"',
        "explanation": "Define o nome de usuário global para commits. O --global aplica esta configuração a todos os repositórios no seu sistema."
      },
      {
        "command": 'git config --global user.email "seuemail@example.com"',
        "explanation": "Define o e-mail global para commits. Também é uma configuração global."
      },
      {
        "command": 'git config user.name "Seu Nome"',
        "explanation": "Define o nome de usuário local para commits no repositório atual."
      },
      {
        "command": 'git config user.email "seuemail@example.com"',
        "explanation": "Define o e-mail local para commits no repositório atual."
      },
      {
        "command": "git config --global core.editor <editor>",
        "explanation": "Define o editor de texto padrão global para Git. Substitua <editor> pelo nome do editor que deseja usar."
      },
      {
        "command": "git config --global merge.tool <merge-tool>",
        "explanation": "Define a ferramenta de merge padrão global para Git. Substitua <merge-tool> pela ferramenta de merge desejada."
      },
      {
        "command": "git config --list",
        "explanation": "Lista todas as configurações do Git. Mostra todas as configurações de usuário atuais."
      },
      {
        "command": "git config <key>",
        "explanation": "Obtém o valor de uma configuração específica do Git. Substitua <key> pela chave da configuração desejada."
      },
      {
        "command": 'git config --global alias.<alias> "<comando git>"',
        "explanation": "Cria um alias global para um comando Git. Substitua <alias> pelo nome do alias e <comando git> pelo comando Git que deseja encurtar."
      },
      {
        "command": "git remote add <nome> <url>",
        "explanation": "Adiciona um repositório remoto. Substitua <nome> pelo nome do repositório remoto e <url> pelo URL do repositório remoto."
      },
      {
        "command": "git remote -v",
        "explanation": "Lista todos os repositórios remotos. Mostra os URLs dos repositórios remotos associados ao repositório local."
      },
      {
        "command": "git remote remove <nome>",
        "explanation": "Remove um repositório remoto. Substitua <nome> pelo nome do repositório remoto que deseja remover."
      },
      {
        "command": "git remote rename <nome-antigo> <nome-novo>",
        "explanation": "Renomeia um repositório remoto. Substitua <nome-antigo> pelo nome atual do repositório remoto e <nome-novo> pelo novo nome."
      }
    ]
  },
  {
    "title": "Adicionando e Cometendo Alterações",
    "id": "add-commit",
    "commands": [
      {
        "command": "git add .",
        "explanation": "Adiciona todos os arquivos modificados ao próximo commit. Marca todos os arquivos no diretório atual para serem incluídos no próximo commit."
      },
      {
        "command": "git add <arquivo>",
        "explanation": "Adiciona um arquivo específico ao próximo commit. Marca o arquivo especificado para ser incluído no próximo commit."
      },
      {
        "command": 'git commit -m "Mensagem do commit"',
        "explanation": "Cria um novo commit com a mensagem especificada. Salva as mudanças adicionadas ao repositório com uma mensagem descritiva."
      },
      {
        "command": 'git commit -am "Mensagem do commit"',
        "explanation": "Adiciona e commita todas as mudanças rastreadas. Combina 'git add' e 'git commit' em um único comando para arquivos rastreados."
      },
      {
        "command": "git commit --amend",
        "explanation": "Modifica o último commit. Permite alterar a mensagem do último commit ou adicionar mudanças ao último commit."
      },
      {
        "command": "git status",
        "explanation": "Mostra o estado atual dos arquivos no repositório. Exibe quais arquivos foram modificados, quais estão prontos para commit, e quais ainda não foram rastreados."
      },
      {
        "command": "git diff",
        "explanation": "Mostra as diferenças entre arquivos modificados e o último commit. Exibe as mudanças feitas nos arquivos que ainda não foram commitadas."
      },
      {
        "command": "git diff --staged",
        "explanation": "Mostra as diferenças entre arquivos adicionados e o último commit. Exibe as mudanças que estão prontas para serem commitadas."
      },
      {
        "command": "git log",
        "explanation": "Mostra o histórico de commits. Exibe uma lista dos commits anteriores no repositório."
      },
      {
        "command": "git log --oneline",
        "explanation": "Mostra o histórico de commits em uma linha por commit. Exibe uma versão simplificada do log de commits."
      },
      {
        "command": "git reset <arquivo>",
        "explanation": "Remove um arquivo da área de staging. Desfaz o 'git add' para o arquivo especificado, mantendo as mudanças no diretório de trabalho."
      },
      {
        "command": "git reset --soft <commit>",
        "explanation": "Reseta para um commit anterior, mantendo mudanças. Move a HEAD para o commit especificado, mantendo as mudanças na área de staging."
      },
      {
        "command": "git reset --hard <commit>",
        "explanation": "Reseta para um commit anterior, descartando mudanças. Move a HEAD para o commit especificado e descarta todas as mudanças no diretório de trabalho."
      },
      {
        "command": "git clean -f",
        "explanation": "Remove arquivos não rastreados do diretório de trabalho. Limpa arquivos não rastreados no repositório."
      },
      {
        "command": "git clean -fd",
        "explanation": "Remove arquivos e diretórios não rastreados do diretório de trabalho. Limpa arquivos e diretórios não rastreados no repositório."
      }
    ]
  },
  {
    "title": "Trabalhando com Branches",
    "id": "branches",
    "commands": [
      {
        "command": "git branch",
        "explanation": "Lista todas as branches no repositório. Mostra todas as branches locais disponíveis."
      },
      {
        "command": "git branch <nome-da-branch>",
        "explanation": "Cria uma nova branch. Cria uma nova branch com o nome especificado, sem mudar para ela."
      },
      {
        "command": "git checkout <nome-da-branch>",
        "explanation": "Muda para a branch especificada. Troca para a branch indicada, permitindo trabalhar nela."
      },
      {
        "command": "git checkout -b <nome-da-branch>",
        "explanation": "Cria e muda para uma nova branch. Cria uma nova branch e imediatamente muda para ela."
      },
      {
        "command": "git merge <nome-da-branch>",
        "explanation": "Mescla a branch especificada na branch atual. Combina as mudanças da branch especificada com a branch em que você está atualmente."
      },
      {
        "command": "git branch -r",
        "explanation": "Lista todas as branches remotas. Exibe as branches disponíveis no repositório remoto."
      },
      {
        "command": "git push origin --delete <nome-da-branch>",
        "explanation": "Exclui uma branch remota. Remove a branch especificada do repositório remoto."
      },
      {
        "command": "git branch -a",
        "explanation": "Lista todas as branches, locais e remotas. Exibe todas as branches do repositório."
      },
      {
        "command": "git branch -d <nome-da-branch>",
        "explanation": "Deleta uma branch local. Remove a branch especificada do repositório local."
      },
      {
        "command": "git push origin <nome-da-branch>",
        "explanation": "Envia a branch para o repositório remoto. Faz o push da branch especificada para o repositório remoto."
      },
      {
        "command": "git fetch origin",
        "explanation": "Atualiza as referências remotas. Baixa as atualizações das branches remotas."
      },
      {
        "command": "git branch --merged",
        "explanation": "Lista branches mescladas na branch atual. Mostra as branches que já foram mescladas na branch em que você está."
      },
      {
        "command": "git branch --no-merged",
        "explanation": "Lista branches que não foram mescladas na branch atual. Mostra as branches que ainda não foram mescladas na branch em que você está."
      }
    ]
  },
  {
    "title": "Trabalhando com Repositórios Remotos",
    "id": "remotos",
    "commands": [
      {
        "command": "git remote add <nome> <url>",
        "explanation": "Adiciona um repositório remoto. Substitua <nome> pelo nome do repositório remoto e <url> pelo URL do repositório remoto."
      },
      {
        "command": "git remote -v",
        "explanation": "Lista todos os repositórios remotos. Mostra os URLs dos repositórios remotos associados ao repositório local."
      },
      {
        "command": "git remote remove <nome>",
        "explanation": "Remove um repositório remoto. Substitua <nome> pelo nome do repositório remoto que deseja remover."
      },
      {
        "command": "git remote rename <nome-antigo> <nome-novo>",
        "explanation": "Renomeia um repositório remoto. Substitua <nome-antigo> pelo nome atual do repositório remoto e <nome-novo> pelo novo nome."
      },
      {
        "command": "git push origin <nome-da-branch>",
        "explanation": "Envia a branch para o repositório remoto. Faz o push da branch especificada para o repositório remoto."
      },
      {
        "command": "git pull",
        "explanation": "Baixa e integra as atualizações do repositório remoto. Combina 'git fetch' e 'git merge' em um único comando."
      },
      {
        "command": "git fetch",
        "explanation": "Baixa atualizações do repositório remoto sem integrá-las. Atualiza as referências remotas sem mesclar as mudanças."
      },
      {
        "command": "git push origin --delete <nome-da-branch>",
        "explanation": "Exclui uma branch remota. Remove a branch especificada do repositório remoto."
      }
    ]
  },
  {
    "title": "Trabalhando com Stash",
    "id": "stash",
    "commands": [
      {
        "command": "git stash",
        "explanation": "Salva as mudanças no stash. Armazena temporariamente as mudanças não commitadas para que você possa trabalhar em outra coisa."
      },
      {
        "command": "git stash pop",
        "explanation": "Aplica as mudanças do stash e as remove do stash. Restaura as mudanças e as remove da lista de stash."
      },
      {
        "command": "git stash list",
        "explanation": "Lista todas as entradas no stash. Mostra uma lista de todas as mudanças armazenadas no stash."
      },
      {
        "command": "git stash apply",
        "explanation": "Aplica as mudanças do stash sem removê-las do stash. Restaura as mudanças sem removê-las da lista de stash."
      },
      {
        "command": "git stash drop",
        "explanation": "Remove uma entrada específica do stash. Exclui uma entrada da lista de stash sem aplicá-la."
      },
      {
        "command": "git stash clear",
        "explanation": "Remove todas as entradas do stash. Limpa todas as mudanças armazenadas no stash."
      }
    ]
  },
  {
    "title": "Outros Comandos Úteis",
    "id": "outros",
    "commands": [
      {
        "command": "git rebase <branch>",
        "explanation": "Move ou reaplica commits em cima de outra branch. Faz com que os commits da branch atual sejam aplicados em cima da branch especificada."
      },
      {
        "command": "git cherry-pick <commit>",
        "explanation": "Aplica um commit específico na branch atual. Permite aplicar um commit de outra branch na branch em que você está."
      },
      {
        "command": "git tag <nome-do-tag>",
        "explanation": "Cria uma tag com o nome especificado. Marca um ponto específico na história do repositório com um nome."
      },
      {
        "command": "git tag",
        "explanation": "Lista todas as tags. Exibe uma lista de todas as tags no repositório."
      },
      {
        "command": "git blame <arquivo>",
        "explanation": "Mostra quem fez as alterações em cada linha de um arquivo. Exibe a autoria de cada linha de um arquivo, útil para rastrear mudanças."
      }
    ]
  }
];
const GitCommands = () => {
  const [hydrated, setHydrated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredSections = sections.filter(section => {
    const sectionMatches = section.title.toLowerCase().includes(searchTerm.toLowerCase());
    const commandsMatch = section.commands.some(command =>
      command.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.explanation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return sectionMatches || commandsMatch;
  }).map(section => ({
    ...section,
    commands: section.commands.filter(command =>
      command.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.explanation.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="max-w-[800px] w-full mx-[auto] my-[0] px-4">
      <div className="flex w-full items-center space-x-2 mt-6">
        <Input
          type="text"
          placeholder="Buscar código"
          onChange={handleSearchChange}
          value={searchTerm}
          className="w-100%" 
        />
        <Button type="submit">Buscar</Button>
      </div>
      {filteredSections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-1 mt-10" id={section.id}>
            {section.title}
          </h2>
          <ul>
            {section.commands.map((cmd, cmdIndex) => (
              <li key={cmdIndex} className="mb-4 flex items-start">
                <p className="ml-4 text-gray-700 flex-1">
                  <Badge variant="outline">{cmd.command}</Badge>: {cmd.explanation}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GitCommands;