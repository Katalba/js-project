const products = [
    { name: "Jean Azul", price: 14000 },
    { name: "Jean Rojo", price: 14500 },
    { name: "Jean Blanco", price: 14000 },
    { name: "Jean Amarillo", price: 17000 }
];

let shopping_car = []

let selection = prompt("Bienvenidos a Valkiria: ¿Desea ver nuestros productos? Escriba Sí o No");

while (selection != "si" && selection != "no") {
    alert("Por favor, escriba Sí o No")
    selection = prompt("Bienvenidos a Valkiria: ¿Desea ver nuestros productos? Escriba Sí o No");
}

if (selection == "si") {
    let acu_products = products.map(
        (product) => product.name + "  " + "$" + product.price
    );
    alert(acu_products.join(" - "))
} else if (selection == "no") {
    alert("Una lástima que abandones el sitio, hay cosas muy lindas para vos. Hasta pronto :(")
}

while (selection != "no") {
    let product = prompt("Escriba el nombre del producto que desea comprar")
    let price = 0

    if (product == "jean azul" || product == "jean rojo" || product == "jean blanco" || product == "jean amarillo") {
        switch (product) {
            case "jean azul":
                price = 14000;
                break
            case "jean rojo":
                price = 14500;
                break
            case "jean blanco":
                price = 14000;
                break
            case "jean amarillo":
                price = 17000;
                break
            default:
                break;
        }
        let quentify = parseInt(prompt("Indique la cantidad que sea comprar"))

        shopping_car.push({ product, quentify, price })
    } else {
        alert("Lo siento, el producto que elegiste no está disponible en nuestra tienda")
    }

    selection = prompt("¿Desea agregar más productos al carrito? Escriba Sí o No")

    while (selection == "no") {
        alert("A continuación, el detalle de tu compra: ")
        shopping_car.forEach((final_car) => {
            alert(`producto: ${final_car.product}, cantidad: ${final_car.quentify}, total por producto: ${final_car.quentify * final_car.price} `)
        })
        break;
    }
}

const total = shopping_car.reduce((acc, el) => acc + el.price * el.quentify, 0)

alert(`El total de su compra es: ${total}`)
alert("Gracias por tu compra <3")

