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
let cart;

const carroLS = JSON.parse(localStorage.getItem('#t-body'));

if (carroLS){
    cart = carroLS;
} else{
    cart = [];
}


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

const carro = JSON.parse(localStorage.getItem('#t-body'));

// SE MUESTRA EL PRODUCTO EN EL CART
function mostrar_carrito( product ){

    let productBox = document.createElement("tr");
    productBox.innerHTML = `<td><img src="${product.img}"></td>
                      <td>${product.nombre}</td>
                      <td>${product.cantidad}</td>
                      <td>${product.precio}</td>
                      <td><button class="btn btn-outline-danger borrar_producto"><i class=" fa-solid fa-trash-can"></i></td>`;
     
    // SE CREA VARIABLE PARA SHOW-PRODDUCT MEDIANTE APPEND
    let content = document.getElementById("t-body");
    content.append( productBox );


// BORRAR PRODUCTO DEL CART
    let btn_borrar = document.querySelectorAll(".borrar_producto");


    for( let boton of btn_borrar){

        boton.addEventListener("click" , borrar_producto);
    }

}



function borrar_producto(e){

    
    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();

}

// Fetch API

const aplication = document.getElementById('bitcoin-card');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
	.then(response => response.json())
	.then(response => console.log(response))
    .then(data => {
        data.forEach(USD => {
            let p = document.createElement('p')
            p.innerHTML = USD.code
            aplication.appendChild(p)
        });
    })
	.catch(err => console.log(err));


