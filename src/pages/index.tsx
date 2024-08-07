import { Inter } from "next/font/google";
import GitCommands from "@/components/Commands/GitCommands";
import IntroText from "@/components/IntroText";
import FooterText from "@/components/FooterText";
import QuestionsCommands from "@/components/Commands/QuestionsCommands";
import SituationsCommands from "@/components/Commands/SituationsCommands";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <IntroText />
      <GitCommands />
      <QuestionsCommands />
      <SituationsCommands />
      <FooterText />
    </main>
  );
}
