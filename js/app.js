console.log("Archivo app.js cargado correctamente.");

$(document).ready(function() {
    console.log("Documento listo y jQuery cargado.");


    $.ajax({
        url: 'https://www.codigo-alfa.cl/aglo/tester/listasPeliculas',
        method: 'GET',
        success: function(response) {
            console.log("Response received:", response);

            var listaPeliculas = $('#listaPeliculas');
            if (response && response.peliculas) {
                response.peliculas.forEach(function(pelicula) {
                    listaPeliculas.append('<option value="' + pelicula.id + '">' + pelicula.title + '</option>');
                });
            } else {
                alert('Error en la estructura de la respuesta');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error details:", textStatus, errorThrown);
            alert('Error al conectar con el servidor. Revisa la consola para más detalles.');
        }
    });


    $('#consultarPelicula').click(function() {
        $.ajax({
            url: 'https://www.codigo-alfa.cl/aglo/tester/peliculaAleatoria',
            method: 'GET',
            success: function(response) {
                console.log("Película aleatoria recibida:", response);
                var pelicula = response.pelicula;
                var mensaje = '<strong>Nombre:</strong> ' + pelicula.title + '<br>' +
                              '<strong>Año:</strong> ' + pelicula.year + '<br>' +
                              '<strong>Género:</strong> ' + pelicula.genre;


                $('#modalMessage').html(mensaje);
                $('#modal').show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error details:", textStatus, errorThrown);
                alert('Error al consultar la película aleatoria. Revisa la consola para más detalles.');
            }
        });
    });


    $('.close, #modalOk').click(function() {
        $('#modal').hide();
    });
});












