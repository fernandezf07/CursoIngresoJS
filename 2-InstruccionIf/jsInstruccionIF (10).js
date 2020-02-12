function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = Math.floor((Math.random() * 10) + 1);

    console.log(random);

    if(random >=9){
    	alert( "EXCELENTE");
    }
    
    if (random <=8 || random >=4){
    	alert ("APROBO");
    }
    else {

    	alert ("vamos, para la proxima");
    }
         



}//FIN DE LA FUNCIÓN