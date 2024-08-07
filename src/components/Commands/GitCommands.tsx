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
        },
        {
          "command": "git stash",
          "explanation": "Salva temporariamente mudanças não commitadas. Permite que você limpe o seu diretório de trabalho sem perder as mudanças locais."
        },
        {
          "command": "git stash pop",
          "explanation": "Aplica as mudanças stash e remove-as da lista de stash. Retorna as mudanças stash ao seu diretório de trabalho."
        },
        {
          "command": "git stash list",
          "explanation": "Lista todas as mudanças stash salvas. Mostra todas as entradas stash disponíveis."
        },
        {
          "command": "git stash apply",
          "explanation": "Aplica as mudanças stash sem removê-las da lista de stash. Permite que você re-aplique as mudanças stash quantas vezes quiser."
        },
        {
          "command": "git stash drop",
          "explanation": "Remove uma entrada stash específica. Substitua <stash@{n}> pela entrada stash que deseja remover."
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
        },
        {
          "command": "git stash",
          "explanation": "Salva temporariamente mudanças não commitadas. Permite que você limpe o seu diretório de trabalho sem perder as mudanças locais."
        },
        {
          "command": "git stash pop",
          "explanation": "Aplica as mudanças stash e remove-as da lista de stash. Retorna as mudanças stash ao seu diretório de trabalho."
        },
        {
          "command": "git stash list",
          "explanation": "Lista todas as mudanças stash salvas. Mostra todas as entradas stash disponíveis."
        },
        {
          "command": "git stash apply",
          "explanation": "Aplica as mudanças stash sem removê-las da lista de stash. Permite que você re-aplique as mudanças stash quantas vezes quiser."
        },
        {
          "command": "git stash drop",
          "explanation": "Remove uma entrada stash específica. Substitua <stash@{n}> pela entrada stash que deseja remover."
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
          "command": "git branch nome-da-branch",
          "explanation": "Cria uma nova branch. Cria uma nova branch com o nome especificado, sem mudar para ela."
        },
        {
          "command": "git checkout nome-da-branch",
          "explanation": "Muda para a branch especificada. Troca para a branch indicada, permitindo trabalhar nela."
        },
        {
          "command": "git checkout -b nome-da-branch",
          "explanation": "Cria e muda para uma nova branch. Cria uma nova branch e imediatamente muda para ela."
        },
        {
          "command": "git merge nome-da-branch",
          "explanation": "Mescla a branch especificada na branch atual. Combina as mudanças da branch especificada com a branch em que você está atualmente."
        },
        {
          "command": "git branch -r",
          "explanation": "Lista todas as branches remotas. Exibe as branches disponíveis no repositório remoto."
        },
        {
          "command": "git push origin --delete nome-da-branch",
          "explanation": "Exclui uma branch remota. Remove a branch especificada do repositório remoto."
        },
        {
          "command": "git branch -a",
          "explanation": "Lista todas as branches, locais e remotas. Exibe todas as branches do repositório."
        },
        {
          "command": "git branch -d nome-da-branch",
          "explanation": "Deleta uma branch local. Remove a branch especificada do repositório local."
        },
        {
          "command": "git push origin nome-da-branch",
          "explanation": "Envia a branch para o repositório remoto. Faz o push da branch especificada para o repositório remoto."
        },
        {
          "command": "git fetch origin",
          "explanation": "Atualiza as referências remotas. Baixa as atualizações das branches remotas."
        },
        {
          "command": "git branch --merged",
          "explanation": "Lista branches mescladas na branch atual. Mostra todas as branches que foram mescladas na branch em que você está."
        },
        {
          "command": "git branch --no-merged",
          "explanation": "Lista branches não mescladas na branch atual. Mostra todas as branches que não foram mescladas na branch em que você está."
        },
        {
          "command": "git checkout --track origin/nome-da-branch",
          "explanation": "Cria uma nova branch local que rastreia uma branch remota. Cria e muda para uma nova branch local que rastreia a branch remota especificada."
        },
        {
          "command": "git pull origin nome-da-branch",
          "explanation": "Atualiza a branch local com mudanças da branch remota. Faz o pull das alterações da branch remota especificada para a branch local correspondente."
        },
        {
          "command": "git branch -m nome-antigo nome-novo",
          "explanation": "Renomeia uma branch. Muda o nome da branch local de nome-antigo para nome-novo."
        },
        {
          "command": "git rebase nome-da-branch",
          "explanation": "Rebase a branch atual na branch especificada. Reaplica os commits da branch atual sobre a base da branch especificada."
        },
        {
          "command": "git cherry-pick <commit>",
          "explanation": "Aplica um commit específico em uma branch. Pega o commit especificado e aplica na branch atual."
        }
      ]
    },
    {
      "title": "Trabalhando com Repositórios Remotos",
      "id": "reporemoto",
      "commands": [
        {
          "command": "git remote add origin https://github.com/usuario/repositorio.git",
          "explanation": "Adiciona um repositório remoto. Define o repositório remoto (origin) que será usado para enviar e buscar alterações."
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
          "command": "git push -u origin nome-da-branch",
          "explanation": "Envia as alterações locais para o repositório remoto. Faz o upload da branch local para o repositório remoto e define o rastreamento da branch."
        },
        {
          "command": "git push origin nome-da-branch",
          "explanation": "Envia as alterações locais para a branch especificada no repositório remoto. Faz o upload da branch local para o repositório remoto."
        },
        {
          "command": "git push",
          "explanation": "Envia as alterações locais para o repositório remoto. Faz o upload da branch atual para o repositório remoto."
        },
        {
          "command": "git push origin --delete nome-da-branch",
          "explanation": "Exclui uma branch remota. Remove a branch especificada do repositório remoto."
        },
        {
          "command": "git pull",
          "explanation": "Busca e integra mudanças do repositório remoto para a branch atual. Atualiza sua branch local com as mudanças do repositório remoto, integrando-as com as suas mudanças."
        },
        {
          "command": "git fetch",
          "explanation": "Obtém mudanças do repositório remoto sem integrá-las. Baixa as alterações do repositório remoto, mas não as aplica na branch atual até que você faça um merge ou rebase."
        },
        {
          "command": "git fetch --all",
          "explanation": "Obtém mudanças de todos os repositórios remotos configurados. Baixa as alterações de todos os repositórios remotos associados ao repositório local."
        },
        {
          "command": "git fetch origin",
          "explanation": "Obtém mudanças do repositório remoto 'origin' sem integrá-las. Baixa as alterações do repositório remoto 'origin', mas não as aplica na branch atual até que você faça um merge ou rebase."
        },
        {
          "command": "git clone https://github.com/usuario/repositorio.git",
          "explanation": "Clona um repositório remoto para um diretório local. Cria uma cópia completa de um repositório remoto, incluindo todo o histórico de commits e branches."
        },
        {
          "command": "git clone -b nome-da-branch https://github.com/usuario/repositorio.git",
          "explanation": "Clona uma branch específica de um repositório remoto para um diretório local. Cria uma cópia completa da branch especificada de um repositório remoto."
        },
        {
          "command": "git push --tags",
          "explanation": "Envia todas as tags locais para o repositório remoto. Faz o upload de todas as tags criadas localmente para o repositório remoto."
        }
      ]
    },
    {
      "title": "Resolução de Conflitos",
      "id": "conflits",
      "commands": [
        {
          "command": "git status",
          "explanation": "Verifica o estado dos arquivos durante conflitos de merge. Mostra arquivos que estão em conflito e precisam ser resolvidos antes do commit."
        },
        {
          "command": "git diff",
          "explanation": "Exibe diferenças entre arquivos modificados e o último commit. Mostra as alterações feitas nos arquivos comparadas com a última versão commitada."
        },
        {
          "command": "git diff <nome-do-arquivo>",
          "explanation": "Exibe as diferenças específicas para um arquivo durante um conflito. Mostra as mudanças feitas em um arquivo específico que está em conflito."
        },
        {
          "command": "git add <nome-do-arquivo>",
          "explanation": "Adiciona arquivos resolvidos ao índice após a resolução de conflitos. Marca arquivos como resolvidos e prontos para commit após a resolução de conflitos."
        },
        {
          "command": "git commit",
          "explanation": "Faz o commit das mudanças após a resolução de conflitos. Finaliza o merge ou rebase após a resolução de conflitos."
        },
        {
          "command": "git mergetool",
          "explanation": "Usa uma ferramenta de merge para ajudar a resolver conflitos. Abre a ferramenta de merge configurada para resolver conflitos de forma interativa."
        },
        {
          "command": "git merge --abort",
          "explanation": "Aborta o processo de merge e reverte as mudanças para o estado anterior ao merge. Desfaz todas as alterações feitas durante o merge."
        },
        {
          "command": "git rebase --abort",
          "explanation": "Aborta o processo de rebase e reverte as mudanças para o estado anterior ao rebase. Desfaz todas as alterações feitas durante o rebase."
        },
        {
          "command": "git rebase --continue",
          "explanation": "Continua o processo de rebase após resolver conflitos. Prossegue com o rebase após resolver os conflitos."
        },
        {
          "command": "git log --merge",
          "explanation": "Exibe o log de commits que causaram conflitos de merge. Mostra os commits que estão causando conflitos no merge atual."
        },
        {
          "command": "git checkout --ours <nome-do-arquivo>",
          "explanation": "Mantém a versão atual do arquivo durante um conflito. Escolhe a versão do arquivo na branch atual ao resolver um conflito."
        },
        {
          "command": "git checkout --theirs <nome-do-arquivo>",
          "explanation": "Mantém a versão da branch de merge do arquivo durante um conflito. Escolhe a versão do arquivo na branch que está sendo mesclada ao resolver um conflito."
        }
      ]
    },
    {
      "title": "Tagging e Versionamento",
      "id": "tag",
      "commands": [
        {
          "command": "git tag nome-da-tag",
          "explanation": "Cria uma nova tag. Adiciona uma marca (tag) ao commit atual, geralmente usada para marcar lançamentos ou versões importantes."
        },
        {
          "command": "git tag -a nome-da-tag -m \"Mensagem\"",
          "explanation": "Cria uma tag anotada com uma mensagem. Adiciona uma tag com uma anotação e mensagem, útil para documentação de versões."
        },
        {
          "command": "git show nome-da-tag",
          "explanation": "Mostra informações sobre a tag especificada. Exibe detalhes sobre o commit associado à tag."
        },
        {
          "command": "git tag -l",
          "explanation": "Lista todas as tags. Exibe todas as tags disponíveis no repositório."
        },
        {
          "command": "git tag -d nome-da-tag",
          "explanation": "Deleta uma tag localmente. Remove a tag especificada do repositório local."
        },
        {
          "command": "git push origin nome-da-tag",
          "explanation": "Envia uma tag para o repositório remoto. Faz o upload da tag especificada para o repositório remoto."
        },
        {
          "command": "git push origin --tags",
          "explanation": "Envia todas as tags locais para o repositório remoto. Faz o upload de todas as tags criadas localmente para o repositório remoto."
        },
        {
          "command": "git push origin :refs/tags/nome-da-tag",
          "explanation": "Deleta uma tag do repositório remoto. Remove a tag especificada do repositório remoto."
        },
        {
          "command": "git checkout nome-da-tag",
          "explanation": "Verifica o estado do repositório em um ponto específico no tempo. Muda para o estado do repositório no momento do commit associado à tag especificada."
        }
      ]
    },
    {
      "title": "Visualização e Navegação do Histórico",
      "id": "history",
      "commands": [
        {
          "command": "git log",
          "explanation": "Exibe o histórico de commits. Mostra uma lista dos commits mais recentes, incluindo o hash, autor, data e mensagem de cada commit."
        },
        {
          "command": "git log --oneline",
          "explanation": "Exibe o histórico de commits em uma linha por commit. Mostra uma visualização compacta do histórico de commits com o hash abreviado e a mensagem do commit."
        },
        {
          "command": "git log --graph",
          "explanation": "Exibe o histórico de commits com uma representação gráfica de branches e merges. Mostra o histórico de commits em um formato visual que ilustra a estrutura de branches e merges."
        },
        {
          "command": "git log --stat",
          "explanation": "Exibe o histórico de commits com estatísticas de mudanças. Mostra o histórico de commits juntamente com o número de inserções e deleções em cada arquivo modificado."
        },
        {
          "command": "git log --author=\"Nome do Autor\"",
          "explanation": "Filtra o histórico de commits por autor. Mostra apenas os commits realizados pelo autor especificado."
        },
        {
          "command": "git log --grep=\"palavra-chave\"",
          "explanation": "Filtra o histórico de commits por palavra-chave na mensagem. Mostra apenas os commits cujas mensagens contêm a palavra-chave especificada."
        },
        {
          "command": "git diff nome-do-arquivo",
          "explanation": "Mostra as diferenças entre o arquivo no diretório de trabalho e o último commit. Exibe as mudanças feitas em um arquivo específico desde o último commit."
        },
        {
          "command": "git diff --cached",
          "explanation": "Mostra as diferenças entre o último commit e o índice (área de staging). Exibe as mudanças que foram adicionadas à área de staging e estão prontas para o próximo commit."
        },
        {
          "command": "git diff commit-id1 commit-id2",
          "explanation": "Mostra as diferenças entre dois commits específicos. Compara as mudanças feitas entre dois commits e exibe as diferenças."
        },
        {
          "command": "git show commit-id",
          "explanation": "Exibe informações detalhadas sobre um commit específico. Mostra as mudanças introduzidas por um commit, incluindo o patch."
        },
        {
          "command": "git blame nome-do-arquivo",
          "explanation": "Mostra quem modificou cada linha de um arquivo pela última vez. Exibe informações sobre o autor e o commit responsável por cada linha de um arquivo."
        },
        {
          "command": "git reflog",
          "explanation": "Exibe o histórico de referências. Mostra uma lista de todas as mudanças de referência no repositório, incluindo commits, resets e checkouts."
        },
        {
          "command": "git log --all --decorate --oneline --graph",
          "explanation": "Exibe um histórico de commits decorado e visualmente atraente. Combina várias opções para mostrar um histórico completo com gráficos de branches, hashes abreviados e informações decoradas."
        }
      ]
    }
    ,
    {
      "title": "Alterações e Manipulação de Commits",
      "id": "commit",
      "commands": [
        {
          "command": "git reset --hard HEAD",
          "explanation": "Desfaz todas as mudanças locais e reseta o repositório para o último commit. Remove todas as alterações no diretório de trabalho e na área de staging, retornando ao estado do último commit."
        },
        {
          "command": "git reset --soft HEAD~1",
          "explanation": "Desfaz o último commit, mas mantém as alterações no diretório de trabalho. Remove o último commit, mas mantém as mudanças na área de staging para que possam ser editadas ou recomitadas."
        },
        {
          "command": "git reset --mixed HEAD~1",
          "explanation": "Desfaz o último commit, mantendo as alterações no diretório de trabalho, mas removendo-as da área de staging. Retorna as mudanças do último commit para o diretório de trabalho sem adicioná-las à área de staging."
        },
        {
          "command": "git revert <commit>",
          "explanation": "Cria um novo commit que desfaz as mudanças do commit especificado. Inverte as alterações feitas por um commit específico, criando um novo commit com as mudanças opostas."
        },
        {
          "command": "git revert HEAD",
          "explanation": "Cria um novo commit que desfaz as mudanças do último commit. Inverte as alterações feitas pelo commit mais recente."
        },
        {
          "command": "git cherry-pick <commit>",
          "explanation": "Aplica as mudanças de um commit específico em sua branch atual. Extrai as alterações de um commit de outra branch e as aplica na branch atual."
        },
        {
          "command": "git commit --amend",
          "explanation": "Modifica o último commit. Permite alterar a mensagem do último commit ou adicionar mudanças ao último commit."
        },
        {
          "command": "git rebase -i HEAD~n",
          "explanation": "Rebase interativo para manipulação de commits. Permite reordenar, editar, ou combinar commits em uma série de commits recentes."
        },
        {
          "command": "git stash",
          "explanation": "Salva temporariamente mudanças não commitadas. Permite que você limpe o seu diretório de trabalho sem perder as mudanças locais."
        },
        {
          "command": "git stash pop",
          "explanation": "Aplica as mudanças stash e remove-as da lista de stash. Retorna as mudanças stash ao seu diretório de trabalho."
        },
        {
          "command": "git stash apply",
          "explanation": "Aplica as mudanças stash sem removê-las da lista de stash. Permite que você re-aplique as mudanças stash quantas vezes quiser."
        },
        {
          "command": "git clean -f",
          "explanation": "Remove arquivos não rastreados do diretório de trabalho. Limpa arquivos não rastreados no repositório."
        }
      ]
    },
    {
      "title": "Merge e Rebase",
      "id": "merge",
      "commands": [
        {
          "command": "git rebase nome-da-branch",
          "explanation": "Reaplica commits da branch atual em cima da branch especificada. Atualiza a branch atual para começar a partir do final da branch especificada, re-aplicando os commits da branch atual."
        },
        {
          "command": "git rebase --interactive HEAD~n",
          "explanation": "Permite editar uma série de commits recentes. Abre uma interface interativa para reescrever e modificar commits recentes."
        },
        {
          "command": "git merge nome-da-branch",
          "explanation": "Mescla a branch especificada na branch atual. Combina as mudanças da branch especificada com a branch atual."
        },
        {
          "command": "git merge --no-ff nome-da-branch",
          "explanation": "Mescla a branch especificada na branch atual sem fast-forward. Cria um commit de merge mesmo se a branch puder ser integrada sem ele, preservando o histórico de branches."
        },
        {
          "command": "git merge --squash nome-da-branch",
          "explanation": "Mescla a branch especificada na branch atual combinando os commits. Junta todas as mudanças da branch especificada em um único commit na branch atual."
        },
        {
          "command": "git rebase --onto nova-base base-antiga",
          "explanation": "Rebase de uma série de commits em uma nova base. Aplica os commits da branch antiga a partir da nova base, ignorando os commits na base antiga."
        },
        {
          "command": "git rebase --continue",
          "explanation": "Continua o processo de rebase após a resolução de conflitos. Prossegue com o rebase depois de resolver os conflitos."
        },
        {
          "command": "git rebase --abort",
          "explanation": "Aborta o processo de rebase e retorna à situação anterior ao rebase. Cancela o rebase e volta ao estado original antes do rebase começar."
        },
        {
          "command": "git rebase --skip",
          "explanation": "Pula o commit atual durante o rebase. Ignora o commit atual com conflito e continua com o próximo commit."
        },
        {
          "command": "git pull --rebase",
          "explanation": "Puxa as mudanças do repositório remoto e faz o rebase ao invés de merge. Atualiza a branch local com as mudanças do repositório remoto, reaplicando os commits locais no topo."
        },
        {
          "command": "git merge --abort",
          "explanation": "Aborta o processo de merge e retorna à situação anterior ao merge. Cancela o merge e volta ao estado original antes do merge começar."
        },
        {
          "command": "git merge --strategy-option ours",
          "explanation": "Força o uso da versão atual em conflitos durante o merge. Resolve conflitos de merge mantendo as mudanças da branch atual."
        },
        {
          "command": "git merge --strategy-option theirs",
          "explanation": "Força o uso da versão da branch mesclada em conflitos durante o merge. Resolve conflitos de merge mantendo as mudanças da branch mesclada."
        },
        {
          "command": "git rerere",
          "explanation": "Habilita a gravação de resoluções de conflitos de merge para reutilização futura. Mantém um registro das resoluções de conflitos para aplicá-las automaticamente em conflitos futuros semelhantes."
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