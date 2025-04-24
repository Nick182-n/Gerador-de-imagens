document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const feedback = document.getElementById('feedback-form');

    if (nome === "" || email === "" || mensagem === "") {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.style.color = 'red';
    } else {
      feedback.textContent = "Mensagem enviada com sucesso!";
      feedback.style.color = 'green';
    }
  });

  document.getElementById('form-gerador').addEventListener('submit', function(event) {
    event.preventDefault();

    const descricao = document.getElementById('descricao').value;
    const feedback = document.getElementById('feedback');
    const resultado = document.getElementById('resultado');

    feedback.textContent = 'Gerando imagem...';
    resultado.innerHTML = '';

    setTimeout(() => {
      const falhaSimulada = Math.random() > 0.5;

      if (falhaSimulada) {
        feedback.textContent = 'Houve um erro ao gerar a imagem. Tente novamente!';
        feedback.style.color = 'red';
        resultado.innerHTML = '';
      } else {
        const imagemSimulada = 'https://placekitten.com/600/400';
        feedback.textContent = 'Imagem gerada com sucesso!';
        feedback.style.color = 'green';
        resultado.innerHTML = `<img src="${imagemSimulada}" alt="Imagem gerada">`;

        const galeria = document.getElementById('galeria');
        const novaImagem = document.createElement('img');
        novaImagem.src = imagemSimulada;
        novaImagem.alt = 'Imagem gerada';
        novaImagem.classList.add('imagem-galeria');
        galeria.appendChild(novaImagem);
      }
    }, 2000);
  });

  document.getElementById('descricao').addEventListener('input', function() {
    const feedback = document.getElementById('feedback');
    const resultado = document.getElementById('resultado');

    feedback.textContent = '';
    resultado.innerHTML = '';
  });

  function animacaoExemplo() {
    const element = document.getElementById('animacao');

    setTimeout(() => {
      element.style.opacity = '0.5';
    }, 2000);

    setInterval(() => {
      element.style.opacity = element.style.opacity === '1' ? '0.5' : '1';
    }, 1000);
  }

  animacaoExemplo();
});
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul.menu li a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('ativo');
    }
  });
});
document.querySelector('.menu-btn').addEventListener('click', function() {
  const menu = document.querySelector('nav ul.menu');
  menu.classList.toggle('show'); 
});
document.getElementById("form-gerador").addEventListener("submit", function(event) {
  event.preventDefault();

  const descricao = document.getElementById("descricao").value;
  
  if (descricao.trim() === "") {
    alert("Por favor, digite uma descrição!");
    return;
  }

  document.getElementById("feedback").innerText = "Gerando imagem...";
  setTimeout(() => {
    document.getElementById("feedback").innerText = "Imagem gerada com sucesso!";
    document.getElementById("resultado").innerHTML = `<img src="link_da_imagem_gerada.jpg" alt="Imagem gerada">`;
  }, 2000);
});
document.addEventListener("keydown", function(event) {
  const modal = document.getElementById("myModal");
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
