# Compétence 1 : Réaliser un développement d’application

## Description

Développer une solution informatique consiste à transformer un besoin exprimé en une application ou un système fonctionnel, maintenable et adapté à un usage réel.

Cette compétence implique :
- l’élaboration et l’implémentation des spécifications techniques,
- le respect des exigences fonctionnelles et non fonctionnelles,
- la production de code structuré, lisible, réutilisable et documenté,
- l’intégration dans un environnement de production si nécessaire.

---

## Évolution de la compétence

### Première Année

Lors de ma première année de BUT, cette compétence était principalement mobilisée dans un cadre académique :

* développement d’applications relativement isolées,
* projets centrés sur des fonctionnalités précises,
* intégration limitée dans des systèmes existants.

Le travail portait surtout sur la capacité à produire un code fonctionnel répondant à un besoin défini.

---

### Cette année

En deuxième et troisième année et evidement en alternance, cette compétence a évolué vers des environnements de production réelle ou proche de ceux-ci :

* intégration dans des systèmes déjà existants,
* prise en compte de contraintes d’architecture et d’exploitation,
* développement dans des environnements plus complexes (batch, data pipelines, socles techniques),
* montée en abstraction sur la conception de systèmes complets plutôt que de simples applications.

---

## Mise en pratique dans les projets

### Stage / alternance chez Covéa

Dans mes missions au sein de Covéa, j’ai été amené à intervenir sur des traitements de données dans un environnement industriel existant :

* correction et évolution de jobs Talend dans des pipelines de données,
* participation à des traitements dans le socle générique Spring Boot,
* intégration de traitements dans un système déjà structuré,
* respect de contraintes techniques fortes (HDFS, Hive, Spark, conventions internes).

Ces missions m’ont confronté à un développement plus contraint, où l’objectif n’est pas uniquement de coder une fonctionnalité, mais de l’intégrer dans un système global cohérent.

---

### Projet tutoré — Orchestrateur de batch (Aévoc)

Dans ce projet, j’ai reproduit une version simplifiée d’un outil inspiré du socle générique utilisé en entreprise.

J’ai notamment :

* conçu une architecture modulaire basée sur des stages,
* implémenté un moteur d’exécution configurable via YAML,
* développé des composants indépendants (HTTP, SQL, logging),
* géré un contexte d’exécution partagé entre les étapes.

Ce projet m’a permis de passer d’un développement centré sur des fonctionnalités à une logique de **framework applicatif**, où le comportement est piloté par la configuration plutôt que codé en dur.

---

### Projets scolaires

#### Projet multi-agent

Dans le projet multi-agent, la compétence s’est illustrée dans :

* la structuration d’un système composé de plusieurs agents spécialisés,
* l’intégration d’outils d’analyse de données (CSV, agrégations),
* la mise en place d’un pipeline d’exécution orchestré,
* la production de rapports automatisés.

#### Projet NLP humoristique

Dans le projet NLP :

* entraînement de modèles de classification (BERT / DistilBERT),
* création de scripts de traitement de données,
* structuration d’un pipeline complet (analyse → entraînement → test → génération),
* gestion de plusieurs scripts spécialisés dans un même projet.

Ce projet a renforcé la capacité à structurer du code autour d’un pipeline de traitement de données plutôt qu’autour d’une simple application.

---

## Apports concrets

À travers ces différents projets, cette compétence a évolué sur plusieurs aspects concrets :

* passage de projets isolés à des systèmes complets (batch, IA, pipelines),
* développement dans des environnements proches de la production (Covéa, socle générique),
* meilleure compréhension des architectures modulaires et découplées,
* capacité à structurer des projets complexes en composants indépendants,
* prise en compte de contraintes réelles (données, infrastructure, intégration).

---

## Bilan

Cette compétence a fortement évolué entre la première et la troisième année.

Je suis passé :

* de développements principalement académiques et isolés,
* à des systèmes plus complets intégrés dans des environnements techniques réels.

Les expériences en alternance chez Covéa, combinées aux projets scolaires (NLP, multi-agent, orchestrateur batch), m’ont permis de mieux comprendre ce que signifie développer une application dans un contexte industriel : ce n’est pas uniquement produire du code fonctionnel, mais concevoir des systèmes maintenables, intégrables et cohérents dans un ensemble plus large.
