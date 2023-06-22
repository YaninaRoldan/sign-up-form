function validarFormulario() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || lastName === '' || email === '' || password === '') {
        document.getElementById('error').innerHTML = 'Por favor, complete todos los campos.';
        return false;
    }
    else if (email.indexOf('@') === -1) {
        document.getElementById('error').innerHTML = 'Por favor, ingrese una dirección de correo electrónico válida.';
        return false;
    }
    else {
        document.getElementById('error').innerHTML = '';
        return true;
    }
}