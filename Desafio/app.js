function encriptarTexto() {
    // Obtener el texto introducido por el usuario en el área de texto de entrada
    let textoEntrada = document.getElementById('textoEntrada').value;
    
    // Encriptar el texto usando codificación Base64
    let textoEncriptado = btoa(textoEntrada);
    
    // Mostrar el texto encriptado en el área de texto de salida
    document.getElementById('textoSalida').value = textoEncriptado;
    
    // Mostrar retroalimentación visual en el botón de encriptar
    mostrarRetroalimentacion('botonEncriptar', true);
}

function desencriptarTexto() {
    // Obtener el texto encriptado del área de texto de salida
    let textoEncriptado = document.getElementById('textoSalida').value;
    
    try {
        // Desencriptar el texto usando decodificación Base64
        let textoDesencriptado = atob(textoEncriptado);
        
        // Mostrar el texto desencriptado en el área de texto de salida
        document.getElementById('textoSalida').value = textoDesencriptado;
        
        // Mostrar retroalimentación visual en el botón de desencriptar
        mostrarRetroalimentacion('botonDesencriptar', true);
    } catch (e) {
        // Mostrar una alerta si el texto encriptado no es válido
        alert('El texto encriptado no es válido');
        
        // Mostrar retroalimentación visual en el botón de desencriptar
        mostrarRetroalimentacion('botonDesencriptar', false);
    }
}

function copiarTexto() {
    // Obtener el texto del área de texto de salida
    let textoSalida = document.getElementById('textoSalida');
    
    // Seleccionar todo el texto en el área de texto de salida
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
    
    // Mostrar una alerta indicando que el texto ha sido copiado
    alert('Texto copiado: ' + textoSalida.value);
}

function borrarTexto() {
    // Borrar el contenido del área de texto de entrada
    document.getElementById('textoEntrada').value = '';
}

function mostrarRetroalimentacion(botonId, exito) {
    // Obtener el botón al que se le quiere mostrar retroalimentación
    const boton = document.getElementById(botonId);
    
    // Cambiar el color de fondo del botón dependiendo del éxito de la operación
    boton.style.backgroundColor = exito ? '#4caf50' : '#f44336';
    
    // Restaurar el color de fondo del botón después de 1 segundo
    setTimeout(() => {
        boton.style.backgroundColor = '#00796b';
    }, 1000);
}
