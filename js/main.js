alert("!Hola ¿Cuál es tu nombre?");
let nombre = prompt("Ingresa tu nombre:");

while (nombre === null || nombre === "") {
  alert("Debes ingresar un nombre.");
  nombre = prompt("Ingresa tu nombre:");
}

alert("¡Bienvenid@, " + nombre + "!");

const obtenerProductosVerduras = () => {
  return [
    { nombre: "Zanahoria", precio: 60 },
    { nombre: "Lechuga", precio: 250 },
    { nombre: "Tomate", precio: 200 },
    { nombre: "Papa", precio: 40 },
    { nombre: "Cebolla", precio: 100 },
    { nombre: "Espinaca", precio: 300 },
    { nombre: "Apio", precio: 150 },
    { nombre: "Pimiento", precio: 250 },
    { nombre: "Calabacín", precio: 350 },
    { nombre: "Brócoli", precio: 150 },
  ];
};

const obtenerProductosFrutas = () => {
  return [
    { nombre: "Manzana", precio: 150 },
    { nombre: "Banana", precio: 100 },
    { nombre: "Naranja", precio: 100 },
    { nombre: "Pera", precio: 100 },
    { nombre: "Kiwi", precio: 100 },
    { nombre: "Uva", precio: 400 },
    { nombre: "Sandia", precio: 800 },
    { nombre: "Melon", precio: 1000 },
    { nombre: "Durasno", precio: 150 },
    { nombre: "Piña", precio: 1000 },
  ];
};

let seleccionCorrecta = false;
let totalPrecio = 0;

while (!seleccionCorrecta) {
  const opcion = prompt("¡Qué deseas comprar?(Verduras o Frutas)");
  if (opcion === null) {
    alert(
      "¡Gracias por tu visita! ¡Que tengas un hermoso dia o una hermosa noche :D !"
    );
    break;
  }
  const opcionLowerCase = opcion.toLowerCase();

  if (opcionLowerCase === "verduras" || opcionLowerCase === "frutas") {
    seleccionCorrecta = true;
    const productos =
      opcionLowerCase === "verduras"
        ? obtenerProductosVerduras()
        : obtenerProductosFrutas();
    let productosTexto = "";
    for (let i = 0; i < productos.length; i++) {
      const productoNombre = productos[i].nombre;
      const productoPrecio = productos[i].precio;

      productosTexto += `${productoNombre} ($${productoPrecio})\n`;
    }
    const productosComprados = prompt(
      `Los productos disponibles son:\n${productosTexto}\nIngrese el nombre del producto que desea comprar (separados por comas si son varios):`
    );
    if (productosComprados === null || productosComprados === "") {
      alert("No has comprado ningún producto");
    } else {
      const productosSeleccionados = productosComprados.split(",");
      let productosTextoFinal = "";
      let cantidadTotal = 0;
      for (let i = 0; i < productosSeleccionados.length; i++) {
        const productoSeleccionado = productosSeleccionados[i].trim();
        const cantidad = prompt(
          `¿Cuánta cantidad de ${productoSeleccionado} deseas llevar?`
        );
        const cantidadNum = parseFloat(cantidad);
        if (!isNaN(cantidadNum) && cantidadNum > 0) {
          cantidadTotal += cantidadNum;
          const productoEncontrado = productos.find(
            (p) => p.nombre.toLowerCase() === productoSeleccionado.toLowerCase()
          );
          if (productoEncontrado) {
            const precioTotal = cantidadNum * productoEncontrado.precio;
            productosTextoFinal += `${productoSeleccionado} (cantidad: ${cantidadNum}, Precio Total: $${precioTotal.toFixed(
              2
            )})\n`;
            totalPrecio += precioTotal;
          } else {
            alert(
              `El producto ${productoSeleccionado} no está disponible. No se ha incluido en la compra.`
            );
          }
        } else {
          alert(
            `Cantidad inválida para ${productoSeleccionado}. No se ha incluido en la compra.`
          );
        }
      }
      if (productosTextoFinal === "") {
        alert("No has comprado ningún producto.");
      } else {
        alert(`Has comprado los siguientes productos:\n${productosTextoFinal}`);
        let metodoPago = prompt("¿Cómo queres pagar?(Efectivo o Tarjeta)");

        while (true) {
          if (metodoPago === null) {
            alert(
              `Se canceló el pedido. ¡Gracias por visitarnos, ${nombre}! Espero volver a verte :D.`
            );
            break;
          } else if (metodoPago.toLowerCase() === "efectivo") {
            const descuento = totalPrecio * 0.2;
            const totalConDescuento = totalPrecio - descuento;
            alert(`Descuento aplicado: $${descuento.toFixed(2)}`);
            alert(
              `Precio total con descuento: $${totalConDescuento.toFixed(2)}`
            );
            break;
          } else if (metodoPago.toLowerCase() === "tarjeta") {
            alert(`Precio total: $${totalPrecio.toFixed(2)}`);
            break;
          } else {
            alert("No seleccionaste un método de pago válido.");
            metodoPago = prompt("¿Cómo queres pagar? (Efectivo o Tarjeta)");
          }
        }

        if (metodoPago !== null) {
          alert(`Gracias por tu compra, ${nombre}! ¡Espero volver a verte! :)`);
        }
      }
    }

    break;
  } else {
    alert("Error. Debes elegir entre 'Verduras' o 'Frutas'.");
  }
}
