    document.getElementById("whatsappButton").addEventListener("click", function() {
        var numero = "557194105325"; // Substitua pelo número desejado (com DDD e sem espaços)
        var mensagem = "Olá, Sophia Menezes! Gostaria de fazer uma proposta de parceria."; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
        
        window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
        });

    document.getElementById("emailButton").addEventListener("click", function() {
            var destinatario = "Sophiaamenezes10@gmail.com"; // Substitua pelo seu e-mail
            var mailtoLink = "mailto:" + destinatario;
            window.location.href = mailtoLink; // Abre o cliente de e-mail padrão
        });
        // Mídia Kit (abre outro arquivo HTML)
    document.getElementById("mediaKitButton").addEventListener("click", function() {
        window.location.href = "midia-kit.html"; // Redireciona para o arquivo midia-kit.html
    });
