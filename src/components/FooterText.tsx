import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import QrCodeImg from '../assets/qrcode.png';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';


const FooterText = () => {
  return (
    <div className='text-center my-10 px-3'>
      <p className="text-gray-700">Esse projeto te ajudou?</p>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default" className='my-3'>Faça um donate/contribua!</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Contribuição</SheetTitle>
            <SheetDescription>
              <p>Se este projeto te ajudou, você pode retribuir enviando qualquer quantia via Pix usando o QR Code abaixo. A sua contribuição é muito importante e ajuda a manter este projeto ativo.</p>
              <p className='mt-2'>Caso tenha alguma crítica construtiva ou queira contribuir com o projeto, basta enviar mensagem por e-mail ou mandar um alô no Whatsapp.</p>
            </SheetDescription>
          </SheetHeader>

          <div className='text-gray-700 mt-5'>
            <p className="mb-2">Minhas redes sociais:</p>
            <div className="flex flex-col items-start space-y-2">
              <a href="https://github.com/henriquepx" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaGithub size={20} />
                <span>@henriquepx</span>
              </a>
              <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaLinkedin size={20} />
                <span>henrique Pinheiro</span>
              </a>
              <a href="mailto:henriquepinheiroxavier@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaEnvelope size={20} />
                <span>henriquepinheiroxavier@gmail.com</span>
              </a>
              <a href="https://wa.me/5521964823939?text=Ol%C3%A1%2C%20Henrique." target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <IoLogoWhatsapp size={20} className="bg-gray-700 text-white p-1 rounded-full" />
            <span>Envie uma mensagem!</span>
        </a>
            </div>
          </div>

          <div className='mt-5'>
            <Image 
              src={QrCodeImg} 
              alt="QR Code Pix" 
              width={150} 
              height={150}
            />
          </div>
        </SheetContent>
      </Sheet>

      <p className="text-gray-700">Envie feedback ou contribua para este projeto no <a href="https://github.com/henrique-git/git-tutorial" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p className="text-gray-700">© 2024 Henrique. Todos os direitos reservados.</p>
    </div>
  );
}

export default FooterText;
