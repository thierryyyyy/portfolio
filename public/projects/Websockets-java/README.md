# Projet Java : Application Lourde Distante (Version SQLite Locale)

Cette version du projet a été modifiée pour utiliser **SQLite** par défaut, facilitant les tests locaux sans nécessiter l'installation d'un serveur MySQL.

## Fonctionnalités Clés
1.  **Serveur Distant** : Connexion via adresse IP paramétrable.
2.  **Base de Données SQLite** : Initialisation automatique d'une base locale `projet_java.db`.
3.  **Stockage XML Local** : Les données en mode déconnecté sont sauvegardées dans des fichiers XML (dossier `pending_xml/`).
4.  **Suppression Immédiate** : Les fichiers XML sont supprimés dès que l'envoi différé réussit.
5.  **Témoin Réseau** : Un thread dédié gère l'état visuel de la connexion (Témoin vert/rouge).

## Installation et Utilisation
Le projet est prêt à l'emploi.

### 1. Compilation
Lancez le script de compilation :
```bash
./build.sh
```

### 2. Lancement du Serveur
```bash
./run_server.sh
```
Le serveur créera automatiquement la table `CLIENT` dans le fichier `projet_java.db` s'il n'existe pas.

### 3. Lancement du Client
```bash
./run_client.sh
```

## Configuration
### Côté Serveur (`server_config.properties`)
*   `db.url` : Par défaut `jdbc:sqlite:projet_java.db`.
*   `db.user` et `db.pass` : Peuvent être laissés vides pour SQLite.

### Côté Client (`client_config.properties`)
*   `server.host` : L'adresse IP du serveur (utilisez `localhost` pour des tests sur la même machine).

## Dépendances
Les bibliothèques suivantes sont incluses dans le dossier `lib/` :
- `sqlite-jdbc-3.45.3.0.jar`
- `slf4j-api-2.0.13.jar`
- `slf4j-simple-2.0.13.jar`
