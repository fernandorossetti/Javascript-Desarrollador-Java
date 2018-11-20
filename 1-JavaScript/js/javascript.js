var jsonText = '{"estudiantes":['+
	'{"codigo": "001", "nombre": "Fernando", "nota":"9.0"},'+
	'{"codigo": "002", "nombre": "Gustavo", "nota":"7.5"},'+
	'{"codigo": "003", "nombre": "Josefina", "nota":"6.4"},'+
	'{"codigo": "004", "nombre": "Rodrigo", "nota":"8.0"},'+
	'{"codigo": "005", "nombre": "Juan", "nota":"8.5"},'+
	'{"codigo": "006", "nombre": "Macarena", "nota":"6.9"},'+
	'{"codigo": "007", "nombre": "Raul", "nota":"7.2"},'+
	'{"codigo": "008", "nombre": "Jimena", "nota":"6.0"},'+
	'{"codigo": "009", "nombre": "Facundo", "nota":"7.9"},'+
	'{"codigo": "010", "nombre": "Dania", "nota":"8.4"}'+ ']}';

	var jsObj = JSON.parse(jsonText);

	function mostrarEstudiantes(json) {
		var out = "<table class= 'table table-bordered'> <thead> <tr> <th>Codigo</th> <th>Nombre</th> <th>Nota</th> </tr> </thead> <tbody>";
		var i;
		for (i = 0; i<json.estudiantes.length; i++) {
			out+="<tr>"+"<td>"+json.estudiantes[i].codigo+"</td>"+"<td>"+json.estudiantes[i].nombre+"</td>"+"<td>"+json.estudiantes[i].nota+"</td>"+"</tr>";
		}
		out+="<tbody><table>"
		document.getElementById("estudiantes").innerHTML = out;
	}

	function mostrarPromedio(json) {
		var suma = 0;
		var promedio = 0;

		for (i = 0; i < json.estudiantes.length; i++){
			suma+=parseFloat(json.estudiantes[i].nota);
		}
		promedio = suma/json.estudiantes.length;
		document.getElementById("promedio").innerHTML = "El Promedio en total es: "+promedio;
	}

	function mostrarNotaAlta(json) {
		var i;
		var nota_mayor = 0;
		var nombre_estudiante = "";

		for (i = 0; i < json.estudiantes.length; i++) {

			if ((parseFloat(json.estudiantes[i].nota))>nota_mayor) {
				nota_mayor = parseFloat(json.estudiantes[i].nota);
				nombre_estudiante = json.estudiantes[i].nombre;

			document.getElementById("notaAlta").innerHTML = "La nota mayor es: "+nota_mayor+" del/la estudiante: "+nombre_estudiante;
			} else {

			document.getElementById("notaAlta").innerHTML = "La nota mayor es: "+nota_mayor+" del/la estudiante: "+nombre_estudiante;
			}
		}
	}

	function mostrarNotaBaja(json) {
		var i;
		var nota_menor = json.estudiantes[0].nota;
		var nombre_estudiante = "";

		for (i = 0; i < json.estudiantes.length; i++) {

			if ((parseFloat(json.estudiantes[i].nota))<nota_menor) {
				nota_menor = parseFloat(json.estudiantes[i].nota);
				nombre_estudiante = json.estudiantes[i].nombre;

			document.getElementById("notaBaja").innerHTML = "La nota menor es: "+nota_menor+" del/la estudiante: "+nombre_estudiante;
			} else {

			document.getElementById("notaBaja").innerHTML = "La nota menor es: "+nota_menor+" del/la estudiante: "+nombre_estudiante;
			}
		}
	}

