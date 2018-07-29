//Todo esto se debe transformar en una funcion que devuelva una promesa
const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} + ${i} = ${base*i}`.yellow);
    }
}

let crearArchivo = (base, limite = 10) => { //Se crea la funcion que se va a llamar

    return new Promise((resolve, reject) => { //Se crea la promesa que ejecutara la logica

        if (!Number(base)) { //Se valida si es un numero
            reject(`La base introducida "${base}" no es un numero `);
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} + ${i} = ${base*i}\n`; //Se agrega el salto de linea \n
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.gray);
        });
    });
}

module.exports = {
    crearArchivo, //Y si hay muchas funciones se separan por comas
    listarTabla
}