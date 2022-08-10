/*
JavaScript (parte 1) - Ejercicio 1
Crear una función que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avión
*/


let metros;
let mensaje;

metros = prompt("Ingrese la cantidad de metros a desplazarse", "Ej: 100");
metros = parseInt(metros);

if(metros<=1000)
{
    mensaje = "El transporte apropiado es a pie.";
}
else
{
    if(metros>1000 && metros<=10000)
    {
        mensaje = "El transporte apropiado es la bicicleta.";
    }
    else
    {
        if(metros>10000 && metros<=30000)
        {
            mensaje = "El transporte apropiado es el colectivo.";
        }
        else
        {
            if(metros>30000 && metros<=100000)
            {
                mensaje = "El transporte apropiado es el auto.";
            }
            else
            {
                mensaje = "El transporte apropiado es el avión.";
            }
        }
    }
}
///
document.write(mensaje);