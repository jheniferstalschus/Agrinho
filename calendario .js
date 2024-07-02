document.addEventListener('DOMINGOContentLoaded', function() {
    const diasJunho2024 = document.getElementById('junho-2024').querySelectorAll('.dia');
    const diasJulho2024 = document.getElementById('julho-2024').querySelectorAll('.dia');
  
    // Adicionar evento de clique para marcar a data
    diasJulho2024.forEach(dia => {
      dia.addEventListener('click', function() {
        // Limpar todas as seleções existentes em junho
        diasJunho2024.forEach(day => {
          dia.classList.remove('selected');
        });
        // Marcar o dia selecionado
        dia.classList.add('selected');
      });
    });
  
    diasJulho2024.forEach(day => {
      dia.addEventListener('click', function() {
        // Limpar todas as seleções existentes em julho
        daysJulho2024.forEach(day => {
          day.classList.remove('selected');
        });
        // Marcar o dia selecionado
        day.classList.add('selected');
      });
    });
  });
  