"use strict"

function Checkbox(object)
{
	var acum = 0;
	var punto;
	var correctas = 0;

	for(var i = 0 ; i < object.length ; i++ )
	{
		if(object[i].className == "checkbox_v")
		{
			correctas += 1;
		}
	}

	punto = 10 / correctas;

	for(var i = 0 ; i < object.length ; i++ )
	{
		if(object[i].checked)
		{
			if(object[i].className == "checkbox_v")
				acum += punto;
			else
				acum -= punto;
		}
	}

	return acum;
}


function Chequeo()
{
	//CHEQUEO REGISTRO
	while (document.getElementById("name").value == "" || document.getElementById("lastname").value == "")
	{
		return false;
	}


	//CHEQUEO PREGUNTA 1
	while (!document.querySelector('input[name="1era"]:checked'))
	{
		return false;
	}

	//CHEQUEO PREGUNTA 2
	while (!document.querySelector('input[name="2da"]:checked'))
	{
		return false;
	}

	//CHEQUEO PREGUNTA 3
	while (!document.querySelector('input[name="3ra"]:checked'))
	{
		return false;
	}

	//CHEQUEO PREGUNTA 4
	while (document.getElementById("4ta").value == "")
	{
		return false;
	}

	//CHEQUEO PREGUNTA 7
	while (!document.querySelector('input[name="7ma"]:checked'))
	{
		return false;
	}

	//CHEQUEO PREGUNTA 9
	while (!document.querySelector('input[name="9na"]:checked'))
	{
		return false;
	}

	//CHEQUEO PREGUNTA 5
	while (document.getElementById("5ta").value == "--Elegir--")
	{
		alert("Seleccione Una De Las Opciones");
		document.getElementById("p5").scrollIntoView();
		return false;
	}

	//CHEQUEO PREGUNTA 6
	while (!document.querySelector('input[name="6ta"]:checked'))
	{
		alert("Seleccione Minimo Una Opcion");
		document.getElementById("p6").scrollIntoView();
		return false;
	}

	//CHEQUEO PREGUNTA 8
	while (document.getElementById("8va").value == "--Elegir--")
	{
		alert("Seleccione Una De Las Opciones");
		document.getElementById("p8").scrollIntoView();
		return false;
	}

	//CHEQUEO PREGUNTA 10
	while (!document.querySelector('input[name="10ma"]:checked'))
	{
		alert("Seleccione Minimo Una Opcion");
		document.getElementById("p10").scrollIntoView();
		return false;
	}

	return true;
} 

function Profesor()
{
	var acum = 0;

	//PREGUNTA 1
	if(document.querySelector('input[name="1era"]:checked').value == "Verdadero")
	{
		acum += 10;
	}
	else

	document.getElementById("name").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("p1_1").checked = false;
	document.getElementById("p1_2").checked = false;

	//PREGUNTA 2
	if(document.querySelector('input[name="2da"]:checked').value == "Verdadero")
	{
		acum += 10;
	}

	document.getElementById("p2_1").checked = false;
	document.getElementById("p2_2").checked = false;

	//Pregunta 3
	if(document.querySelector('input[name="3ra"]:checked').value == "B")
	{
		acum += 10;	
	}

	document.getElementById("p3_1").checked = false;
	document.getElementById("p3_2").checked = false;
	document.getElementById("p3_3").checked = false;

	//Pregunta 4
	if(document.getElementById("4ta").value == 60)
	{
		acum += 10;
	}

	document.getElementById("4ta").value = "";

	//Pregunta 5
	if(document.getElementById("5ta").value == "derecha")
	{
		acum += 10;		
	}

	document.getElementById("5ta").value = "--Elegir--";

	//Pregunta 6
	acum += Checkbox(document.getElementsByName("6ta"));

	document.getElementById("p6_1").checked = false;
	document.getElementById("p6_2").checked = false;
	document.getElementById("p6_3").checked = false; 

	//Pregunta 7
	if(document.querySelector('input[name="7ma"]:checked').value == "Falso")
	{
		acum += 10;
	}

	document.getElementById("p7_1").checked = false;
	document.getElementById("p7_2").checked = false;

	//Pregunta 8
	if(document.getElementById("8va").value == "estacionar")
	{
		acum += 10;
	}

	document.getElementById("8va").value = "--Elegir--";

	//Pregunta 9
	if(document.querySelector('input[name="9na"]:checked').value == "Verdadero")
	{
		acum += 10;
	}

	document.getElementById("p9_1").checked = false;
	document.getElementById("p9_2").checked = false;
	document.getElementById("p9_3").checked = false;

	//Pregunta 10

	document.getElementById("p10_1").checked = false;
	document.getElementById("p10_2").checked = false;
	document.getElementById("p10_3").checked = false;

	return acum;

}

function Mostrar()
{
	document.getElementById("cerrar_resultado").className = "";
	document.getElementById("resultado").className = "";
}


document.getElementById("enviar").onclick = function()
{
	if(Chequeo())
	{
		var Nombre = document.getElementById("name").value;
		var Apellido = document.getElementById("lastname").value;
		var Nota = Profesor();


		document.getElementById("barra").value = Nota;
		document.getElementById("puntaje").innerHTML = Nota + "/100";

		if(Nota > 60)
		{
			document.getElementById("titulo").innerHTML = Nombre + " " + Apellido + " ,Usted Aprobo!";
			document.getElementById("gifok").className = "";
			Mostrar();
		}
		else
		{
			document.getElementById("titulo").innerHTML = Nombre + " " + Apellido + " ,Usted Reprobo.";
			document.getElementById("gifok").className = "";
			document.getElementById("gifbad").className = "";
			Mostrar();
		}	

		document.getElementById("1").scrollIntoView();
		document.getElementById("gifok").className = "oculto";
		document.getElementById("gifbad").className = "oculto";
	}
}

document.getElementById("cerrar_resultado").onclick = function()
{
	document.getElementById("cerrar_resultado").className = "oculto";
	document.getElementById("resultado").className = "oculto";
	document.getElementById("gifok").className = "oculto";
	document.getElementById("gifbad").className = "oculto";
}


