
# Projet tutoré — LogBase : outil d’analyse de logs SQL

## Contexte et objectifs

Dans le cadre du projet tutoré de deuxième année, notre équipe a été missionnée pour développer une solution logicielle destinée à un client professionnel réel nommé Gaétan. Ce dernier disposait de fichiers de logs volumineux contenant des requêtes SQL bloquées ou perdues dans un système informatique.

L’objectif du projet était de concevoir une application permettant à l’utilisateur de :

- Charger facilement des fichiers de logs au format texte,
- Extraire automatiquement les informations pertinentes contenues dans ces fichiers (requêtes, erreurs, dates...),
- Afficher les résultats sous forme de tableau et de graphiques,
- Filtrer les données par critère (par date, type d’erreur, etc.),
- Exporter les résultats de l’analyse.

L’enjeu était double : fournir un outil techniquement fiable, mais aussi accessible à un utilisateur non technique.

## Approche méthodologique

### Phase initiale : compréhension du besoin

Le projet a démarré par une série d’échanges avec le client pour cerner précisément ses attentes. Nous avons mis en place les éléments suivants :

- Rédaction d’une **vision produit** partagée,
- Création de **personas** représentant les utilisateurs cibles,
- Construction d’une **user story map** pour prioriser les fonctionnalités,
- Établissement d’un **backlog** organisé en itérations.

Le projet s’est structuré autour de 4 itérations principales, ponctuées de démonstrations régulières au client, permettant de valider les livrables et d’ajuster en fonction des retours.

La collaboration se faisait via des réunions régulières, un partage du code via Git, et une synchronisation sur les objectifs de chaque itération.

## Architecture technique

### Choix technologique : Python + Kivy

Le client souhaitait une **application locale et simple à utiliser**, sans déploiement web.  
Nous avons donc opté pour **Python**, avec le framework **Kivy**, qui permet de créer des interfaces graphiques interactives, multiplateformes, et relativement légères.

### Structure du projet

Le projet est composé de plusieurs modules distincts :

- **Module parser** : lecture et interprétation des fichiers de logs pour extraire les éléments clés (requêtes SQL, statuts, timestamps…).
- **Module UI** : création de composants graphiques avec Kivy (tableaux, boutons, filtres).
- **Module affichage** : gestion des vues, navigation, affichage des statistiques sous forme de graphique.

### Fonctionnalités développées

- Import de fichiers via glisser-déposer dans l’interface,
- Traitement automatique du contenu avec détection d’anomalies,
- Filtres dynamiques (par date, type d’erreur, type de requête),
- Statistiques globales sur les erreurs,
- Affichage de la requête complète lors de la sélection,
- Export des résultats filtrés.

## Extrait de code

Voici un exemple simplifié du parsing réalisé sur les fichiers de logs :

```python
def parse(filepath):
  patternFilePath = re.compile(r'[^\\|/]+(?=\.[^.]+$)')
  match = patternFilePath.search(filepath)
  if match:
    file_name = match.group(0)
    if '/' in filepath:
      cache_file_path = f'__logcache__/{file_name}.pkl'
    elif '\\' in filepath:
      cache_file_path = f'__logcache__\\{file_name}.pkl'
    if not os.path.exists(cache_file_path):
        if not os.path.exists('__logcache__'):
          os.makedirs('__logcache__')
        # Write data in the fiel using pickle
        with open(cache_file_path, 'wb') as file:
            pickle.dump(GetContentLog(filepath), file)
````

L’extraction des requêtes nécessitait de prendre en compte des cas particuliers comme les retours à la ligne, les encodages, et la présence de blocs SQL imbriqués.

## Design et interface

L’interface Kivy a été pensée pour être intuitive et accessible :

* Une zone de dépôt de fichier (drag & drop),
* Une section tableau filtrable,
* Une zone d’aperçu détaillé de chaque requête,
* Un graphique statistique mis à jour dynamiquement.

Les choix graphiques ont été discutés avec le client pour s'assurer de leur utilité et lisibilité.

## Gestion de projet

Nous avons suivi une organisation inspirée de la méthode agile :

* Planification des itérations,
* Rétrospectives à chaque fin de sprint,
* Réunions client intermédiaires,
* Partage de l’état d’avancement.

Un tableau de suivi des tâches nous a permis d’anticiper les blocages, de répartir les charges et d’identifier les fonctionnalités critiques à livrer en priorité.

## Résultats et retour client

L’outil livré répondait aux attentes du client :

* Il a permis une réelle simplification du traitement de ses logs,
* L’analyse était automatisée et plus rapide qu’auparavant,
* Les données étaient rendues exploitables grâce aux filtres et exports.

Le projet a été bien accueilli et a permis une démonstration concrète de l’utilité du développement sur mesure dans un contexte métier spécifique.

## Compétences mobilisées

Ce projet a mobilisé plusieurs compétences du BUT Informatique :

* **Compétence 1** : développement d’une application complète, de l’analyse à la livraison.
* **Compétence 2** : optimisation des performances de parsing pour de gros volumes.
* **Compétence 4** : structuration et exploitation de données textuelles brutes.
* **Compétence 5** : conduite d’un projet avec un client réel et démarche agile.
* **Compétence 6** : collaboration étroite au sein d’une équipe de développement.

## Conclusion

Le projet LogBase m’a permis d’expérimenter un cycle de développement complet avec un client externe. Il m’a appris à écouter un besoin métier, à proposer des solutions réalistes, et à construire un outil à la fois robuste et ergonomique. Ce projet a également été l’occasion de renforcer mes compétences en Python, en gestion d’équipe, et en communication technique.

```

---