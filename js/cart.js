const btn_cart = document.getElementById("show_cart");

btn_cart.addEventListener("click", function () {

    let cart = document.getElementById("cart");

    if (cart.style.display == "none") {
        cart.style.display = "block";
    }
    else {
        cart.style.display = "none";
    }
})

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btn_compra = document.querySelectorAll(".agregar-carrito");

console.log(btn_compra);


for(let boton of btn_compra){

    boton.addEventListener("click" , carga_productos )
}


function carga_productos(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector(".price").textContent;
    let img_producto = abuelo.querySelector("img").src;

    let product = {

        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    }

    cart.push(product);
    save_local();

    mostrar_carrito(product);
}

const save_local = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};


function mostrar_carrito( product ){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${product.img}"></td>
                      <td>${product.nombre}</td>
                      <td>${product.cantidad}</td>
                      <td>${product.precio}</td>
                      <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;
    
    console.log( fila );      
    let tabla = document.getElementById("t-body");
    tabla.append( fila );



    let btn_borrar = document.querySelectorAll(".borrar_elemento");


    for( let boton of btn_borrar){

        boton.addEventListener("click" , borrar_producto);
    }

}



function borrar_producto(e){

    
    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();

}



