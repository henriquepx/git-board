import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from "./Commands/QuestionsCommands";
import { commonSituationsItems } from "./Commands/SituationsCommands";

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
                <ul className="list-disc list-inside space-y-2">
                  {faqItems.map((item, index) => (
                    <li key={index}>
                      <a href={`#${item.id}`} className="text-black-500 hover:text-black-900 hover:underline">{item.question}</a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="situations">
                <AccordionTrigger>Situações Comuns</AccordionTrigger>
                <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  {commonSituationsItems.map((item, index) => (
                    <li key={index}>
                      <a href={`#${item.id}`} className="text-black-500 hover:text-black-900 hover:underline">{item.situation}</a>
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
