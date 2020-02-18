function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//Meses con 30 días: Abril, Junio, Septiembre y Noviembre
//Meses con 31 días: Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre.
  switch (mesDelAño)
  {
  	case "Febrero" : alert("tiene 28 dias");
  	    break;
  	case "Abril":
  	case "Junio":
  	case "Septiembre":
  	case "Noviembre": alert("tiene 30 dias");
  	     break;
  	default: alert("tiene 31 dias");
  }	
	



}//FIN DE LA FUNCIÓN