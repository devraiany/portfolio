// animação de rotação aos ícones de redes sociais
  const socialIcons = document.querySelectorAll('.redes-sociais img');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'rotate(20deg)';
      icon.style.transition = 'transform 0.4s ease-in-out';
    });
  
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'rotate(0deg)';
    });
  });
  

// animação de rotação aos ícones de skills
const skillIcons = document.querySelectorAll('.skills img');
skillIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'rotate(30deg)';
    icon.style.transition = 'transform 0.5s ease-in-out';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'rotate(0deg)';
  });
});

