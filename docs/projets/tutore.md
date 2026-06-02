# Projet tutoré — socle générique Covéa (BUT 3)

## Contexte et objectifs

Dans le cadre de mon projet tutoré de troisième année, j’ai réalisé un projet individuel directement lié à mon alternance chez Covéa.

L’objectif principal était de mieux comprendre le fonctionnement du **socle générique** utilisé dans l’entreprise en recréant une version simplifiée d’un orchestrateur de traitements batch.

Le projet repose sur un cas d’usage fictif mais représentatif des problématiques rencontrées dans une DSI de grande entreprise :
récupérer des données depuis une API externe, les transformer puis les injecter dans une base de données de manière configurable et industrialisée.

---

## Contexte métier

Dans une grande DSI comme celle de Covéa, les échanges de données entre applications sont nombreux :

* récupération de données externes,
* traitements intermédiaires,
* intégration dans des bases internes,
* automatisation des flux.

L’un des enjeux majeurs est d’éviter que chaque développeur implémente sa propre solution spécifique pour gérer ces flux.

Le socle générique utilisé en interne permet justement :

* d’industrialiser les traitements,
* de standardiser les pipelines,
* de centraliser les comportements techniques,
* de limiter la duplication de code.

Le projet tutoré avait donc pour objectif de reproduire ces principes à plus petite échelle afin d’en comprendre le fonctionnement interne.

---

## Cas d’usage : scénario « Aévoc »

Le projet s’appuie sur un scénario fictif nommé **Aévoc**.

Le principe :

* une API externe expose des profils clients au format JSON,
* le système doit récupérer régulièrement ces données,
* les transformer,
* puis les injecter dans une base relationnelle.

Une contrainte importante était de rendre la solution :

* légère,
* facilement configurable,
* exploitable sans modification du code source.

---

## Architecture de la solution

Le projet a été développé avec :

* Java,
* Spring Boot,
* YAML,
* Jackson,
* JDBC,
* base de données H2.

L’architecture repose sur une logique **data-driven** :
le comportement du moteur est entièrement piloté par un fichier YAML externe.

Le batch n’est donc pas codé spécifiquement pour un scénario donné :
ce sont les fichiers de configuration qui décrivent les étapes à exécuter.

---

## Fonctionnement général

### Configuration YAML

Un fichier YAML décrit :

* les différentes étapes du traitement,
* les paramètres nécessaires,
* les requêtes SQL,
* les URLs d’API,
* l’ordre d’exécution.

Cette approche permet de modifier le comportement du batch sans modifier le code Java.

---

### Chargement des traitements

Le projet utilise Jackson afin de :

* lire le YAML,
* transformer automatiquement les données en objets Java,
* construire dynamiquement le pipeline d’exécution.

---

### Orchestrateur de batch

Le moteur principal parcourt ensuite les différentes étapes définies dans le YAML et exécute les traitements associés.

Chaque étape est représentée par un composant indépendant appelé *Stage*.

---

## Architecture technique interne

### StageFactory

Le système repose sur un pattern de type **Factory** permettant :

* d’identifier dynamiquement le type d’étape demandé,
* d’instancier automatiquement le bon composant.

Cela permet de rendre le moteur facilement extensible.

---

### ExecutionContext

Un contexte d’exécution partagé permet :

* de transmettre les données entre les différentes étapes,
* de conserver les résultats intermédiaires,
* de chaîner les traitements.

Chaque stage peut lire ou enrichir ce contexte.

---

### Stages développés

#### LogStage

Permet la journalisation des traitements :

* démarrage,
* suivi,
* fin d’exécution.

---

#### HttpStage

Responsable de :

* l’appel à une API externe,
* la récupération du JSON,
* le stockage des données dans le contexte d’exécution.

---

#### SqlStage

Le composant principal du projet.

Il permet :

* de transformer le JSON en objets Java,
* d’exécuter des requêtes SQL,
* d’insérer dynamiquement les données dans la base,
* de gérer des requêtes de lecture ou de création de tables.

L’utilisation de `JdbcTemplate` permet également de sécuriser les requêtes SQL.

---

## Contributions personnelles

Ce projet ayant été réalisé seul, j’ai pris en charge :

* la conception globale de l’architecture,
* le développement des composants,
* la réflexion autour du découplage,
* la gestion des fichiers YAML,
* l’orchestration des traitements,
* les tests et validations.

Le principal objectif était avant tout pédagogique :
comprendre concrètement comment fonctionne un socle générique industriel.

---

## Difficultés rencontrées

Le projet m’a confronté à plusieurs problématiques importantes :

* conception d’une architecture modulaire,
* gestion du découplage entre composants,
* compréhension des patterns utilisés dans les frameworks industriels,
* transmission des données entre traitements,
* généricité des traitements.

J’ai également dû mieux comprendre :

* le fonctionnement de Spring Boot,
* l’injection de dépendances,
* les mécanismes de sérialisation YAML / JSON,
* l’orchestration de pipelines techniques.

---

## Compétences mobilisées

Ce projet mobilise plusieurs compétences du BUT Informatique :

**Compétence 1 — Développement**

* développement Java Spring Boot,
* architecture logicielle modulaire,
* implémentation de composants techniques réutilisables.

**Compétence 2 — Optimisation**

* réflexion sur la généricité du moteur,
* découplage des composants,
* extensibilité des traitements.

**Compétence 3 — Administration systèmes et infrastructures**

* compréhension des architectures batch,
* gestion des flux techniques,
* structuration de pipelines de données.

**Compétence 4 — Données**

* manipulation de JSON et SQL,
* transformation et intégration de données,
* structuration des échanges de données.

**Compétence 5 — Conduite de projet**

* gestion complète d’un projet individuel,
* définition de l’architecture,
* organisation des différentes phases de développement.

**Compétence 6 — Collaboration**

* même si le projet était individuel, il s’inscrit dans un contexte professionnel réel,
* échanges avec les équipes de l’entreprise pour comprendre les besoins et les mécanismes du socle générique.

---

## Conclusion

Ce projet tutoré m’a permis de mieux comprendre les principes techniques utilisés dans les architectures industrielles de traitement de données.

En recréant une version simplifiée d’un orchestrateur de batch similaire au socle générique de Covéa, j’ai pu approfondir :

* les architectures découplées,
* les moteurs pilotés par configuration,
* les patterns de conception,
* les pipelines de traitement de données.

Cette expérience a également renforcé ma compréhension des problématiques d’industrialisation et de standardisation dans les grands systèmes d’information.

---
