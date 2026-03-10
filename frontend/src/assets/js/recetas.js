document.addEventListener('DOMContentLoaded', () => {

  // ── Datos de prueba ────────────────────────────────────────
  const desayunos = [
    { nombre: 'Bowl de frutas',       imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '10 min', ingredientes: ['Fresas', 'Arándanos', 'Plátano', 'Granola', 'Yogur natural'] },
    { nombre: 'Tostadas de aguacate', imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '15 min', ingredientes: ['Pan integral', 'Aguacate', 'Limón', 'Sal', 'Chile en hojuelas'] },
    { nombre: 'Smoothie verde',       imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '5 min',  ingredientes: ['Espinaca', 'Plátano', 'Leche de almendra', 'Miel', 'Jengibre'] },
    { nombre: 'Avena con mango',      imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '10 min', ingredientes: ['Avena', 'Leche', 'Mango', 'Canela', 'Semillas de chía'] },
    { nombre: 'Huevos revueltos',     imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '12 min', ingredientes: ['Huevos', 'Espinaca', 'Tomate cherry', 'Aceite de oliva', 'Sal'] },
    { nombre: 'Panqueques de avena',  imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '20 min', ingredientes: ['Avena', 'Huevo', 'Plátano', 'Canela', 'Miel'] },
    { nombre: 'Yogur con frutos',     imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '5 min',  ingredientes: ['Yogur griego', 'Nueces', 'Arándanos', 'Miel', 'Granola'] },
    { nombre: 'Batido de proteína',   imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '5 min',  ingredientes: ['Leche', 'Plátano', 'Mantequilla de maní', 'Cacao', 'Avena'] },
    { nombre: 'Tazón de açaí',        imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '8 min',  ingredientes: ['Açaí', 'Plátano', 'Granola', 'Coco rallado', 'Fresas'] },
  ];

  const almuerzos = [
    { nombre: 'Ensalada César',       imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '20 min', ingredientes: ['Lechuga romana', 'Pollo a la plancha', 'Crutones', 'Parmesano', 'Aderezo césar'] },
    { nombre: 'Bowl de quinoa',       imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '25 min', ingredientes: ['Quinoa', 'Garbanzos', 'Pepino', 'Tomate', 'Limón'] },
    { nombre: 'Pollo a la plancha',   imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '30 min', ingredientes: ['Pechuga de pollo', 'Ajo', 'Limón', 'Romero', 'Aceite de oliva'] },
    { nombre: 'Wrap de atún',         imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '15 min', ingredientes: ['Tortilla integral', 'Atún', 'Lechuga', 'Tomate', 'Mostaza'] },
    { nombre: 'Arroz con vegetales',  imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '35 min', ingredientes: ['Arroz integral', 'Zanahoria', 'Brócoli', 'Soja', 'Ajo'] },
    { nombre: 'Pasta primavera',      imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '25 min', ingredientes: ['Pasta integral', 'Tomate cherry', 'Calabacín', 'Albahaca', 'Aceite de oliva'] },
    { nombre: 'Salmón al horno',      imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '30 min', ingredientes: ['Salmón', 'Limón', 'Eneldo', 'Ajo', 'Aceite de oliva'] },
    { nombre: 'Tacos de frijoles',    imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '20 min', ingredientes: ['Tortilla de maíz', 'Frijoles negros', 'Aguacate', 'Cilantro', 'Limón'] },
    { nombre: 'Lentejas guisadas',    imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '40 min', ingredientes: ['Lentejas', 'Zanahoria', 'Cebolla', 'Tomate', 'Comino'] },
  ];

  const cenas = [
    { nombre: 'Sopa de verduras',     imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '30 min', ingredientes: ['Zanahoria', 'Apio', 'Cebolla', 'Caldo de pollo', 'Perejil'] },
    { nombre: 'Wrap integral',        imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '15 min', ingredientes: ['Tortilla integral', 'Hummus', 'Espinaca', 'Pimiento', 'Pepino'] },
    { nombre: 'Crema de zanahoria',   imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '25 min', ingredientes: ['Zanahoria', 'Jengibre', 'Coco', 'Cebolla', 'Caldo vegetal'] },
    { nombre: 'Tortilla española',    imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '30 min', ingredientes: ['Huevo', 'Papa', 'Cebolla', 'Aceite de oliva', 'Sal'] },
    { nombre: 'Ensalada de espinaca', imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '10 min', ingredientes: ['Espinaca', 'Nueces', 'Queso feta', 'Pera', 'Vinagreta'] },
    { nombre: 'Pollo al vapor',       imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '25 min', ingredientes: ['Pechuga de pollo', 'Brócoli', 'Zanahoria', 'Ajo', 'Limón'] },
    { nombre: 'Gazpacho',             imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '15 min', ingredientes: ['Tomate', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de oliva'] },
    { nombre: 'Calabacín relleno',    imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '35 min', ingredientes: ['Calabacín', 'Quinoa', 'Tomate', 'Queso', 'Albahaca'] },
    { nombre: 'Caldo de pollo',       imagen: '/frontend/src/assets/img/platoComida.jpeg', tiempo: '45 min', ingredientes: ['Pollo', 'Zanahoria', 'Apio', 'Cebolla', 'Pimienta'] },
  ];

  // ── Función para crear cada card ──────────────────────────
  function crearItemCard(item, index) {
    const ingredientesHTML = item.ingredientes
      .map(i => `<li>${i}</li>`)
      .join('');

    return `
      <div class="item-card" id="card-${index}">
        <img
          src="${item.imagen}"
          alt="${item.nombre}"
          class="item-card-img"
          onerror="this.style.background='#f0ede8'; this.removeAttribute('src');"
        >
        <div class="item-card-body">
          <p class="item-card-name">${item.nombre}</p>
          <button class="btn-card-ver" onclick="toggleCard(this)">Ver más</button>
        </div>
        <div class="item-card-detalle">
          <div class="item-card-tiempo">⏱ ${item.tiempo}</div>
          <ul class="item-card-ingredientes">${ingredientesHTML}</ul>
        </div>
      </div>
    `;
  }

  // ── Renderizar franjas con límite inicial de 3 ────────────
  function renderFranja(datos, gridId, btnVerTodas) {
    const grid = document.getElementById(gridId);
    const iniciales = datos.slice(0, 3);
    const extras    = datos.slice(3);

    grid.innerHTML = iniciales.map((item, i) => crearItemCard(item, `${gridId}-${i}`)).join('');

    // Contenedor extras (oculto)
    const extrasDiv = document.createElement('div');
    extrasDiv.className = 'cards-grid cards-grid-extras';
    extrasDiv.id = `${gridId}-extras`;
    extrasDiv.innerHTML = extras.map((item, i) => crearItemCard(item, `${gridId}-extra-${i}`)).join('');
    grid.parentElement.appendChild(extrasDiv);

    // Evento botón "Ver todas"
    btnVerTodas.addEventListener('click', (e) => {
      e.preventDefault();
      const extrasEl = document.getElementById(`${gridId}-extras`);
      const abierto = extrasEl.classList.toggle('visible');
      btnVerTodas.textContent = abierto ? 'Ver menos ↑' : 'Ver todas →';
    });
  }

  renderFranja(desayunos, 'gridDesayunos', document.querySelector('#desayunos .btn-ver-todo'));
  renderFranja(almuerzos, 'gridAlmuerzos', document.querySelector('#almuerzos .btn-ver-todo'));
  renderFranja(cenas,     'gridCenas',     document.querySelector('#cenas .btn-ver-todo'));

  // ── Toggle acordeón de cada card ─────────────────────────
  window.toggleCard = function(btn) {
    const card = btn.closest('.item-card');
    const abierto = card.classList.toggle('expandida');
    btn.textContent = abierto ? 'Cerrar' : 'Ver más';
  };

});