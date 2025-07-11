# Plateforme e-commerce SaaS – CYNA IT

Projet réalisé dans le cadre du Bachelor Informatique – Sup de Vinci (2024-2025)

🎯 Objectif
Développer une plateforme e-commerce spécialisée en cybersécurité avec :
Gestion de comptes utilisateurs
Paiement en ligne (Stripe)
Interface d’administration
Chatbot React
Application mobile

👥 Équipe
William DA SILVA – Chef de projet
Ali RASOULI – Développeur BDD & paiements
Dylan WAZIRI – Développeur Frontend
Mattéo BALMOUSSIERE – Développeur Mobile & Backoffice

🛠️ Technologies
Frontend : React.js
Backend : Node.js / PHP
Mobile : React Native (si applicable)
BDD : MySQL
Outils : Trello, Discord, GitHub

📁 Structure
Voir le dossier docs/ pour tous les livrables du projet.

📅 Organisation
Méthode Agile avec sprints hebdomadaires.
Suivi de projet via Trello.

📦 Lancer le projet

Pour le front React - 

Tutoriel d’installation et de lancement du projet
1. Installation des dépendances
npm install
Installe toutes les dépendances listées dans le fichier package.json.

2. Lancer le projet en développement
npm run dev
Lance le serveur de développement (généralement accessible via http://localhost:3000).

3. Compiler le projet pour la production
npm run build
Crée une version optimisée du projet pour un déploiement en production.

4.  Lancer la version build (production)
npm run start
Lance le projet à partir des fichiers générés avec npm run build.

5. Lancer les tests (si applicable)
npm run test
Lance les tests automatiques s’ils sont configurés (optionnel).

---------------------------------------------------------------------------------------------------

Pour le back 
🔧 Installer Node.js et npm
Node.js inclut automatiquement npm (le gestionnaire de paquets).

Télécharge Node.js depuis : [https://nodejs.org](https://nodejs.org)
Vérifie l’installation :

node -v
npm -v


---
Installer Express (Backend)
Dans le dossier /server :

mkdir server
cd server
npm init -y                  # Crée un fichier package.json
npm install express dotenv cors mysql2 jsonwebtoken bcryptjs


Pour le développement :
npm install --save-dev nodemon


Tu peux démarrer ton serveur avec :
npx nodemon index.js

-----------------------------------------------------------------------------

Pour le React Native

Installer React Native (facultatif si tu fais aussi une app mobile)
Nécessite Node.js, Android Studio ou Xcode (Mac), et expo-cli (optionnel).

#### A. Installer Expo CLI (le plus simple)

npm install -g expo-cli
expo init myApp
cd myApp
npm start


Tu pourras lancer l’application dans un simulateur ou sur ton téléphone via l'app Expo Go.

#### B. Lancer un projet React Native CLI pur

npx react-native init MyApp
cd MyApp
npx react-native run-android
