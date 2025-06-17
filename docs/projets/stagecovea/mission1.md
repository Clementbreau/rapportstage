
# Mission 1 — Correction des décalages de dates dans les traitements Talend

## Contexte

Dans le cadre de la migration de l’écosystème Big Data de Covéa, la plateforme technique est passée de **CDH** (Cloudera Distribution Hadoop) à **CDP** (Cloudera Data Platform).  
Cette migration impliquait un changement de certains composants techniques, notamment le passage de **Talend 7 à Talend 8**, et de **l’utilisation d’Impala** à **Kudu** pour le stockage de données.

Un effet de bord inattendu est alors apparu : les **données de type date/heure** qui étaient auparavant stockées et traitées en **CET (heure locale française)** étaient désormais interprétées en **UTC (temps universel coordonné)**, en raison du comportement natif de Kudu qui stocke les dates en UTC par défaut.  
Cela entraînait des **décalages horaires d’une ou deux heures** dans les rapports métiers, les historiques de traitements, et les journaux d’événements.

Ce changement, bien que discret, risquait de **fausser les calculs temporels** : écarts de dates, échéances, performances, etc.

## Objectif

L’objectif de la mission était de garantir **l’isofonctionnalité** entre les traitements avant et après migration.  
Plus précisément, il s’agissait d’identifier les jobs Talend concernés par ce changement implicite de fuseau horaire et de les corriger de manière systématique, afin de **préserver la cohérence des données temporelles** utilisées dans les traitements métiers.

## Travail réalisé

### 1. Identification des cas à corriger

La première étape consistait à **comparer les données issues des environnements CDH et CDP**, via des requêtes SQL sur l’interface Hue.  
Les divergences de dates étaient visibles dès lors qu’un même enregistrement affichait une heure différente d’un environnement à l’autre.

![excel](/img/excel.png)

Un tableau Excel recensait l’ensemble des jobs potentiellement impactés. Pour chaque entrée, j’indiquais les traitements vérifiés, ceux corrigés, et les demandes de ticket Jira si nécessaire.

### 2. Analyse des jobs Talend

Une fois un job identifié comme problématique, je l’ouvrais dans Talend Studio pour analyser sa logique.  
L’enjeu principal était de repérer les composants (souvent des `tMap`) utilisant des champs de date **sans transformation explicite de fuseau horaire**.

### 3. Implémentation de la correction

Lorsque la correction était nécessaire, j’appliquais une formule conditionnelle dans le `tMap` pour **forcer le traitement en CET**, tout en assurant la robustesse du code.

![talend](/img/talend.png)
![date](/img/date.png)

Voici un exemple de formule utilisée :

```java
source.variable != null ?
  BigDataParserUtils.parseTo_Date(
    DateTimeZone.applyTimeZoneDS("yyyy-MM-dd HH:mm:ss.SSS", source.variable, "CET"),
    "yyyy-MM-dd HH:mm:ss.SSS"
  )
: null
````

Cette expression :

* Vérifie d’abord que la valeur est non nulle (évite les erreurs d’exécution),
* Applique une transformation de fuseau horaire vers CET,
* Parse correctement la date avec le format attendu.

### 4. Tests et déploiement

Les corrections étaient testées dans l’environnement `bd0` (développement), avec vérification manuelle des résultats.
Les intégrateurs poursuivaient ensuite la validation dans lenvironnements de test `bt2`, avant passage en préproduction et production.

Les mises en production étaient planifiées et nous étions chargés de valider les comportements post mises en production.

## Résultat

Cette démarche a permis de **corriger le décalage de dates** sur plusieurs composants.
La solution a ensuite été appliquée sur d’autres jobs par dautres personnes.

## Pourquoi cette solution fonctionne

* Le problème provenait du stockage UTC implicite dans CDP/Kudu.
* Le traitement Talend n’avait pas de gestion explicite du fuseau horaire, donc les dates s’affichaient différemment en sortie.
* La solution implémente une **conversion explicite et systématique** vers le fuseau attendu (CET), garantissant la compatibilité avec les anciens traitements et les règles métiers.
* En plaçant la logique directement dans le `tMap` à la fin, elle est appliquée au bon moment dans la chaîne de traitement.

## Schéma simplifié

```
[ Identification des composants ayant des anomalies dans le fichier Excel ]
               ↓
[ Tests dans Hue (CDH/CDP) ]
               ↓
[ Détection des différences temporelles ]
               ↓
[ Analyse du job Talend concerné ]
               ↓
[ Correction dans le tMap si nécessaire (conversion UTC → CET) ]
               ↓
[ Tests sur bd0 ]
               ↓
[ Livraison ]
```

Ce flux a été répété pour chaque traitement identifié comme sensible aux variations de fuseau horaire.
Les anomalies corrigés ont été notés sur le fichier excel et en commentaires sur les tickets jira.


```

## Compétences mobilisées

Ce projet a mobilisé plusieurs compétences essentielles du BUT Informatique :
* **Compétence 1** : partir d'exigences concernant une fonctionnalité et livrer une solutiton de qualité.
* **Compétence 3** : gestion des traitements distribués et des environnements Big Data (CDH, CDP, Kudu).
* **Compétence 4** : manipulation de données temporelles, gestion des formats et des fuseaux horaires.
* **Compétence 5** : prise en charge d’un lot de corrections en coordination avec les équipes projet.
* **Compétence 6** : travail en équipe (), échanges avec les intégrateurs, suivi des corrections via Jira.

---
