const projectsData = {
    bees: {
        title: "Site West Coast Bees",
        description: "Un site web permettant de vendre des produits liés au miel. Projet donné dans le cadre d'un cours d'anglais où nous devions créer un site web à partir de la demande d'un groupe de clients et où toutes nos communications devaient se faire en anglais professionnel.",
        fullDescription: "Le site web, réalisé en groupe de 5, m'a confié la responsabilité de communiquer avec les clients, de présenter nos avancées et de les mettre en valeur. J'ai également effectué une grande partie de la maquette pour montrer à mon groupe l'architecture du site. J'ai aidé à programmer la page produit et inventé chaque produit à vendre en leur trouvant des prix raisonnables.\n Ce site web comportait 5 pages différentes avec pour consignes principales : qu'il soit responsive et composé de jaune et de vert. En créant ce site, les clients nous ont fait plusieurs retours et demandé de nombreuses modifications pour répondre à leurs attentes.",
        technologies: ["HTML", "CSS3", "GIT"],
        features: [
            "Visuel associant deux couleurs opposées",
            "Des pages explicites sur leur message",
            "Création de produits originaux"
        ],
        challenges: "Le principal défi était la communication avec le client, ayant peu d'idées et ayant du mal à les exprimer en anglais. Nous avons dû proposer beaucoup d'idées différentes et essayer d'anticiper les besoins.",
    },
    atos: {
        title: "Site web Atos",
        description: "Un site web s'inspirant de celui du vrai mais modifié pour être compréhensible par des élèves de 3e, pour leur stage de fin d'année.",
        fullDescription: "GameHub est une plateforme sociale de gaming qui permet aux joueurs de se connecter, de jouer ensemble et de communiquer en temps réel. Le projet inclut plusieurs mini-jeux, un système de classement, et une architecture scalable pour supporter des milliers d'utilisateurs simultanés.",
        technologies: ["HTML", "CSS3", "Git"],
        features: [
            "Système de matchmaking intelligent",
            "Chat en temps réel avec emojis personnalisés",
            "Plusieurs jeux intégrés (Puissance 4, Morpion, Quiz)",
            "Système de classement et achievements",
            "Profils utilisateurs personnalisables",
            "Notifications push en temps réel"
        ],
        challenges: "Gérer la synchronisation en temps réel entre les joueurs et optimiser les performances pour les sessions multijoueurs.",
    },
    steelwar: {
        title: "🤖 ChatBot IA",
        description: "Un assistant virtuel intelligent capable de comprendre et de répondre naturellement aux questions.",
        fullDescription: "Ce chatbot utilise des techniques avancées de traitement du langage naturel pour offrir une expérience conversationnelle fluide. Il peut gérer des requêtes complexes, apprendre des interactions passées et s'adapter au style de communication de chaque utilisateur.",
        technologies: ["HTML", "CSS3", "Git"],
        features: [
            "Compréhension du langage naturel avancée",
            "Apprentissage adaptatif des préférences utilisateur",
            "Intégration avec plusieurs APIs (météo, news, traduction)",
            "Interface conversationnelle intuitive",
            "Historique des conversations persistant",
            "Support multilingue (FR, EN, ES)"
        ],
        challenges: "Entraîner le modèle pour comprendre le contexte et maintenir une cohérence dans les conversations longues.",
        results: "Le chatbot atteint un taux de satisfaction de 89% et traite plus de 1 000 conversations par jour."
    },
    afit: {
        title: "📱 TaskFlow",
        description: "Application mobile de productivité avec synchronisation cloud et IA pour optimiser l'organisation.",
        fullDescription: "TaskFlow révolutionne la gestion des tâches en intégrant l'intelligence artificielle pour suggérer des priorités, optimiser les plannings et envoyer des rappels intelligents. L'application se synchronise parfaitement entre tous les appareils.",
        technologies: ["R", "Node.js", "MongoDB", "AWS", "TensorFlow.js", "Push Notifications"],
        features: [
            "IA pour suggestions de priorités automatiques",
            "Synchronisation en temps réel multi-appareils",
            "Calendrier intelligent avec détection de conflits",
            "Rappels adaptatifs basés sur les habitudes",
            "Collaboration en équipe avec partage de projets",
            "Analyses de productivité personnalisées"
        ],
        challenges: "Développer des algorithmes d'IA légers pour mobile et assurer une synchronisation parfaite offline/online.",
        results: "L'app a été téléchargée plus de 15 000 fois avec une note moyenne de 4,7/5 sur les stores."
    },
    cuisine: {
        title: "📱 TaskFlow",
        description: "Application mobile de productivité avec synchronisation cloud et IA pour optimiser l'organisation.",
        fullDescription: "TaskFlow révolutionne la gestion des tâches en intégrant l'intelligence artificielle pour suggérer des priorités, optimiser les plannings et envoyer des rappels intelligents. L'application se synchronise parfaitement entre tous les appareils.",
        technologies: ["React Native", "Node.js", "MongoDB", "AWS", "TensorFlow.js", "Push Notifications"],
        features: [
            "IA pour suggestions de priorités automatiques",
            "Synchronisation en temps réel multi-appareils",
            "Calendrier intelligent avec détection de conflits",
            "Rappels adaptatifs basés sur les habitudes",
            "Collaboration en équipe avec partage de projets",
            "Analyses de productivité personnalisées"
        ],
        challenges: "Développer des algorithmes d'IA légers pour mobile et assurer une synchronisation parfaite offline/online.",
        results: "L'app a été téléchargée plus de 15 000 fois avec une note moyenne de 4,7/5 sur les stores."
    },
    pendu: {
        title: "📱 TaskFlow",
        description: "Application mobile de productivité avec synchronisation cloud et IA pour optimiser l'organisation.",
        fullDescription: "TaskFlow révolutionne la gestion des tâches en intégrant l'intelligence artificielle pour suggérer des priorités, optimiser les plannings et envoyer des rappels intelligents. L'application se synchronise parfaitement entre tous les appareils.",
        technologies: ["React Native", "Node.js", "MongoDB", "AWS", "TensorFlow.js", "Push Notifications"],
        features: [
            "IA pour suggestions de priorités automatiques",
            "Synchronisation en temps réel multi-appareils",
            "Calendrier intelligent avec détection de conflits",
            "Rappels adaptatifs basés sur les habitudes",
            "Collaboration en équipe avec partage de projets",
            "Analyses de productivité personnalisées"
        ],
        challenges: "Développer des algorithmes d'IA légers pour mobile et assurer une synchronisation parfaite offline/online.",
        results: "L'app a été téléchargée plus de 15 000 fois avec une note moyenne de 4,7/5 sur les stores."
    }
};
        function openProject(projectId) {
            const project = projectsData[projectId];
            const modal = document.getElementById('projectModal');
            const modalContent = document.getElementById('modalContent');
            const navbar = document.querySelector('.navbar');
            
            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <p style="font-size: 1.2rem; opacity: 0.9; text-align: center; margin-bottom: 2rem;">${project.description}</p>
                
                <h3>📝 Description détaillée</h3>
                <p>${project.fullDescription}</p>
                
                <h3>🛠️ Technologies utilisées</h3>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <h3>✨ Fonctionnalités principales</h3>
                <ul class="features-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h3>🚧 Défis techniques</h3>
                <p>${project.challenges}</p>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn" onclick="alert('Lien vers le projet GitHub ou demo')">Voir le code</button>
                    <button class="btn" onclick=contact() onclick style="margin-left: 1rem;">Me contacter</button>
                </div>
            `;
            
            modal.classList.add('active');
            navbar.classList.add('hidden'); 
            document.body.style.overflow = 'hidden';
        }

        function contact() {
            closeModal();
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }

        function closeModal() {
            const modal = document.getElementById('projectModal');
            const navbar = document.querySelector('.navbar');

            modal.classList.remove('active');
            navbar.classList.remove('hidden');
            document.body.style.overflow = 'auto';
        }

        // Fermer le modal en cliquant à l'extérieur
        document.getElementById('projectModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Fermer le modal avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Animation des nuages continue
        function resetCloudAnimation() {
            const clouds = document.querySelectorAll('.cloud');
            clouds.forEach(cloud => {
                cloud.style.animationPlayState = 'running';
            });
        }

        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            resetCloudAnimation();
        });
        // Effet de soumission du formulaire
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = document.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '✅ Message envoyé !';
            btn.style.background = 'rgba(76, 175, 80, 0.8)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = 'rgba(255, 255, 255, 0.2)';
                this.reset();
            }, 2000);
        });

        // Effet de parallaxe subtil

