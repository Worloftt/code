document.addEventListener("DOMContentLoaded", function () {
  // Ajoutez la classe expand au divider après un délai de 1 seconde
  setTimeout(function () {
    document.querySelector('.divider').classList.add('expand');
  }, 0);
});

document.addEventListener("DOMContentLoaded", function () {
  // Ajoutez la classe expand aux flèches après un délai de 1 seconde
  setTimeout(function () {
    document.querySelector('.diamond_arrow').classList.add('expand');
    document.querySelector('.diamond_arrow2').classList.add('expand');
  }, 900);
});


