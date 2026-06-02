# Projet — Humoristique NLP (BUT 3)

## Contexte et objectifs

Dans le cadre d’un projet en traitement automatique du langage (NLP), nous avons travaillé sur la détection et la génération de contenu humoristique à l’aide de modèles basés sur des architectures Transformer.

L’objectif principal était double :
- construire un système capable de **classifier un texte comme humoristique ou non humoristique**,
- expérimenter la **génération automatique de blagues** à partir d’un corpus existant.

Ce projet s’inscrit dans une démarche exploratoire autour des limites des modèles de langage face à une notion aussi subjective que l’humour.

---

## Organisation du projet

Le projet est structuré autour de plusieurs scripts Python spécialisés couvrant l’ensemble du pipeline :

- préparation et échantillonnage des données (Wikipedia, blagues Reddit),
- analyse exploratoire et visualisation,
- entraînement de modèles de classification,
- évaluation et tests sur différents jeux de données,
- génération de texte avec GPT-2,
- visualisation des mécanismes internes des modèles (attention BERT).

L’ensemble permet de couvrir un cycle complet de traitement NLP, de la donnée brute jusqu’à la génération.

---

## Jeux de données et préparation

Deux sources principales ont été utilisées :
- un corpus de **blagues courtes (~231k phrases)**,
- un extrait de **phrases issues de Wikipedia (~230k phrases)**.

Ces deux ensembles ont été fusionnés et nettoyés afin de constituer un dataset équilibré de plus de **460 000 exemples**.

Une phase complémentaire a été ajoutée avec le dataset **DailyDialog**, afin d’introduire des phrases conversationnelles non humoristiques et réduire un biais structurel lié aux données initiales.

---

## Analyse exploratoire des données

Une analyse statistique a été réalisée afin de mieux comprendre la structure des données :
- longueur moyenne des phrases (caractères et mots),
- distribution entre les classes,
- visualisation des mots les plus fréquents via wordclouds.

Les résultats montrent que :
- les blagues contiennent davantage de tournures familières et personnelles,
- les phrases Wikipedia sont plus descriptives et factuelles,
- certaines différences de structure peuvent influencer l’apprentissage du modèle.

---

## Modélisation et classification

### Modèles utilisés

Deux modèles basés sur Transformer ont été expérimentés :
- DistilBERT (modèle léger),
- BERT large (modèle plus puissant).

### Résultats

Les performances obtenues sur un jeu de test externe (Reddit / BBC) sont les suivantes :

- Accuracy globale : ~0.81 à 0.82
- F1-score équilibré entre les classes
- Bonne capacité de détection des blagues, mais tendance à des biais structurels selon les données d’entraînement

### Analyse des résultats

Les premières versions du modèle présentaient un biais important :
- sur-représentation de la forme des phrases (courtes / informelles),
- confusion entre langage familier et humour,
- tendance à classifier certaines phrases neutres comme humoristiques.

L’ajout de données conversationnelles a permis de réduire ce biais et d’améliorer la généralisation du modèle, au prix d’une baisse légère des scores bruts.

---

## Analyse du comportement du modèle

Une partie du travail a consisté à comprendre comment le modèle prend ses décisions :
- utilisation de visualisations d’attention (BERTViz),
- observation de motifs linguistiques influents.

Une observation notable est l’importance du **point d’interrogation**, très présent dans les blagues du dataset initial, ce qui a pu influencer l’apprentissage du modèle.

Des wordclouds ont également mis en évidence :
- côté humour : langage familier, pronoms, structures directes,
- côté non-humour : vocabulaire encyclopédique et descriptif.

---

## Génération de texte (GPT-2)

Un second volet du projet a consisté à expérimenter la génération de blagues via un modèle GPT-2 fine-tuné.

### Approche
- fine-tuning sur le corpus de blagues (Reddit + dataset initial),
- génération conditionnée par des prompts utilisateur.

### Résultats observés
Le modèle a appris le style global du corpus mais présente plusieurs limites :
- incohérences syntaxiques,
- mélange de langues,
- absence de respect des consignes,
- répétitions et bruit issu des données d’entraînement.

### Analyse

Ces résultats montrent que :
- GPT-2 reproduit le style mais ne comprend pas l’instruction,
- la qualité du dataset a un impact direct sur la génération,
- une approche instructionnelle et des modèles plus récents seraient nécessaires pour améliorer la cohérence.

---

## Compétences mobilisées

Ce projet mobilise plusieurs compétences du BUT Informatique :

**Compétence 1 — Développement**
- implémentation de pipelines NLP complets,
- manipulation de modèles Transformer (BERT, GPT-2),
- structuration de scripts de traitement et d’entraînement.

**Compétence 2 — Optimisation**
- analyse des performances des modèles,
- réduction de biais dans les datasets,
- amélioration de la généralisation.

**Compétence 4 — Données**
- nettoyage et fusion de datasets volumineux,
- analyse statistique et exploration des données textuelles,
- visualisation (wordclouds, distributions).

**Compétence 5 — Conduite de projet**
- organisation des étapes de traitement NLP,
- expérimentation progressive (classification puis génération),
- analyse des résultats et itérations sur les modèles.

**Compétence 6 — Collaboration**
- travail sur un projet structuré avec partage de scripts,
- documentation des résultats et reproductibilité.

---

## Conclusion

Ce projet met en évidence les possibilités mais aussi les limites des modèles NLP face à une notion complexe comme l’humour.

Les modèles de classification obtiennent des performances correctes (~82 %), proches de résultats observés dans la littérature, mais restent sensibles à la structure des données.

La génération de texte, quant à elle, montre que la simple reproduction statistique ne suffit pas à produire un humour cohérent sans structure de données adaptée et sans modèle orienté instruction.

Ce projet m’a permis de mieux comprendre :
- les enjeux des biais dans les datasets NLP,
- le fonctionnement interne des modèles Transformer,
- les différences entre classification et génération de texte.

---
