const precioOriginal = 100
const descuento = 15

const porcentajeDescuento = 100 - descuento;
const precioConDescuento = (P * (precioOriginal * porcentajeDescuento));

console.log ({
    precioOriginal,
    descuento,
    porcentajeDescuento,
    precioConDescuento,
})