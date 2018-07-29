//Los requiered se colocan al principio
//Existen 3 tipos de required
//const fs = require('fs'); //Esta que es de un proyecto porpio de node y 
//solo se coloca y no hay que hacer nada mas
//const fs = require('express'); //Esta NO es una libreria propia de node
//y debe instalarse para poder utilizarse 
//const fs = require('./fs'); //Proyectos creados por nosotros mismos
//que se llaman segun la ubicacion donde este
//Pasos para llamar a la funcion del archivo multiplicar
/*
let base = 'abc';
const { crearArchivo } = require('./multiplicar/multiplicar'); //Despues de const o let y entre llaves
//es una destructuracion
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err));
*/
//let base = 5;
//console.log(process.argv);

/*
let argv = process.argv;
let parametro = argv[2]; //el parametro que se va a recibir sera igual a la tercera
///////////////////////////posicion del proceso.argv
let base = parametro.split('=')[1]; //split es para separar el arregloc
//y el 1 indica que posicion imprimir
//console.log(parametro);
//console.log(base); //Se muestra un arreglo con los 2 parametros
const { crearArchivo } = require('./multiplicar/multiplicar');
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err));
*/

/*
//Pasos para mostrar las funciones contenidas en el archivo multiplicar
const multiplicar = require('./multiplicar/multiplicar');
//console.log(module); //Para ver las propiedades del modulo
console.log(multiplicar);
*/
/*Se lleva la logica a un archivo separado llamado multiplicar
let data = ''; //Para guardar el resultado de la operacion
//se crea un string vacio

for (let i = 1; i <= 10; i++) {
    // console.log(`${base} + ${i} = ${base*i}`);
    data += `${base} + ${i} = ${base*i}\n`; //Se agrega el salto de linea \n
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //Se cambia el string por la variable, 
    //y se pone el nombre dinamicamente, y se coloca el path tabla/ para una ubicacion especifica

    if (err) throw err;
    console.log('El archivo a sido creado');
});*/
/*
//Seccion 4, clase 33 : Yargs
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .help()
    .argv;

let argv2 = process.argv;

console.log('Base: ', argv.base, 'Limite: ', argv.limite);
//console.log(argv2); //Es el de process
*/

//Seccion 4, clase 34 : Ejecutar el comando: listar
/*
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            //   demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .command('crear', 'Crea un archivo', {
        base: {
            //   demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .help()
    .argv;

let comando = argv._[0] //para ubicarse en la primera posicion

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}
*/
//console.log('Base: ', argv.base, 'Limite: ', argv.limite);

//Seccion 4, clase 35 : Optimizaciones para la configuración del Yargs
const argv = require('./config/yargs').argv; //el .argv es para utilizar unicamente 
const colors = require('colors');
//el objeto que necesito, si no se utilizaria argv.argv

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0] //para ubicarse en la primera posicion

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}