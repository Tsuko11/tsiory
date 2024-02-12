document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'yes') {
            document.querySelector('#particles-js').style.display = "block";
            const messages = [
                'OUAIISS JE T\'AIME!', 'Je suis happy!', 'Yessss!', 'Merci le masisoo :)',
                'Bonne réponse le petit!', 'Tu me rends heureux!', "Merci pour l'amour!",
                "Tu es mon rayon de soleil Tsiorintsoa!", "Je tuerais le monde pour toi", 'Elle a d-dis oui 🥲'
            ];
            const random = Math.floor(Math.random() * messages.length);
            document.querySelector('h1').innerText = messages[random];
            document.querySelector('#gif').src = "https://media.tenor.com/Ka7sVbRXQUwAAAAj/tkthao219-bubududu.gif";

            particlesJS('particles-js', {
                // Configuration des particules...
            });
        }

        if(e.target.id === "no") {
            document.querySelector('#particles-js').style.display = "none"; 
            const messages = [
                'Pourquoi non? :(', 'Tsisy pti', 'S\'il te plait sois ma valentine', 
                'Ça se voit tu m\'aimes pas :(', 'Diss Ouii', 'Je sais que tu m\'aimes pff',
                'Mauvaise reponse le pti', 'Tu es vraiment un petit matou', 'Ça fait mal',
                'Je ne peux pas y croire', 'Okay pas Shein alors', 'T\'es serieuse la?',
                'Tout ça pour ça :('
            ];
            const random = Math.floor(Math.random() * messages.length);
            document.querySelector('h1').innerText = messages[random];
            document.querySelector("#gif").src = "https://media.tenor.com/RJgIui1E_2QAAAAj/teddy-bear.gif";
        }
    });
});