/*en el ingreso pedir nombre, edad (mayores a 18) sexo (f o m)  y estado civil (soltero casado viudo)
a) el nombre del hombre casado mas joven
b) el sexo y el nombre del pasajero mas viejo
c) la cantidad de mujeres que hay casadas o viudas
d) el promedio de edad entre las mujeres
e) promedio de edad entre los hombres solteros*/


function mostrar()
{
	 var nombre;
     var edad;
     var sexo;
     var estadoCivil;
     var respuesta;
     var contador;
     var acumulador;
     var edadMinimaNombre;
     var promedio;
     var edadMinima;
     var edadMaxima;
     var sexoEdadMaxima;
     var nombreEdadMaxima;
     var cantidadMujeresViudasYCasadas;
     var acumuladorEdadMujeres;
     var promedioEdadMujeres;

     respuesta="s";
     contador=0;
     acumulador=0;
     edadMinima=0;
     edadMaxima=0;
     cantidadMujeresViudasYCasadas=0;
     acumuladorEdadMujeres=0;
     

     while (respuesta =="s")
     {
        do
        {
            nombre=prompt("ingrese nombre");
        } while (!isNaN(nombre));

        do
        {
            edad=prompt("ingrese edad (solo mayores de 18)");
            edad=parseInt(edad);
        } while (isNaN(edad) || edad <17 || edad >120 );

        do
        {
            sexo=prompt("ingrese 'm' para masculino o 'f' para femenino");
        } while (!isNaN(sexo) || sexo !="m" && sexo!="f");

        do
        {
            estadoCivil=prompt("ingrese estado civil 'soltero' o 'casado' o 'viudo'");
        } while (!isNaN (estadoCivil) || estadoCivil != "soltero" && estadoCivil!= "casado" && estadoCivil!= "viudo");

          // fin de validacion //

        switch (estadoCivil)
        {
            case "casado": 
            if ( sexo =="m" && edadMinima>edad || edadMinima ==0 )
            {
                  edadMinima=edad;
                  edadMinimaNombre=nombre;
            }

            break;

            case "soltero":
            if (sexo =="m")
            {
                acumulador=acumulador+edad;
            }
               break;

              
        }
        
        if ( edadMaxima<edad || edadMaxima==0)
        {
              edadMaxima=edad;
              sexoEdadMaxima=sexo;
              nombreEdadMaxima=nombre;

        }

        switch (sexo)
        {
            case "f": acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
                     break;
            
        }         
        
        if ( sexo=="f" && estadoCivil != "soltero")
            {
                cantidadMujeresViudasYCasadas++;
            }



        contador++
        respuesta=prompt("ingrese s para continuar ingresando datos");
     }
        
        promedioEdadMujeres=acumuladorEdadMujeres/contador;

        promedio=acumulador/contador;
    
    document.write("el nombre del hombre casado mas joven es " +edadMinimaNombre+ '<br>');
    document.write("el promedio de edad de hombres solteros es "+promedio+ "<br>");
    document.write("el nombre del mas viejo es " + nombreEdadMaxima + " y su sexo es "+sexoEdadMaxima+ "<br>");
    document.write("cantidad de mujeres viudas y casadas son " + cantidadMujeresViudasYCasadas+ "<br>");
    document.write("el promedio de edad de todas las mujeres son " + promedioEdadMujeres );


}

