# Configuration de Gemini

## Configurer les variables d'environnement requises

Gemini ne prend actuellement en charge que l'utilisation via l'outil de ligne de commande CLI et ne prend pas encore en charge l'extension VS Code. La méthode de configuration est similaire à celle de Claude Code.

### macOS ou Linux

Ajoutez le contenu suivant à `~/.zshrc` (zsh) ou `~/.bashrc` (bash) :

```bash
export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"
export GEMINI_API_KEY="sk-proj-xxxx"
```

Exécutez `source ~/.zshrc` après avoir enregistré le fichier pour que la configuration prenne effet immédiatement.

Si vous préférez les ajouter une par une, vous pouvez exécuter (les utilisateurs bash changent `~/.zshrc` en `~/.bashrc`) :

```bash
echo 'export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export GEMINI_API_KEY="sk-proj-xxxx"' >> ~/.zshrc

source ~/.zshrc
```

### Windows

Vous pouvez utiliser l'une des méthodes suivantes pour effectuer la même configuration :

**Méthode 1 · GUI (Recommandé, Permanent)**
1. Appuyez sur `Win + R`, tapez `sysdm.cpl` et appuyez sur Entrée.
2. Ouvrez **Paramètres système avancés** → **Variables d'environnement**.
3. Dans **Variables utilisateur**, cliquez sur **Nouvelle**, et ajoutez-les une par une :
   * `GOOGLE_GEMINI_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `GEMINI_API_KEY` → `sk-proj-xxxx`
4. Fermez toutes les fenêtres.

**Méthode 2 · Invite de commandes (Permanent)**
```cmd
setx GOOGLE_GEMINI_BASE_URL "https://www.codebyai.net/api/agent"
setx GEMINI_API_KEY "sk-proj-xxxx"
```

**Méthode 3 · PowerShell (Permanent)**
```powershell
[System.Environment]::SetEnvironmentVariable('GOOGLE_GEMINI_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('GEMINI_API_KEY', 'sk-proj-xxxx', 'User')
```

**Méthode 4 · Session temporaire (Valide uniquement pour la fenêtre CMD actuelle)**
```cmd
set GOOGLE_GEMINI_BASE_URL=https://www.codebyai.net/api/agent
set GEMINI_API_KEY=sk-proj-xxxx
```

## Démarrer Gemini CLI

Exécutez dans n'importe quel répertoire de projet :

```bash
cd your-project
gemini
```

Après un démarrage réussi, vous verrez une interface similaire à celle-ci :

![](/gemini_hello.png)
