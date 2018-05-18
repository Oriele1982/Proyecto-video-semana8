$(document).ready(function(){
	$("#myform").on("submit", function(event){
		event.preventDefault(); //Previene que se envie el texto del formulario para crear la siguiente nota.
			var text = $("#mytext").val();    // .val nos mostrará el contenido que se encuentra dentro del textarea.
		$("#board").append(
		"<div class='note'>"
		 + "<div class='pin'>"  //Cuidado con el tipo de comillas "" o ''
		 + "</div>"
		 + text  // se cambia por el nombre de la variable TEXT y tendrá el contenido lo que nosotros queramos escribir.
		 + "</div>");  //Como agregar notas dinámicamente juntando HTML y CSS en un mismo codigo.
		$("#mytext").val('');
		$("#mytext").focus();
	});

	$("#board").on("click", ".pin", function(event){ //El click de ahora será sobre el id board que es el padre de los elementes y este le delegará a pin para deaparecer los note
		event.stopPropagation(); //al usar event.xxxx , en la parte de function() debo llenar el parentesis con la palabra event para que funcione.
		$(this).parent().fadeOut(500); //Si le hago click al pin, selecciono al padre del elemento, también con fadeOut desaparezco los items (posteo), y además puedo manejar el tiempo en que el elemento desaparezca.
	});

	$("#board").on("click", ".note", function(){  //Esta función detiene la propagación de elementos. Se delega sobre la clase .note.
		$(this).toggleClass("strike");
	});
});