// JavaScript - script.js

// Máscaras para formulários
function aplicarMascaras() {
    // Máscara para CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.substring(0, 11);
            
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            }
            
            e.target.value = value;
        });
    }
    
    // Máscara para Telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) value = value.substring(0, 11);
            
            if (value.length <= 10) {
                value = value.replace(/(\d{2})(\d)/, '($1) $2');
                value = value.replace(/(\d{4})(\d)/, '$1-$2');
            } else {
                value = value.replace(/(\d{2})(\d)/, '($1) $2');
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            }
            
            e.target.value = value;
        });
    }
    
    // Máscara para CEP
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 8) value = value.substring(0, 8);
            
            if (value.length > 5) {
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            }
            
            e.target.value = value;
        });
    }
}

// Validação do formulário de contato
function configurarFormularioContato() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
}

// Validação do formulário de cadastro
function configurarFormularioCadastro() {
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const requiredFields = cadastroForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (isValid) {
                alert('Cadastro realizado com sucesso! Em breve entraremos em contato.');
                cadastroForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    aplicarMascaras();
    configurarFormularioContato();
    configurarFormularioCadastro();
    ativarSombraMovimento();
});

// Adiciona/removes classe .is-moving em cards que se movem para aplicar sombra
function ativarSombraMovimento() {
    const cards = document.querySelectorAll('.about-card');
    if (!cards || cards.length === 0) return;

    cards.forEach(card => {
        // Hover (mouse)
        card.addEventListener('mouseenter', () => card.classList.add('is-moving'));
        card.addEventListener('mouseleave', () => card.classList.remove('is-moving'));

        // Touch (mobile)
        card.addEventListener('touchstart', () => card.classList.add('is-moving'));
        card.addEventListener('touchend', () => card.classList.remove('is-moving'));

        // Keyboard focus (acessibilidade)
        card.setAttribute('tabindex', '0'); // torna focável se não for
        card.addEventListener('focus', () => card.classList.add('is-moving'));
        card.addEventListener('blur', () => card.classList.remove('is-moving'));
    });
}