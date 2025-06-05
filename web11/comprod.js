function mostrarCards(categoria) {
  const contenedor = document.getElementById("prodsm");
  contenedor.innerHTML = ''; // Limpia el contenedor
  const productos = {
    comics: [
      { texto: "Savage Spider-Man: Ragnatela di sangue - Bs. 30 [Prod. Nº 1]",
        imgprod: "imgprod/comic1.jpg"},
      { texto: "Spider-Man: La última cacería de Kraven - Bs. 25 [Prod. Nº 2]",
        imgprod: "imgprod/comic2.jpg" },
      { texto: "Spider-Man: Black Suit & Blood - Bs. 42 [Prod. Nº 3]",
        imgprod: "imgprod/comic3.jpg"},
      { texto: "Spider-Man 2099: Exodus - Bs. 20 [Prod. Nº 4]",
        imgprod: "imgprod/comic4.jpg" },
      { texto: "Spider-Man: Entre los muertos - Bs. 40 [Prod. Nº 5]",
        imgprod: "imgprod/comic5.jpg"},
      { texto: "Venom War: Spider-Man/Lethal Protectors - Bs. 23 [Prod. Nº 6]",
        imgprod: "imgprod/comic6.jpg" },
      { texto: "Spider-Gwen: Ghost-Spider - Bs. 27 [Prod. Nº 7]",
        imgprod: "imgprod/comic7.jpg"},
      { texto: "Spider-Man: Family Business - Bs. 35 [Prod. Nº 8]",
        imgprod: "imgprod/comic8.jpg" }
    ],
    juegos: [
      { texto: "Marvel's Spider-Man - Bs. 80 [Prod. Nº 1]",
        imgprod: "imgprod/juego1.jpg"},
      { texto: "Marvel's Spider-Man 2 - Bs. 95 [Prod. Nº 2]",
        imgprod: "imgprod/juego2.jpg" },
      { texto: "Marvel's Spider-Man Miles Morales - Bs. 80 [Prod. Nº 3]",
        imgprod: "imgprod/juego3.jpg"},
      { texto: "Marvel's Spider-Man Miles Morales - Bs. 210 [Prod. Nº 4]",
        imgprod: "imgprod/juego4.jpg" },
      { texto: "Spider-Man Shattered Dimension - Bs. 160 [Prod. Nº 5]",
        imgprod: "imgprod/juego5.jpg"},
      { texto: "The Amazing Spider-Man 2 - Bs. 80 [Prod. Nº 6]",
        imgprod: "imgprod/juego6.jpg" },
      { texto: "Marvel's Spider-Man Rem. - Bs. 363 [Prod. Nº 7]",
        imgprod: "imgprod/juego7.jpg"},
      { texto: "Marvel's Spider-Man (GOTY) - Bs. 75 [Prod. Nº 8]",
        imgprod: "imgprod/juego8.jpg" }
    ],
    ropa: [
      { texto: "Miles Morales Comic Tee - Bs. 210 [Prod. Nº 1]",
        imgprod: "imgprod/ropa1.jpg"},
      { texto: "Spider-Man Black Hoodie - Bs. 300 [Prod. Nº 2]",
        imgprod: "imgprod/ropa2.jpg" },
      { texto: "Spider-Man Web Swinging Tee - Bs. 240 [Prod. Nº 3]",
        imgprod: "imgprod/ropa3.jpg"},
      { texto: "Miles Morales Bomber Jacket - Bs. 500 [Prod. Nº 4]",
        imgprod: "imgprod/ropa4.jpg" },
      { texto: "The Spectacular Spider-Man Sweatshirt - Bs. 180 [Prod. Nº 5]",
        imgprod: "imgprod/ropa5.jpg"},
      { texto: "Venom Log Hat - Bs. 70 [Prod. Nº 6]",
        imgprod: "imgprod/ropa6.jpg" },
      { texto: "Spider-Man Sitting on a Wall Hoodie - Bs. 270 [Prod. Nº 7]",
        imgprod: "imgprod/ropa7.jpg"},
      { texto: "Spider-Man Web Slinging Tee - Bs. 280 [Prod. Nº 8]",
        imgprod: "imgprod/ropa8.jpg" }
    ],
    accesorios: [
      { texto: "Spider-Man 1962 Analog Watch - Bs. 300 [Prod. Nº 1]",
        imgprod: "imgprod/acc1.jpg"},
      { texto: "Spider-Man Mask Ramen Bowl - Bs. 140 [Prod. Nº 2]",
        imgprod: "imgprod/acc2.jpg" },
      { texto: "Spider-Man Adhesive Metal Emblem - Bs. 94 [Prod. Nº 3]",
        imgprod: "imgprod/acc3.jpg"},
      { texto: "Spider-Man Game Logo Pendant Necklace - Bs. 150 [Prod. Nº 4]",
        imgprod: "imgprod/acc4.jpg" },
      { texto: "Spider-Man City Street Figurine Light - Bs. 240 [Prod. Nº 5]",
        imgprod: "imgprod/acc5.jpg"},
      { texto: "Spider-Man Miles Morales Mug - Bs. 93 [Prod. Nº 6]",
        imgprod: "imgprod/acc6.jpg" },
      { texto: "Spider-Man Logo Double-Sided Dog Tag - Bs. 50 [Prod. Nº 7]",
        imgprod: "imgprod/acc7.jpg"},
      { texto: "Spider-Man and Venom BFF Keychain - Bs. 105 [Prod. Nº 8]",
        imgprod: "imgprod/acc8.jfif" }
    ]
  };

  // Genera las cards
  productos[categoria].forEach(item => {
    const card = `
        <div class="card" style="width: 18rem; margin: 10px;">
            <div class="card-body">
            <img src="${item.imgprod}" class="card-img-top" alt="...">
            <p class="card-text">${item.texto}</p>
            </div>
        </div>
    `;
    contenedor.innerHTML += card;
  });
}

function informar(){
    const form = document.forms.miFormulario;
    const categoria = form.elements.catpr.value;
    const producto = form.elements.numpr.value;
    const cantidad = form.elements.cantpr.value;

    //ALERTA
    const alertDiv = document.getElementById("customAlert");
    const alertTitle = document.getElementById("alertTitle");
    const alertMessage = document.getElementById("alertMessage");
    
    alertTitle.textContent = "¡Compra registrada! ";
    alertMessage.innerHTML = `
        <br>Categoría: <strong>${categoria}</strong>
        <br>Producto: <strong>#${producto}</strong>
        <br>Cantidad: <strong>${cantidad} unidades</strong>
    `;

    alertDiv.classList.remove("d-none");
    alertDiv.classList.add("alert-success", "show");
}