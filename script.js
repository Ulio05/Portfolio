const projectsData = {
            weather: {
                title: "🌦️ WeatherCloud",
                description: "Une application météo révolutionnaire qui transforme les données climatiques en expérience visuelle immersive.",
                fullDescription: "WeatherCloud repense complètement l'expérience de consultation météo en proposant une interface 3D interactive. L'application utilise des API météo en temps réel pour afficher des visualisations dynamiques des conditions climatiques, avec des effets de particules pour la pluie, la neige, et des animations fluides pour les changements de temps.",
                technologies: ["Three.js", "React", "Node.js", "OpenWeather API", "WebGL", "CSS3"],
                features: [
                    "Visualisation 3D en temps réel des conditions météo",
                    "Effets de particules pour pluie, neige et brouillard",
                    "Prévisions sur 7 jours avec animations",
                    "Géolocalisation automatique",
                    "Interface responsive et intuitive",
                    "Mode sombre/clair adaptatif"
                ],
                challenges: "Le principal défi était d'optimiser les performances des animations 3D tout en maintenant une interface fluide sur tous les appareils.",
                results: "L'application a reçu plus de 10,000 utilisateurs actifs en 3 mois et un taux de satisfaction de 94%."
            },
            gamehub: {
                title: "🎮 GameHub",
                description: "Une plateforme de jeux multijoueur complète avec système de chat et matchmaking intelligent.",
                fullDescription: "GameHub est une plateforme sociale de gaming qui permet aux joueurs de se connecter, de jouer ensemble et de communiquer en temps réel. Le projet inclut plusieurs mini-jeux, un système de ranking, et une architecture scalable pour supporter des milliers d'utilisateurs simultanés.",
                technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "JWT", "Docker"],
                features: [
                    "Système de matchmaking intelligent",
                    "Chat en temps réel avec emojis personnalisés",
                    "Plusieurs jeux intégrés (Puissance 4, Morpion, Quiz)",
                    "Système de ranking et achievements",
                    "Profils utilisateurs personnalisables",
                    "Notifications push en temps réel"
                ],
                challenges: "Gérer la synchronisation en temps réel entre les joueurs et optimiser les performances pour les sessions multijoueur.",
                results: "La plateforme compte maintenant 5,000+ utilisateurs enregistrés avec une moyenne de 200 joueurs simultanés."
            },
            chatbot: {
                title: "🤖 ChatBot IA",
                description: "Un assistant virtuel intelligent capable de comprendre et répondre naturellement aux questions.",
                fullDescription: "Ce chatbot utilise des techniques avancées de traitement du langage naturel pour offrir une expérience conversationnelle fluide. Il peut gérer des requêtes complexes, apprendre des interactions passées, et s'adapter au style de communication de chaque utilisateur.",
                technologies: ["Python", "TensorFlow", "NLTK", "FastAPI", "React", "WebSocket", "PostgreSQL"],
                features: [
                    "Compréhension du langage naturel avancée",
                    "Apprentissage adaptatif des préférences utilisateur",
                    "Intégration avec multiple APIs (météo, news, traduction)",
                    "Interface conversationnelle intuitive",
                    "Historique des conversations persistant",
                    "Support multilingue (FR, EN, ES)"
                ],
                challenges: "Entraîner le modèle pour comprendre le contexte et maintenir une cohérence dans les conversations longues.",
                results: "Le chatbot atteint un taux de satisfaction de 89% et traite plus de 1,000 conversations par jour."
            },
            taskflow: {
                title: "📱 TaskFlow",
                description: "Application mobile de productivité avec synchronisation cloud et IA pour optimiser l'organisation.",
                fullDescription: "TaskFlow révolutionne la gestion de tâches en intégrant l'intelligence artificielle pour suggérer des priorités, optimiser les plannings et envoyer des rappels intelligents. L'application se synchronise parfaitement entre tous les appareils.",
                technologies: ["React Native", "Node.js", "MongoDB", "AWS", "TensorFlow.js", "Push Notifications"],
                features: [
                    "IA pour suggestions de priorités automatiques",
                    "Synchronisation temps réel multi-appareils",
                    "Calendrier intelligent avec détection de conflits",
                    "Rappels adaptatifs basés sur les habitudes",
                    "Collaboration en équipe avec partage de projets",
                    "Analytics de productivité personnalisés"
                ],
                challenges: "Développer des algorithmes d'IA légers pour mobile et assurer une synchronisation parfaite offline/online.",
                results: "L'app a été téléchargée 15,000+ fois avec une note moyenne de 4.7/5 sur les stores."
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
                
                <h3>📊 Résultats</h3>
                <p>${project.results}</p>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn" onclick="alert('Lien vers le projet GitHub ou demo')">Voir le code</button>
                    <button class="btn" onclick="alert('Lien vers la démo live')" style="margin-left: 1rem;">Démo live</button>
                </div>
            `;
            
            modal.classList.add('active');
            navbar.classList.add('hidden'); 
            document.body.style.overflow = 'hidden';
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
