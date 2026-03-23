document.addEventListener('DOMContentLoaded', () => {

  // ── Función para crear cada card ──────────────────────────
  function crearItemCard(item, href) {
    return `
      <div class="item-card">
        <img
          src="${item.imagen}"
          alt="${item.nombre}"
          class="item-card-img"
          onerror="this.style.background='#f0ede8'; this.removeAttribute('src');"
        >
        <div class="item-card-body">
          <p class="item-card-name">${item.nombre}</p>
          <a href="${href}" class="btn-card-ver">Ver más</a>
        </div>
      </div>
    `;
  }

  // ── DATOS DE PRUEBA ────────────────────────────────────────
  // fetch('http://localhost:3000/api/dietas')
  //   .then(res => res.json())
  //   .then(data => {
  //     document.getElementById('gridDietas').innerHTML = data.map(d => crearItemCard(d, '/frontend/src/app/pages/diet.html')).join('');
  //   });
  //
  // fetch('http://localhost:3000/api/recetas')
  //   .then(res => res.json())
  //   .then(data => {
  //     document.getElementById('gridRecetas').innerHTML = data.map(r => crearItemCard(r, '/frontend/src/app/pages/recipes.html')).join('');
  //   });
  // ──────────────────────────────────────────────────────────

  const dietas = [
    { nombre: 'Dieta Mediterránea', imagen: './assets/img/platoComida.jpeg' },
    { nombre: 'Dieta Keto',         imagen: './assets/img/platoComida.jpeg' },
    { nombre: 'Dieta Vegana',       imagen: './assets/img/platoComida.jpeg' },
  ];

  const recetas = [
    { nombre: 'Ensalada César',  imagen: './assets/img/platoComida.jpeg' },
    { nombre: 'Bowl de Quinoa', imagen: './assets/img/platoComida.jpeg' },
    { nombre: 'Smoothie Verde', imagen: './assets/img/platoComida.jpeg' },
  ];

  document.getElementById('gridDietas').innerHTML =
    dietas.map(d => crearItemCard(d, '../../app/components/diet.html')).join('');

  document.getElementById('gridRecetas').innerHTML =
    recetas.map(r => crearItemCard(r, '../../app/components/recipes.html')).join('');

});