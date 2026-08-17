const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  const numero = '55SEUNUMERO';
  const texto = `Olá! Meu nome é ${nome}. ${empresa ? `Sou da empresa ${empresa}. ` : ''}${mensagem}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
  return false;
}
