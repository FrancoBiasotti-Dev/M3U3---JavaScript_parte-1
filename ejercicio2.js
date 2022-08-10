/*
JavaScript (parte 1) - Ejercicio 2
Crear una función que reciba como parámetro un array de números y devuelva el mayor.
*/

var arrayNumeros = new Array(4);
let numeroMayor;

for(let i=0; i<4; i++)
{
    arrayNumeros[i] = parseInt(prompt("Ingrese un numero"));
}

for(let i=0; i<4; i++)
{
    if(i==0)
    {
        numeroMayor = arrayNumeros[i];
    }
    else
    {
        if(arrayNumeros[i]>numeroMayor)
        {
            numeroMayor = arrayNumeros[i];
        }
    }
}

document.write("El numero mayor es el "+numeroMayor);


