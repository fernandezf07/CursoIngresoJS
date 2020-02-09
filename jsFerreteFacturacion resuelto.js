/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById("PrecioDos").value;
	precioTres = document.getElementById("PrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

    alert(precioUno + precioDos + precioTres);



}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById("PrecioDos").value;
	precioTres = document.getElementById("PrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = ( precioUno + precioDos + precioTres );

	alert(resultado /3);

}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById("PrecioDos").value;
	precioTres = document.getElementById("PrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

    resultado = (precioUno + precioDos + precioTres);

    alert(resultado *21/100 + resultado);
}