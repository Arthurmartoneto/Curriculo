<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    // Configurações para enviar o e-mail
    $destinatario = 'arthurcalorio@gmail.com'; // Substitua pelo seu endereço de e-mail
    $assunto_email = "Novo contato pelo formulário: $assunto";
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Assunto: $assunto\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Envia o e-mail
    if (mail($destinatario, $assunto_email, $corpo_email)) {
        echo '<p class="alert alert-success">Mensagem enviada com sucesso!</p>';
    } else {
        echo '<p class="alert alert-danger">Erro ao enviar mensagem. Por favor, tente novamente mais tarde.</p>';
    }
} else {
    echo '<p class="alert alert-danger">Método inválido. Por favor, envie o formulário através do método POST.</p>';
}
?>
