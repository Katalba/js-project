alert("Ingrese el nro del producto que desea comprar, para salir ingrese 0");
let productos = parseInt(prompt("1- Jean Azul $14000 2- Jean Rojo $14500 3- Jean Blanco $14000 4- Jean Amarillo $17000"));
let cantidad;
let total = 0;

while(productos != 0) {
    switch (productos) {
        case 1:
            cantidad = parseInt(prompt("El producto seleccionado es Jean Azul, indique cuántos desea comprar"))
            total += seleCantidad(cantidad, 14000)
        break;

        case 2:
            cantidad = parseInt(prompt("El producto seleccionado es Jean Rojo, indique cuántos desea comprar"))
            total += seleCantidad(cantidad, 14500)
        break;

        case 3:
            cantidad = parseInt(prompt("El producto seleccionado es Jean Blanco, indique cuántos desea comprar"))
            total += seleCantidad(cantidad, 14000)
        break;

        case 4:
            cantidad = parseInt(prompt("El producto seleccionado es Jean Amarillo, indique cuántos desea comprar"))
            total += seleCantidad(cantidad, 17000)
        break;

        default:
        break;
    }
    let agregar = prompt("¿Desea agregar más productos? Escriba si o no.");
    if (agregar == "si"){
        productos = parseInt(prompt("1- Jean Azul $14000 2- Jean Rojo $14500 3- Jean Blanco $14000 4- Jean Amarillo $17000"));
    }
     else{
        no = prompt("El total de su compra es: ", total)
    }
}

function seleCantidad(cantidad, precio){
    return cantidad * precio
}