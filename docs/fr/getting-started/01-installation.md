# Guide d'installation

### Étape 1 : Installer Node.js

Node.js est un environnement d'exécution JavaScript basé sur le moteur V8 de Chrome, qui prend en charge l'exécution de scripts côté serveur et permet de construire des applications réseau évolutives.

Pour installer Node.js, vous pouvez télécharger le programme d'installation depuis le [site officiel](https://nodejs.org), exécuter le fichier et suivre les instructions.

Alternativement, vous pouvez l'installer en utilisant `brew` sur macOS ou le gestionnaire de paquets `apt` sur Linux.

#### Utiliser Brew sur macOS

```bash
# Si vous avez déjà installé brew
brew install node
```

#### Utiliser Apt sur Linux

```bash
# Installer Node.js avec apt sur Linux
sudo apt install nodejs
sudo apt install npm
```

#### Téléchargement direct sur Windows

Visitez le site officiel de Node.js : [nodejs.org](https://nodejs.org/en)

**Choisir la version à télécharger** :

- Version LTS (Support Long Terme) : Recommandée pour la plupart des utilisateurs, plus stable
- Version Current : Contient les dernières fonctionnalités

**Étapes d'installation** :

- Double-cliquez sur le fichier d'installation .msi téléchargé
- Suivez l'assistant d'installation, cliquez généralement sur "Suivant"
- Le programme d'installation configurera automatiquement les variables d'environnement
- npm (Node Package Manager) sera installé par défaut

Après l'installation, vous pouvez vérifier la version dans le terminal :

```bash
node -v
# Vous devriez voir quelque chose comme : v23.11.0

npm -v
# Vous devriez voir quelque chose comme : 10.9.2
```

Si vous voyez le numéro de version, l'installation de Node.js est réussie.

### Étape 2 : Installer les clients

#### Claude Code

claude-code est un paquet Node.js pour interagir avec les modèles d'IA Claude d'Anthropic. Il fournit une interface simple permettant aux développeurs de communiquer facilement avec les modèles Claude et d'intégrer leurs fonctionnalités dans des applications.

Installez claude-code en utilisant npm que vous venez d'installer :

```bash
npm install -g @anthropic-ai/claude-code
```

Après l'installation, vous pouvez vérifier l'installation en contrôlant la version :

```bash
claude --version
# Vous devriez voir quelque chose comme : 2.0.70 (Claude Code)
```

#### Gemini CLI (Google)

Les modèles Gemini de Google sont accessibles via la bibliothèque `@google/gemini-cli`. C'est une bibliothèque client Node.js officielle fournie pour interagir avec l'API Gemini.

Installez avec npm :

```bash
npm install -g @google/gemini-cli
```

#### Codex (OpenAI)

Les modèles Codex (OpenAI) sont généralement accessibles via la bibliothèque officielle Node.js `openai`.

Installez avec npm :

```bash
npm install -g @openai/codex
```
