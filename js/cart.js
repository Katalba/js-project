// OPEN & CLOSE (CART)
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

// CART

// SE MANTIENEN LOS PRODUCTOS EN EL CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// CREAMOS BOTON PARA AGREGAR PRODUCTOS
let btn_compra = document.querySelectorAll(".agregar-carrito");

for(let boton of btn_compra){

    boton.addEventListener("click" , carga_productos )
}

// SE ORGANIZAN LAS CAJAS PARA EXTRAER LA INFO AL CART
function carga_productos(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

// SE SELECCIONA EL ELEMENTO DE CADA CAJA DESEADO
    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector(".price").textContent;
    let img_producto = abuelo.querySelector("img").src;

    let product = {

        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    }

// PUSHEAMOS EL PRODUCTO AL CART
    cart.push(product);
    save_local();

    mostrar_carrito(product);
}

// SE ALMACENAN LOS DATOS EN LOCAL STORAGE
const save_local = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};


function mostrar_carrito( product ){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${product.img}"></td>
                      <td>${product.nombre}</td>
                      <td>${product.cantidad}</td>
                      <td>${product.precio}</td>
                      <td><button class="btn btn-outline-danger borrar_elemento"><i class="fa-solid fa-trash-can"></i></td>`;
         
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



