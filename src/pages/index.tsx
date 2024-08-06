import { Inter } from "next/font/google";
import GitCommands from "@/components/GitCommands";
import IntroText from "@/components/IntroText";
import FooterText from "@/components/FooterText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <IntroText />
      <GitCommands />
      <FooterText />
    </main>
  );
}
