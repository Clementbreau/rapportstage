# Projet SAE — Assistant IA pour la génération d’anecdotes muséales

## Contexte et objectifs

Dans le cadre de la SAE de troisième année, nous avons travaillé sur un projet en collaboration avec une plateforme dédiée aux visites de musées :
**jpeuxpasjaimusee.org/visitemusee/**.

L’objectif global du projet est de proposer un outil permettant de créer et diffuser plus facilement des contenus culturels grâce à la génération d’anecdotes assistée par IA.

Le projet s’inscrit dans une logique de **produit évolutif**, piloté par une équipe composée de 5 personnes.

---

## Objectif principal de la SAE

La brique principale du projet consistait à développer un **assistant IA capable de générer des anecdotes** à partir des contenus fournis. Dans ce contexte la première partie du projet consiste a fournir au "responsable prompt" une interface utilisateur dans laquelle il va pouvoir modifier différents parametres pour atteindre la forme attendue.

Concrètement, l’outil doit :

* Analyser des contenus bruts (textes, descriptions d’œuvres, images),
* Générer des **anecdotes structurées sous forme de messages courts**,
* Pouvoir générer des variants de prompts (et les sauvegarder dans une bibliotheque),

---

## Contraintes du projet

Le projet devait respecter plusieurs contraintes importantes :

* **Fiabilité du contenu généré** : éviter les hallucinations, erreurs historiques ou contenus inappropriés,
* **Souveraineté des modèles IA** : les modèles doivent être hébergés et contrôlés en interne,
* **Intégration dans un système existant** (back-office déjà en production),
* **Qualité éditoriale** des contenus générés pour un usage public culturel.

---

## Approche méthodologique

### Organisation de l’équipe

L’équipe projet était structurée avec des rôles définis afin de clarifier les responsabilités :

* Product Owner (PO),
* Scrum Master,
* Lead Developer,
* Développeur backend,
* Développeur frontend,
* DevOps / gestion du source control.

Même si ces rôles existaient, l’organisation restait **très collaborative**, avec une répartition flexible des tâches selon les besoins.
![orga1](/img/orga1.png)

---

### Méthode agile

Le projet s’est déroulé selon une démarche agile structurée en itérations :

À chaque cycle :

* Recueil et clarification des besoins clients,
* Rédaction et reformulation des user stories,
* Création de maquettes si nécessaire,
* Priorisation des fonctionnalités,
* Collecte et prise en compte du feedback client (même lorsque les retours étaient partiels ou tardifs),

![orga2](/img/orga2.png)

---

### Gestion du flux de travail

Le suivi des tâches était organisé via un **kanban clair** :

* Stock
* À clarifier
* Prêt
* En cours
* À qualifier
* Terminé
* Livré

Chaque tâche passait par des critères définis de type **DoR** et **DoD** afin de garantir la qualité et la compréhension avant développement.

Des rétrospectives étaient réalisées régulièrement afin d’améliorer le fonctionnement de l’équipe (process, communication, organisation).

![kanban](/img/kanban.png)
---

## Architecture du projet

Le projet était découpé en plusieurs dépôts Git indépendants :

* Front-end (interface React)
* API backend
* Base de données
* Module de tests IA (Giskard)

Le système IA (modèles + MCP) était géré dans un environnement séparé.

---

## Contributions personnelles

Une des contraintes que nous nous étions fixées était de **contribuer sur tous les domaines**
### Travail sur la base de données

J’ai commencé par intervenir sur la conception du schéma de base de données, afin de structurer les données nécessaires à la génération et à la gestion des anecdotes.

---

### Travail sur le front-end

J’ai notamment contribué à la mise en place d’une bibliothèque de variants.

Le responsable souhaitait avoir un accès sur les variantes favorites de toutes les expérimentations

---

### Travail sur les tests IA (Giskard)

J’ai également créé une branche dédiée aux tests de robustesse du modèle avec **Giskard** dans laquelle j'ai réalisé différents tests et rédigé 2 comptes rendus concernants les résultats, ce qui a mis en évidence plusieurs problèmatiques comme:

- Le risque d’hallucination lorsque les sources sont trop limitées,
- L’apparition de contenus fictifs lorsque le modèle compense un manque d’information,
- La sensibilité aux prompt injections,
- Les limites liées aux contraintes contradictoires imposées au modèle.

---

## Compétences mobilisées

Ce projet mobilise plusieurs compétences du BUT Informatique :

* **Compétence 1 — Développement**
  Développement full-stack (React / Symfony), structuration de données, intégration IA.

* **Compétence 2 — Optimisation**
  Analyse des comportements du modèle et réduction des hallucinations.

* **Compétence 4 — Data**
  Structuration des données, exploitation et génération d’informations à partir de sources muséales.

* **Compétence 5 — Conduite de projet**
  Organisation agile, gestion des user stories, itérations, priorisation.

* **Compétence 6 — Collaboration**
  Travail en équipe multi-rôles, coordination et amélioration continue.

---

## Conclusion

Ce projet SAE représente une expérience très complète mêlant développement logiciel, intelligence artificielle et gestion de produit en partant de la phase de conception jusqu’à la réalisation finale.

Il m’a permis de travailler sur un environnement industriel réel, avec des contraintes fortes sur la qualité des données, la robustesse du modèle et l’intégration dans un process existant.

J’ai progressé sur les aspects liés à la structuration d’un système IA, à l’analyse de ses limites mais aussi à la collaboration dans une équipe organisée en mode agile.

---
