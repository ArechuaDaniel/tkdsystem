// export function formatearFecha(fecha) {
//     //const nuevaFecha = new Date(fecha?.split('T')[0].split('-'))
//     //.toISOString().slice(0, 10)

//     // const opciones = {
//     //     //weekday: 'long',
//     //     day: 'numeric',
//     //     month: 'numeric',
//     //     year: 'numeric',
//     // }

//     const year = fecha?.getFullYear();
//     const month = String(fecha?.getMonth() + 1).padStart(2, '0');
//     const day = String(fecha?.getDate()).padStart(2, '0');



//     return `${year}-${month}-${day}`;

// }



// export const formatearFecha = fecha => {
//     const nuevaFecha = new Date(fecha)?.toISOString().slice(0, 10)
//     //const nuevaFecha = new Date()
// //fecha.split('T')[0].split('-')


//     return nuevaFecha
// }



// export const formatearFecha = fecha => {
//     const nuevaFecha = new Date()
//     //fecha?.split('T')[0].split('-')
//     return nuevaFecha.toISOString(fecha)
// }

// export const formatearFecha = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date                                                                                                                                                                                                                                                                                                                                                                                                                                              |.getDate()).padStart(2, '0');
//     const nuevaFecha = `${year}-${month}-${day}`;
//     return nuevaFecha;
// }



// export const formatearFecha = fecha => {
//     const nuevaFecha = new Date()
//     //fecha?.split('T')[0].split('-')
//     return nuevaFecha.toISOString()
// }




export const formatearFecha = fecha => {
    // Creamos un objeto Date con la fecha actual
    var fecha = new Date(fecha);

    // Obtenemos el año, mes y día de la fecha actual
    var año = fecha.getFullYear();

    // El mes es devuelto en base 0 (enero es 0, febrero es 1, etc.), así que sumamos 1 para obtener el mes actual.
    var mes = fecha.getMonth() + 1;
    // Si el mes es menor a 10, añadimos un '0' al principio para mantener el formato de dos dígitos.
    mes = mes < 10 ? '0' + mes : mes;

    var dia = fecha.getDate();
    // Si el día es menor a 10, añadimos un '0' al principio para mantener el formato de dos dígitos.
    dia = dia < 10 ? '0' + dia : dia;

    // Concatenamos los componentes de la fecha en el formato deseado
    var fechaFormateada = año + '-' + mes + '-' + dia;
    return fechaFormateada
}
