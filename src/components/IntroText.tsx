import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const IntroText = () => {
    return (
        <div className="max-w-[800px] w-full mx-[auto] my-[0] mt-24 px-4 sm:mt-0 md:mt-0">
        <h1 className="text-4xl font-extrabold text-red-600 mt-8">Git Tutorial</h1>
        <p className="text-lg text-gray-700">Aprenda todo o necessário sobre versionamento de código.</p>
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
                        <li className="flex items-start">
                            <div className="flex-shrink-0">-</div>
                            <p className="ml-4 text-gray-700"><strong>O que é Git?</strong> Git é um sistema de controle de versão distribuído que ajuda a gerenciar o histórico de alterações em arquivos e projetos.</p>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">-</div>
                            <p className="ml-4 text-gray-700"><strong>Como faço um commit?</strong> Use o comando <code>git commit -m</code> para registrar mudanças no repositório.</p>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">-</div>
                            <p className="ml-4 text-gray-700"><strong>Como reverter um commit?</strong> Use o comando <code>git revert</code> para desfazer as mudanças introduzidas por um commit específico.</p>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="situations">
                <AccordionTrigger>Situações Comuns</AccordionTrigger>
                <AccordionContent>
                    <ul className="list-inside space-y-2">
                        <li className="flex items-start">
                            <div className="flex-shrink-0">-</div>
                            <p className="ml-4 text-gray-700"><strong>Conflitos de merge:</strong> Quando há mudanças conflitantes entre branches, você precisará resolver os conflitos manualmente antes de concluir o merge.</p>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">-</div>
                            <p className="ml-4 text-gray-700"><strong>Revertendo alterações:</strong> Utilize <code>git checkout -- nome-do-arquivo</code> para descartar mudanças não commitadas em um arquivo.</p>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">-</div>
                            <p className="ml-4 text-gray-700"><strong>Trabalhando com branches:</strong> Crie novas branches com <code>git branch nome-da-branch</code> e troque entre elas com <code>git checkout nome-da-branch</code>.</p>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    )
}

export default IntroText
