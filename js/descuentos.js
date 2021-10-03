/*function calcularPrecioConDescuento (precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDescuento) /100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; 

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById ("resultPrice");
    
    resultPrice.innerText = "El precio con descuento del producto es " + precioConDescuento;
} */



//creamos un Array de descuento donde agregamos los diferentes cupones como Objetos donde esta su nombre y valor.
// La idea es que el usuario ingrese el nombre del cupon y el programa sepa a cuanto esquivale ese descuento.
const coupon = [
    {nombre: "c10", descuento: 10},
    {nombre: "c20", descuento: 20},
    {nombre: "c50", descuento: 50},
    {nombre: "e100", descuento: 100},
];

// ahora viene lo bueno hacer que el programa verifique si existe el cupon y aplique el descuento respectivo del cupon.
function couponDiscount (cupon) {
    //llamamos nuestro Array y con .some() noshace una validacion de True y False si nuestro cupon escrito por el usuario esta en nuestro array.
    const validadCoupon = coupon.some(function(coupon){
        return coupon.nombre === cupon;
    }); 
    // una vez sabiendo si existe el cupon con .find nos encuentra el cupon y nos crea un nuevo array donde solo esta el cupon que ingreso el usuario algo asi nos arroja ej. {nombre: "c10", descuento: 10}
    if (validadCoupon) {
        const buscarCoupon = coupon.find(function(coupon){
        return coupon.nombre === cupon;
        });
    //con Object(nombreDelArray.NombreDelElemento) nos trae en valor de dicho elemento siguiendo con el ej anterior nos retonaria 10 que seria el descuento que hace el cupon.
        const descuentoCoupon = Object(buscarCoupon.descuento);
        return descuentoCoupon;
    } else {
    //si el cupon no aparece en nuestro array el descuento que haria es de 0
        return 0;
    }
}

function calcularPrecioConDescuento (precio, descuento, cupon) {
    let descuentoTotal = descuento + cupon;
    
    //este if es necesario para que no nos de un numero negativo y el max descuento sea del 100%
    if (descuentoTotal>100){
        descuentoTotal = 100;
    }

    const porcentajePrecioConDescuento = 100 - descuentoTotal;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const price = parseInt ( inputPrice.value );
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = parseInt (inputDiscount.value);
    const inputCoupon = document.getElementById("inputCoupon");
    const cupon = inputCoupon.value;

    //Validamos si el cupon existe y le damos su valor correspondiente.
    const cuponDescuento = couponDiscount (cupon)

    const priceWithDiscount = calcularPrecioConDescuento (price, discount, cuponDescuento);
    
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es: $" + priceWithDiscount
}