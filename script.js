let email = document.getElementById("email").value.trim();
let senha = document.getElementById("senha").value;
let mensagem = document.getElementById("msg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
mensagem.textContent = '';
mensagem.className = '';

function validar(){
    if (email === ""){
        mensagem.textContent = 'Campo email vazil!'
        mensagem.className = 'error';
        return false;
    }
    
    if (email.length < 10){
        mensagem.textContent = 'Email deve conter pelo menos 10 caracteres';
        mensagem.className = 'error';
        return false;
    }

    if (!email.includes("@") || !email.includes(".")){
        mensagem.textContent = 'Email deve conter @ e .';
        mensagem.className = 'error';
        return false;
    }

    if (!emailRegex.test(email)){
        mensagem.textContent = 'Formato de email inválido!';
        mensagem.className = 'error';
        return false;
    }

    if (senha === ''){
        mensagem.textContent = 'Campo senha vazil!';
        mensagem.className = 'error';
        return false;
    }

    if (senha.length < 6){
        mensagem.textContent = 'Senha deve conter pelo menos 6 caracteres';
        mensagem.className = 'error';
        return false;
    }

    if(!/[0-9]/.test(senha)){
        mensagem.textContent = 'Senha deve conter pelo menos 1 número!';
        mensagem.className = 'error';
        return false;
    }

    if (!/[A-Z]/.test(senha)){
        mensagem.textContent = 'Senha deve conter pelo menos 1 letra maiúscula!';
        mensagem.className = 'error';
        return false;
    }

    if (!/[a-a]/.test(senha)){
        mensagem.textContent = 'Senha deve conter pelo menos 1 letra minúscula!';
        mensagem.className = 'error';
        return false;
    }

    mensagem.textContent = 'Login realizado com sucesso!';
    mensagem.className = 'success'; 
    return false;     
}

