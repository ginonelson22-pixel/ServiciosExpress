'use strict';
// Cotización local de ejemplo: precio del plan por número de visitas.
const formularioHogar = document.getElementById('formulario-hogar');
if (formularioHogar) {
    formularioHogar.addEventListener('submit', function (evento) {
        evento.preventDefault();
        const plan = document.getElementById('plan-hogar');
        const visitas = document.getElementById('visitas-hogar');
        const resultado = document.getElementById('resultado-hogar');
        if (!formularioHogar.reportValidity()) return;
        const precio = Number(plan.value);
        const cantidad = Number(visitas.value);
        if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 12) {
            resultado.textContent = 'Indica entre 1 y 12 visitas completas.';
            return;
        }
        const total = precio * cantidad;
        resultado.textContent = 'Total de ejemplo: Bs ' + total.toFixed(2) +
            ' por ' + cantidad + (cantidad === 1 ? ' visita.' : ' visitas.') +
            ' No se ha realizado ninguna reserva.';
    });
}
