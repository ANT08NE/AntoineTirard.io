const responses = {
    "Quelles sont vos compétences ?": "J'ai des compétences en SQL, Python, Power BI, et analyse de données.",
    "Quels outils maîtrisez-vous ?": "Je maîtrise Excel, Python, SQL, Tableau, et Power BI.",
    "Pouvez-vous partager un exemple de projet ?": "Oui, j'ai travaillé sur un projet d'analyse de données pour visualiser les ventes d'une entreprise. Découvrez-le ici : [lien].",
    "Comment peut-on vous contacter ?": "Vous pouvez me contacter via mon email ou LinkedIn.",
};

document.getElementById("chatbot-send").addEventListener("click", () => {
    const inputField = document.getElementById("chatbot-input");
    const userMessage = inputField.value;
    const chatbotMessages = document.getElementById("chatbot-messages");

    if (userMessage.trim() !== "") {
        // Affiche la question de l'utilisateur
        chatbotMessages.innerHTML += `<div><strong>Vous :</strong> ${userMessage}</div>`;

        // Cherche une réponse ou affiche un message par défaut
        const botResponse = responses[userMessage] || "Désolé, je ne connais pas encore la réponse à cette question.";
        chatbotMessages.innerHTML += `<div><strong>Chatbot :</strong> ${botResponse}</div>`;

        // Efface le champ de saisie et descend vers le dernier message
        inputField.value = "";
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});
