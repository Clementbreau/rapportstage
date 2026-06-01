# Compétence 4 : Gérer des données de l'information

## Description

Gérer des données consiste à assurer leur structuration, leur qualité, leur cohérence et leur exploitation dans différents systèmes.

Cela inclut :

* la conception et l’utilisation de bases de données relationnelles,
* la transformation et l’exploitation de données issues de sources variées,
* la structuration de jeux de données pour l’analyse ou l’entraînement de modèles,
* la prise en compte des contraintes de qualité et de conformité (dont RGPD),
* la manipulation de données hétérogènes (SQL, fichiers, API, textes).

---

## Évolution de la compétence

### Année précédente

L’approche était surtout centrée sur :

* des bases de données simples,
* des requêtes SQL classiques,
* des données déjà structurées et peu volumineuses,
* une logique d’exploitation limitée à des cas académiques.

---

### Cette année

L’évolution s’est faite vers :

* des données plus volumineuses et hétérogènes,
* des pipelines de traitement plus complets,
* des problématiques de nettoyage, structuration et analyse,
* des jeux de données utilisés dans des contextes IA et industriels,
* des interactions entre plusieurs sources de données.

---

## Mise en pratique dans les projets

### Stage chez Covéa

Dans mes missions au sein de Covéa :

* analyse d’écarts entre différentes bases de données (sources / Datahub),
* requêtes SQL pour détecter des doublons et incohérences,
* participation à des traitements liés à la purge et à la conformité RGPD,
* exploitation de données dans un contexte industriel réel.

---

### Projet tutoré — Aévoc / socle générique

Ce projet m’a permis de travailler sur :

* ingestion de données JSON issues d’une API externe,
* structuration en tables exploitables,
* transformation et historisation des données,
* mise en place d’un pipeline de traitement de données via un orchestrateur batch.

---

### Projet multi-agent

Ce projet a mobilisé la donnée comme élément central du système :

* analyse de données de sessions et transactions,
* génération de rapports automatisés à partir de données brutes,
* exploitation de plusieurs sources de données via agents spécialisés,
* synthèse de résultats issus de traitements distincts.

---

### Projet NLP — humour

Projet particulièrement important pour cette compétence :

* constitution de datasets (blagues + Wikipedia + dialogues),
* fusion et nettoyage de plus de 460k exemples,
* équilibrage des classes (humour / non-humour),
* analyse statistique (longueur des phrases, distribution),
* visualisation (wordclouds, fréquences de mots),
* préparation des données pour entraînement DistilBERT et BERT,
* exploitation de datasets externes (Reddit, BBC News) pour évaluation.

---

### Projet génération de texte (GPT-2)

Dans la partie génération :

* utilisation d’un dataset de blagues issu de scraping,
* préparation des données pour fine-tuning,
* analyse des limites liées à la qualité des données (bruit, incohérences),
* observation directe de l’impact du dataset sur les sorties du modèle.

---

### SAE capteurs

* exploitation de données environnementales (température, CO₂, humidité),
* structuration et affichage de mesures issues de capteurs,
* visualisation de données dans une interface web.

---

### LogBase

* parsing de logs SQL,
* transformation de données brutes en données exploitables,
* structuration pour analyse et visualisation.

---

## Apports concrets

Cette compétence m’a permis de :

* travailler sur des données beaucoup plus variées qu’en première année,
* comprendre l’impact direct de la qualité des datasets sur les résultats (notamment IA),
* structurer des pipelines complets de traitement de données,
* manipuler des données textuelles, relationnelles et événementielles,
* analyser et préparer des datasets à grande échelle pour apprentissage automatique.

---

## Bilan

J’ai évolué vers une approche plus complète de la gestion des données, qui ne se limite plus à l’écriture de requêtes SQL, mais inclut la structuration, la préparation et l’analyse de données complexes.

Les projets NLP et multi-agent ont été particulièrement structurants, car ils m’ont confronté directement à la qualité des données et à leur impact sur les résultats des modèles.

L’alternance chez Covéa a complété cette vision en apportant une dimension industrielle et réglementaire (RGPD, cohérence inter-systèmes).
