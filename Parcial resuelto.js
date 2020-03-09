/*realiza la carga de 5 productos de prevencion contagio de cada uno de los sig datos:
el tipo (barbijo, jabon, alcohol) el precio (de 100 a 300) cantidad (1 a 1000) y fabricante
A) del mas caro de los barbijos la cantidad y el fabricante
B) del item con mas unidades el fabricante
C) cuantas unidades de jabones hay en total.*/
function mostrar()
{
	 var tipo;
	 var precio;
	 var cantidad;
	 var fabricante;
	 var contador;
	 var acumulador;
	 var precioMaximo;
	 var precioMaximofabricante;
	 var cantidadPrecioMaximoBarbijo;
	 var cantidadMaxima;
	 var tipoCantidadMaxima
	 var fabricanteCantidadMaxima;
	 var acumuladorJabones;

     
     cantidadMaxima=0;
     precioMaximo=0;
	 contador=0;
	 acumulador=0;

	 while (contador <4)
	 {
        do
        {
        	tipo=prompt("ingrese 'barbijo' o 'jabon' o 'alcohol' ");
        } while (!isNaN(tipo) || tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");

        do
        {
        	precio=prompt("ingrese precio del producto");
        	precio=parseInt(precio);
        } while (isNaN(precio) || precio <100 || precio >300);

        do
        {
        	cantidad=prompt("ingrese cantidad max 1000");
        	cantidad=parseInt(cantidad);
        } while (isNaN(cantidad) || cantidad <0 || cantidad >1000);

        do
        {
        	fabricante=prompt("ingrese fabricante de producto");
        } while (!isNaN(fabricante));

           // fin de validacion //

           
          switch (tipo)
          {
          	 case "barbijo": if ( precioMaximo< precio || precioMaximo ==0)
          	 {
                     precioMaximo=precio;
                     precioMaximofabricante=fabricante;
                     cantidadPrecioMaximoBarbijo=cantidad;
          	 }
                     break;
          }

        if ( cantidadMaxima < cantidad || cantidadMaxima==0)
        {
        	cantidadMaxima=cantidad;
        	tipoCantidadMaxima=tipo;
        	fabricanteCantidadMaxima=fabricante;

        }

         switch (tipo)
         {
         	case "jabon": acumulador=acumulador+cantidad
         }


	 	 contador++;
	 }
    
    document.write(" el barbijo mas caro es del fabricante " + precioMaximofabricante+ " y la cantidad del mismo es "+ cantidadPrecioMaximoBarbijo +'<br>');
    document.write("el tipo con mas unidades es " + tipoCantidadMaxima + " y su fabricante es " + fabricanteCantidadMaxima + "<br>");
    document.write(" el total de unidades de jabones son " + acumulador );


}

