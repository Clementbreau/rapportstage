# Projet — MetDataDH : centralisation et exploitation de métadonnées

## Contexte et problématique

Chez Covéa, les applications évoluent constamment (modification d'une colonne en base de données, changement d'architecture, mise à jour de patterns). Avant ce projet, chaque évolution technique déclenchait un travail d'enquête pour mesurer les impacts et s'assurer que rien ne cassait en chaîne.

Les équipes devaient alors :

* Ouvrir manuellement **des dizaines de jobs Talend** gourmands en ressources pour vérifier les schémas,
* Fouiller dans une documentation Confluence pas toujours à jour,
* Analyser à bas niveau les tables et les champs impactés.

Cette approche artisanale rendait les analyses d'impact **longues, incertaines et particulièrement d'un coût élevé en temps de maintenance**. C’est pour briser ce goulot d'étranglement qu'a été lancé le projet **MetDataDH**.

## Objectif du projet

L'objectif était de créer un système automatisé capable d'extraire, centraliser et structurer l'ensemble des métadonnées techniques du SI. L'outil doit permettre aux développeurs de requêter instantanément le "data lineage" (la lignée de la donnée) pour savoir exactement quel job Talend ou quel module du **Socle Générique** (notre technologie interne en Java Spring Boot) manipule quelle table et quel champ.

---

## Environnement technique

Le projet combine différents environnements applicatifs et du Big Data de l'entreprise :

* **Sources** : Jobs Talend (XML/Java), Socle générique Java Spring Boot (fichiers de configuration YAML).
* **Stockage & Ingestion** : Serveurs NAS internes, Hadoop HDFS, scripts d'ingestion Spark.
* **Restitution** : Tables Hive requêtables par les équipes.

---

## Travail réalisé concernant la pipeline d'ingestion

Pour donner vie à ce projet, j'ai articulé mon travail autour de trois étapes clés, de la collecte brute jusqu'à la mise à disposition des données.

### 1. Initialisation et automatisation de l'infrastructure

Ma première tâche a été de mettre en place l'environnement d'accueil des données. J'ai configuré les répertoires d'échanges sur le NAS interne et l'arborescence cible sur le système de fichiers distribués **HDFS**. J'ai également modélisé et créé les structures de tables Hive prêtes à recevoir les métadonnées de manière optimisée.

### 2. Ingestion et parsing des flux de métadonnées

Les métadonnées extraites des applications sont déposées sous forme de fichiers JSON bruts.

J'ai réalisé la configuration du pipeline qui déplace ces fichiers sur le NAS puis vers le stockage HDFS. Ensuite, à l'aide de traitements **Spark**, ces JSON sont parsés et injectés dans nos tables Hive. J'ai dû veiller à la bonne granularité de l'ingestion, segmentée en trois niveaux pour Talend et 4 pour la partie Socle Generique :

1. Les **Job** (niveau le plus haut),
2. Les **Composant / Stage** (les étapes internes du traitement),
3. Les **Schéma** (les colonnes et types de données manipulés).
2,5. (uniquement pour SocleGen) Les **params** (des variables liées au stages),

### 3. Autres étapes

Ces étapes importantes ne sont pas les seules a devoir implémenter, il a aussi fallu gérer:

L'*Undeploy*, pour pouvoir supprimer les bases et stockages de données,
Le Packing, pour gérer l'historisation des données


### 3. Structuration et requêtage du Lineage

Une fois les données dans Hive, j'ai travaillé sur l'organisation des jointures et des vues SQL. L'enjeu était de transformer des milliers de lignes de logs asynchrones en un arbre de dépendances logique.

Grâce à cette structuration, un développeur peut aujourd'hui lancer une simple requête pour obtenir la traçabilité complète d'un flux, de sa table d'origine jusqu'à son point de sortie.

---

## Difficultés rencontrées & Solutions apportées

* **Le choc des cultures techniques** : La plus grande complexité résidait dans la diversité des formats. Talend génère des métadonnées très verbeuses basées sur du XML/Java, tandis que le Socle Générique s'appuie sur du YAML sous Spring Boot. J'ai dû analyser ces deux structures pour concevoir un mapping d'ingestion unique capable de traduire proprement ces deux mondes dans le même modèle Hive.
* **La volumétrie et les contraintes de l'architecture** : Manipuler des environnements distribués (Hadoop/Spark) implique des règles strictes sur la gestion des droits, la cohérence des transactions et le volume des données. Chaque traitement Spark d'ingestion a dû être testé rigoureusement pour éviter les corruptions de données lors des écritures concurrentes dans Hive.

---

## Compétences mobilisées

* **Compétence 1 — Développement** : Configuration de pipelines d'ingestion de données et manipulation de l'architecture Java Spring Boot / YAML du socle.
* **Compétence 2 — Optimisation** : Réduction drastique du temps d'analyse des équipes techniques en remplaçant des recherches manuelles par un système de requêtage centralisé.
* **Compétence 3 — Administration systèmes & Infrastructures** : Manipulation opérationnelle de l'écosystème Big Data (Hadoop, HDFS, Hive) et gestion des répertoires NAS.
* **Compétence 4 — Données** : Ingestion, parsing et modélisation de fichiers JSON complexes vers des structures relationnelles Hive de qualité.
* **Compétence 5 — Conduite de projet** : Compréhension et alignement avec les contraintes d'architecture d'un grand groupe d'assurance (Covéa).
* **Compétence 6 — Collaboration** : Échanges constants avec les architectes et les développeurs du SI pour concevoir un outil au plus près de leurs besoins quotidiens.