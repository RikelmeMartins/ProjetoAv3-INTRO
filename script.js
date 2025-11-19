const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar() {
    const email = document.getElementById('email').getAttribute('value').trim();
    const senha = document.getElementById('senha').getAttribute('value');
    const mensagem = document.getElementById('mensagem');

    mensagem.textContent = '';
    mensagem.className = '';
    
    if (email === '') {
        mensagem.textContent = 'Campo de e-mail não pode estar vazio.';
        mensagem.className = 'error';
        return false;
    } else {
        if (email.length < 10) {
            mensagem.textContent = 'E-mail deve ter pelo menos 10 caracteres.';
            mensagem.className = 'error';
            return false;
        }
        if (!email.includes('@') || !email.includes('.')) {
            mensagem.textContent = 'E-mail deve conter @ e .';
            mensagem.className = 'error';
            return false;
        }
        
        if (!emailRegex.test(email)) {
            mensagem.textContent = 'Formato de e-mail inválido.';
            mensagem.className = 'error';
            return false;
        }
    }
  
    if (senha === '') {
        mensagem.textContent = 'Campo de senha não pode estar vazio.';
        mensagem.className = 'error';
        return false;
    } else {
        if (senha.length < 6) {
            mensagem.textContent = 'Senha deve ter pelo menos 6 caracteres.';
            mensagem.className = 'error';
            return false;
        }
        if (!/\d/.test(senha)) {
            mensagem.textContent = 'Senha deve conter pelo menos 1 número.';
            mensagem.className = 'error';
            return false;
        }
        if (!/[A-Z]/.test(senha)) {
            mensagem.textContent = 'Senha deve conter pelo menos 1 letra maiúscula.';
            mensagem.className = 'error';
            return false;
        }
        if (!/[a-z]/.test(senha)) {
            mensagem.textContent = 'Senha deve conter pelo menos 1 letra minúscula.';
            mensagem.className = 'error';
            return false;
        }
    }
    
    
    mensagem.textContent = 'Login realizado com sucesso!';
    mensagem.className = 'success';
    exibir();
    return false; 
}

function exibir(){
    window.location.href = 'https://github.com/RikelmeMartins/ProjetoAv3-INTRO';
}