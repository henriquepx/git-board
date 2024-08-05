import { Inter } from "next/font/google";
import GitCommands from "@/components/GitCommands";
import IntroText from "@/components/IntroText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <IntroText />
      <GitCommands />
    </main>
  );
}
