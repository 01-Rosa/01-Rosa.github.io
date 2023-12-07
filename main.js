let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:#0808bb;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0808bb;">Estoy en proceso de formacion (ingenieria informatica).</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
