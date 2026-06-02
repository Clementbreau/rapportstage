# Présentation de Covéa et du contexte de stage

## Le groupe Covéa

Covéa est un groupe mutualiste français rassemblant plusieurs grandes marques d'assurance : MAAF, MMA et GMF. Ensemble, elles forment un acteur majeur de l'assurance et de la réassurance en Europe, avec plus de 11 millions de sociétaires et clients. Le groupe emploie plus de 24 000 collaborateurs et s'engage dans une transformation numérique ambitieuse pour répondre aux nouveaux enjeux technologiques, économiques et environnementaux.

![logo-covea](/img/logoc.png)

## La DSI et mon intégration

Mon stage s’est déroulé au sein de la Direction des Systèmes d’Information (DSI) de Covéa, plus précisément dans l’équipe Solutions Décisionnel Data. Cette équipe intervient sur des projets liés à la gestion, à la transformation et à l’exploitation des données.

L'un des enjeux principaux est la migration de l’écosystème Hadoop Cloudera, passant de CDH (Cloudera Distribution Hadoop) vers CDP (Cloudera Data Platform). Ce chantier stratégique est en cours depuis environ trois ans et entre désormais dans sa phase finale. Il implique des ajustements complexes sur les pipelines de données, les plateformes de traitement et les outils de supervision.

En tant que stagiaire, j’ai été intégré progressivement à l’équipe et j’ai pu contribuer à différents sujets liés à cette migration, notamment en intervenant sur des jobs Talend.

## Organisation et fonctionnement de l’équipe

L'équipe fonctionne en mode "agile light".
Ce qui est entendu par ce term, c'est que certaines pratiques issues de la méthode agile sont appliquées au quotidien (réunions régulières, priorisation des tâches, communication fréquente), mais sans suivre formellement l’ensemble du cadre Scrum : pas de sprint planifié, pas de sprint review, ni de cérémonies structurées comme les rétrospectives.

Parmis les réunions on retrouve surtout les

- **Dailys** (lundi, mercredi, vendredi à 9h15) :  
  Courtes réunions permettant à chaque membre de faire un point sur :
  - Ce qui a été fait récemment
  - Les éventuels blocages
  - Les tâches prévues

- **Coproj**  (comité projet, un jeudi sur deux) :  
  Réunion de coordination et de pilotage projet où l’on :
  - Revoit les livrables à mettre en production (MEP)
  - Échange sur les projets à venir et met à jour le plan de charge (PDC)

Ce fonctionnement régulier permet une bonne visibilité sur l'avancement des projets et une coordination fluide entre les différents acteurs, qu'ils soient développeurs, chefs de projet, ou responsables de domaine.

## Outils utilisés

Durant ce stage, j'ai manipulé plusieurs outils techniques et de gestion de projet, répartis entre le développement, la supervision et l’organisation du travail, les principaux étant :

- **Talend** : Outil ETL pour développer des jobs de traitement de données sous forme graphique.
- **Socle Générique** : Moteur d’exécution de jobs développé en interne, utilisant YAML ou JSON. Fonctionne avec Spring Boot, déployé sur OpenShift.
- **Hue** : Interface web pour écrire et exécuter des requêtes SQL sur l’écosystème Hadoop.
- **Jenkins** : Plateforme d’intégration continue pour enchaîner automatiquement les traitements.
- **Talend Administrator Center** et **Real-Time Monitoring** : Outils de supervision Talend.
- **Yarn** : Gestionnaire de ressources pour l’exécution de traitements Spark.
- **Jira** : Suivi des tickets et planification des tâches.
- **Git** : Utilisé pour le versionning dès le début du stage.

## Environnements de travail

Pour assurer une qualité de livraison et éviter les régressions, chaque traitement est validé dans plusieurs environnements avant mise en production :

| Environnement       | Rôle                                      |
|---------------------|-------------------------------------------|
| `bd0` / `dev`       | Environnement de développement            |
| `bt1` / `TI` / `TS` | Environnement de pré-recette              |
| `bt2` / `TAU`       | Tests utilisateurs                        |
| `pfc` / `perf`      | Tests de performance (copie données prod) |
| `ppr` / `pré-prod`  | Préproduction (copie données prod)        |
| `pro` / `prod`      | Production                                |

Chaque environnement possède ses propres données, configurations et droits, garantissant une montée en qualité progressive.

## Interfaces utilisées

Ci-dessous, l'interface Knox CDP, qui liste les API installées sur le cluster CDP. Les éléments que j’ai principalement utilisés sont surlignés en rouge.

![k](/img/knox.png)
