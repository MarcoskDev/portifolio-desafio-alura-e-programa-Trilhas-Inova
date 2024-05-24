function mostraTexto() {
   let html = document.getElementById("html");
   let css = document.getElementById("css");
   let js = document.getElementById("js");
   let typeScript = document.getElementById("TypeScript");
   let react = document.getElementById("react");
   let vuejs = document.getElementById("vuejs");
   let figma = document.getElementById("figma");
   let github = document.getElementById("github");
   let git = document.getElementById("git");
   let textoAserMostrado = document.getElementById("desc__tecnologias");

   html.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Sou proficiente em HTML e utilizo essa linguagem para criar estruturassemânticas e bem organizadas para páginas web. Meu conhecimento inclui o uso de elementos básicos, como tags de texto, imagens, links e tabelas, bem como conceitos avançados, como formulários e elementos de áudio/vídeo.";
   });
   html.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* css */
   css.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Possuo amplo conhecimento em CSS e utilizo-o para estilizar páginas web, garantindo uma apresentação visualmente atraente e responsiva. Tenho experiência em trabalhar com diferentes técnicas de layout, como Flexbox e Grid, e em criar animações e transições para melhorar a experiência do usuário.";
   });
   css.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* js */
   js.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Tenho habilidades avançadas em JavaScript, utilizando-o para criar interatividade e dinamismo em páginas web. Meu conhecimento inclui o uso de eventos, manipulação do DOM, AJAX e programação orientada a objetos, entre outros conceitos avançados da linguagem.";
   });
   js.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* typeScript */
   typeScript.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Possuo conhecimento em TypeScript, uma linguagem que traz mais robustez e facilidade na manutenção de código JavaScript. Utilizo TypeScript para criar aplicações web mais seguras e escaláveis, aproveitando seus recursos de tipagem estática e interfaces.";
   });
   typeScript.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* js */
   typeScript.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Possuo conhecimento em TypeScript, uma linguagem que traz mais robustez e facilidade na manutenção de código JavaScript. Utilizo TypeScript para criar aplicações web mais seguras e escaláveis, aproveitando seus recursos de tipagem estática e interfaces.";
   });
   typeScript.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* react */
   react.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Trabalho com React, uma biblioteca JavaScript popular para criação de interfaces de usuário reativas e eficientes. Tenho experiência em desenvolver componentes reutilizáveis, gerenciar o estado da aplicação com Redux e integrar o React com APIs RESTful.";
   });
   react.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* vuejs */
   vuejs.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Utilizo o Vue.js para criar interfaces web dinâmicas e responsivas. Tenho experiência em utilizar recursos como diretivas, componentes e o sistema de reatividade do Vue.js para criar aplicações web interativas e de alto desempenho.";
   });
   vuejs.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* figma */
   figma.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Utilizo o Figma para design de interfaces, criando protótipos e designs de alta qualidade de forma colaborativa. Tenho experiência em criar wireframes, mockups e designs finais, garantindo uma experiência de usuário intuitiva e agradável.";
   });
   figma.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* github */
   github.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Tenho experiência com o GitHub, utilizando-o para hospedar projetos e colaborar com outros desenvolvedores em projetos de software. Utilizo recursos como branches, pull requests e issues para gerenciar o desenvolvimento de projetos de forma eficiente.";
   });
   github.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });

   /* git */
   git.addEventListener("mouseover", () => {
      textoAserMostrado.innerText =
         "Utilizo o Git para controle de versão de código, permitindo o trabalho colaborativo e o rastreamento de alterações no código-fonte. Tenho experiência em utilizar comandos básicos do Git, como commit, push, pull e merge, para manter o histórico de alterações do projeto de forma organizada.";
   });
   git.addEventListener("mouseout", () => {
      textoAserMostrado.innerText =
         "Para visualizar, passe o mouse sobre as tecnologias do lado direito";
   });
}
mostraTexto();
