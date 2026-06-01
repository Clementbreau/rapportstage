# Projet — MetDataDH : centralisation et exploitation des métadonnées techniques

## Contexte et problématique

Dans le cadre de mon alternance chez Covéa, j’ai participé à un projet visant à améliorer les analyses d’impact techniques et fonctionnelles autour des traitements de données.

Lors d’évolutions applicatives (modification de zones, changements d’architecture, évolution de patterns techniques…), les analyses d’impact nécessitaient souvent :

* la consultation de documentation Confluence,
* l’ouverture manuelle de nombreux traitements,
* des recherches à bas niveau (tables, champs, composants).

Cette approche rendait les analyses :

* longues,
* peu fiables,
* difficiles à maintenir dans le temps.

Le projet **MetDataDH** a donc été lancé afin de centraliser les métadonnées techniques issues :

* des jobs Talend,
* du socle générique Spring Boot utilisé en interne.

L’objectif est de permettre aux développeurs et aux équipes techniques de réaliser des analyses d’impact plus fiables et plus rapides.

---

## Objectif du projet

Le projet consiste à :

* extraire les métadonnées des traitements,
* structurer ces informations dans des tables dédiées,
* permettre l’exploration des dépendances techniques,
* faciliter l’identification des impacts lors des évolutions applicatives.

Les métadonnées collectées concernent notamment :

* les jobs Talend,
* les composants utilisés,
* les schémas manipulés,
* les tables et champs exploités,
* les flux de données,
* les dépendances entre traitements.

---

## Environnement technique

Le projet s’appuie sur plusieurs technologies utilisées au sein du SI :

* Talend
* Java Spring Boot
* Hadoop / HDFS
* Hive
* YAML
* JSON
* Spark
* NAS de stockage interne

Le socle générique permet d’orchestrer différentes étapes :

* ingestion,
* staging,
* création de tables,
* archivage,
* historisation,
* suppression et nettoyage.

L’architecture repose sur des traitements configurés principalement via des fichiers YAML décrivant :

* les variables d’environnement,
* les stages d’exécution,
* les tables Hive,
* les schémas associés,
* les répertoires HDFS.

---

## Fonctionnement général

Le système repose sur plusieurs étapes principales :

### Initialisation de l’environnement

Création :

* des répertoires NAS,
* des répertoires HDFS,
* des tables Hive nécessaires au stockage des métadonnées.

---

### Ingestion des données

Les fichiers JSON contenant les métadonnées sont :

* déposés sur le NAS,
* transférés vers HDFS,
* ingérés dans les tables Hive via des traitements Spark.

Les données concernent notamment :

* les jobs Talend,
* les composants,
* les schémas techniques.

---

### Structuration des métadonnées

Les informations sont ensuite organisées dans plusieurs tables permettant :

* l’analyse des dépendances,
* la recherche de composants,
* l’identification des impacts techniques,
* la traçabilité des flux.

---

## Contributions personnelles

### Travail sur le socle générique

J’interviens principalement sur la partie liée au socle générique Spring Boot.

Cela comprend :

* la configuration des traitements YAML,
* l’organisation des stages d’exécution,
* la structuration des flux d’ingestion,
* la gestion des tables Hive et des répertoires HDFS.

J’ai également travaillé sur :

* la compréhension des patterns internes,
* l’intégration des nouvelles métadonnées,
* la cohérence des traitements existants.

---

### Analyse des métadonnées

Une partie importante du travail consiste à comprendre et modéliser les métadonnées techniques :

* relations entre jobs et composants,
* dépendances entre schémas,
* exploitation des informations de lineage.

Ce travail nécessite de comprendre à la fois :

* les traitements Talend,
* les structures de données manipulées,
* les conventions techniques internes.

---

### Fiabilisation des analyses d’impact

Le projet vise directement à améliorer la qualité des analyses d’impact techniques.

L’objectif est de permettre :

* une recherche plus rapide des dépendances,
* une meilleure visibilité sur les traitements,
* une réduction des risques lors des évolutions applicatives.

---

## Difficultés rencontrées

Le projet présente plusieurs complexités :

* compréhension d’un SI volumineux,
* diversité des formats techniques,
* structuration cohérente des métadonnées,
* gestion des dépendances entre traitements,
* maintien de la cohérence des informations collectées.

Il a également fallu prendre en compte :

* les contraintes liées aux environnements Big Data,
* les conventions internes du socle générique,
* la volumétrie importante des traitements analysés.

---

## Compétences mobilisées

Ce projet mobilise plusieurs compétences du BUT Informatique :

**Compétence 1 — Développement**

* configuration et adaptation de traitements techniques,
* structuration de pipelines d’ingestion,
* utilisation de Spring Boot et YAML.

**Compétence 2 — Optimisation**

* amélioration de la fiabilité des analyses d’impact,
* structuration des traitements pour faciliter l’exploitation des données,
* organisation des flux techniques.

**Compétence 3 — Administration systèmes et infrastructures**

* manipulation d’environnements Hadoop / HDFS,
* gestion de tables Hive,
* compréhension d’architectures distribuées.

**Compétence 4 — Données**

* ingestion et structuration de métadonnées,
* exploitation de schémas techniques,
* organisation et qualité des données collectées.

**Compétence 5 — Conduite de projet**

* compréhension des besoins métiers et techniques,
* travail sur un projet transverse du SI,
* adaptation à des contraintes d’architecture existantes.

**Compétence 6 — Collaboration**

* échanges avec les équipes techniques,
* travail sur un socle mutualisé,
* compréhension des besoins des développeurs utilisateurs de l’outil.

---

## Conclusion

Ce projet m’a permis de découvrir des problématiques concrètes liées :

* à la gouvernance des données,
* au data lineage,
* à l’analyse d’impact technique dans un SI complexe.

J’ai particulièrement développé :

* ma compréhension des architectures Big Data,
* ma capacité à lire et structurer des traitements techniques complexes,
* ma maîtrise des environnements de traitement de données distribués.

Le projet montre également l’importance des métadonnées dans les systèmes modernes, notamment pour garantir la maintenabilité et la compréhension des traitements dans des environnements applicatifs de grande taille.

---
