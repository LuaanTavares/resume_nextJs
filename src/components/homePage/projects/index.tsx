import React from "react";
import Image from "next/image";
import resume from "../../../../public/images/resume.png";
import netflix from "../../../../public/images/netflix.png";
import crude from "../../../../public/images/crude.png";

export const Projects = () =>{
  return(
    <div className="md:my-32 text-center max-md:my-16 px-6" id="projects">
      <h1 className="mb-10 text-2xl text-slate-200 text-center">Projects</h1>
      <section className="flex justify-around md:flex-row md:gap-4 text-white max-md:flex-col gap-10" >
        <div className="md:w-1/3">
          <Image className="rounded-xl mb-4" src={resume} alt="resume" />
          <p>Aqui temos o meu resume, o mesmo que você está navegando neste momento, onde contém minhas informações pessoais, 
            como contatos, experiências, cursos e outras coisas. Para este projeto, utilizei ReactJS, Nextjs e TailwindCSS. Fique à vontade para visitar meu repositório no GitHub ou ver o
            o deploy do projeto no Vercel.
            <a target="_blank" className="text-cyan-800 font-bold" href="https://resume-next-js-six.vercel.app/"> Clique aqui para visualizar no Vercel</a> ou <a target="_blank" className="text-cyan-800 font-bold" href="https://github.com/LuaanTavares/resume_nextJs"> Clique aqui para visualizar no GitHub</a></p>
        </div>
        <div className="md:w-1/3">
          <Image className="rounded-xl mb-4" src={netflix} alt="netflix" />
          <p>Este é um clone da tela NetFlix, onde consumo a API do TMDB (The Movie Database) utilizando ReactJS. Fique à vontade para visitar meu repositório no GitHub ou ver o
            o deploy do projeto no Vercel.
            <a target="_blank" className="text-cyan-800 font-bold" href="https://netflix-clone-one-ebon.vercel.app/"> Clique aqui para visualizar no Vercel</a> ou <a target="_blank" className="text-cyan-800 font-bold" href="https://github.com/LuaanTavares/netflix_clone"> Clique aqui para visualizar no GitHub</a></p>
        </div>
        <div className="md:w-1/3">
          <Image className="rounded-xl mb-4" src={crude} alt="outro" />
          <p>Neste projeto eu fiz um CRUD muito simples, usando ReactJS, NodeJS, NestJS e MongoDB. É possível adicionar, editar, procurar e deletar 
            usuários através do ID. Fique à vontade para visitar meu repositório no GitHub.
          <a target="_blank" className="text-cyan-800 font-bold" href="https://github.com/LuaanTavares/crudeNestJS"> Clique aqui para visualizar no GitHub</a></p>
        </div>
      </section>
    </div>
  )
}