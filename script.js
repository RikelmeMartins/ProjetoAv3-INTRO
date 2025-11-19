function validar() {
    const email = document.getElementById('email').getAttribute('value').trim();
    const senha = document.getElementById('senha').getAttribute('value');
    const mensagem = document.getElementById('mensagem');

    mensagem.textContent = '';
    mensagem.className = '';
    
    let erros = [];
    
    if (email === '') {
        erros.push('Campo de e-mail não pode estar vazio.');
    } else {
        if (email.length < 10) {
            erros.push('E-mail deve ter pelo menos 10 caracteres.');
        }
        if (!email.includes('@') || !email.includes('.')) {
            erros.push('E-mail deve conter @ e .');
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            erros.push('Formato de e-mail inválido.');
        }
    }
  
    if (senha === '') {
        erros.push('Campo de senha não pode estar vazio.');
    } else {
        if (senha.length < 6) {
            erros.push('Senha deve ter pelo menos 6 caracteres.');
        }
        if (!/\d/.test(senha)) {
            erros.push('Senha deve conter pelo menos 1 número.');
        }
        if (!/[A-Z]/.test(senha)) {
            erros.push('Senha deve conter pelo menos 1 letra maiúscula.');
        }
        if (!/[a-z]/.test(senha)) {
            erros.push('Senha deve conter pelo menos 1 letra minúscula.');
        }
    }
    
    if (erros.length > 0) {
        mensagem.innerHTML = erros.join('<br>'); 
        mensagem.className = 'error';
        return false;
    }
    
    mensagem.textContent = 'Login realizado com sucesso!';
    mensagem.className = 'success';
    return false; 
}