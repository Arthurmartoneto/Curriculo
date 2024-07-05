function enviarFormulario(botao) {
    // Desabilitar o botão e alterar o texto para "Enviando..."
    botao.disabled = true;
    botao.value = 'Enviando...';

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Configuração do serviço EmailJS
    const serviceID = 'service_79hkh89'; // ID do serviço no EmailJS
    const templateID = 'template_77p0mpw'; // ID do template no EmailJS
    const userID = 'zYrTZAS3Xx69wQWeX'; // ID do usuário no EmailJS

    // Dados a serem enviados para o EmailJS
    const templateParams = {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    };

    // Requisição para o serviço EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            alert('Mensagem enviada com sucesso!');
            botao.disabled = false; // Reativar o botão após o envio
            botao.value = 'Enviar Mensagem'; // Restaurar o texto do botão
            document.getElementById('meuFormulario').reset(); // Limpar o formulário após o envio
        }, function(error) {
            console.error('Erro ao enviar e-mail:', error);
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            botao.disabled = false; // Reativar o botão em caso de erro
            botao.value = 'Enviar Mensagem'; // Restaurar o texto do botão
        });
}
