# Configuration de Claude Code

## Configurer les variables d'environnement requises

Avant de lancer Claude Code CLI ou l'extension VS Code, vous devez préparer plusieurs variables d'environnement. Il est recommandé de les configurer une fois pour toutes dans les paramètres de votre shell/système, puis de rouvrir le terminal ou l'éditeur après modification, afin que chaque nouvelle session en hérite automatiquement.

### macOS ou Linux

Ajoutez le contenu suivant à `~/.zshrc` (zsh) ou `~/.bashrc` (bash) :

```bash
# Claude Code
export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"
export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx" # Remplacez par la clé API que vous venez de copier
export API_TIMEOUT_MS=600000
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

Exécutez `source ~/.zshrc` après avoir enregistré le fichier pour que la configuration prenne effet immédiatement.

Si vous préférez les ajouter une par une, vous pouvez exécuter (les utilisateurs bash changent `~/.zshrc` en `~/.bashrc`) :

```bash
echo 'export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx"' >> ~/.zshrc
echo 'export API_TIMEOUT_MS=600000' >> ~/.zshrc
echo 'export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1' >> ~/.zshrc

source ~/.zshrc
```

### Windows

Vous pouvez utiliser l'une des méthodes suivantes pour effectuer la même configuration :

**Méthode 1 · GUI (Recommandé, Permanent)**
1. Appuyez sur `Win + R`, tapez `sysdm.cpl` et appuyez sur Entrée.
2. Ouvrez **Paramètres système avancés** → **Variables d'environnement**.
3. Dans **Variables utilisateur**, cliquez sur **Nouvelle**, et ajoutez-les une par une :
   * `ANTHROPIC_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `ANTHROPIC_AUTH_TOKEN` → `sk-proj-xxxx`
   * `API_TIMEOUT_MS` → `600000`
   * `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` → `1`
4. Fermez toutes les fenêtres et redémarrez votre terminal ou IDE.

**Méthode 2 · Invite de commandes (Permanent)**
```cmd
setx ANTHROPIC_BASE_URL "https://www.codebyai.net/api/agent"
setx ANTHROPIC_AUTH_TOKEN "sk-proj-xxxx"
setx API_TIMEOUT_MS "600000"
setx CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC "1"
```

**Méthode 3 · PowerShell (Permanent)**
```powershell
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', 'sk-proj-xxxx', 'User')
[System.Environment]::SetEnvironmentVariable('API_TIMEOUT_MS', '600000', 'User')
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC', '1', 'User')
```

**Méthode 4 · Session temporaire (Valide uniquement pour la fenêtre CMD actuelle)**
```cmd
set ANTHROPIC_BASE_URL=https://www.codebyai.net/api/agent
set ANTHROPIC_AUTH_TOKEN=sk-proj-xxxx
set API_TIMEOUT_MS=600000
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

## Démarrer l'environnement de codage Claude

Exécutez dans n'importe quel répertoire de projet :

```bash
cd your-project
claude
```

Après un démarrage réussi, vous verrez une interface similaire à celle-ci :

![](/claude_test.png)

Si vous utilisez des extensions VS Code (ou autre IDE), ces variables d'environnement sont également requises. Si vous voyez l'invite suivante :

![](/claude_code_error.png)

Cela signifie que l'extension n'a pas lu la configuration, et vous devez revérifier. Vous pouvez également coder en dur ces valeurs directement dans le fichier de configuration :

* **Paramètres globaux Claude**
  * macOS/Linux : `~/.claude/settings.json`
  * Windows : `C:/Users/<UserName>/.claude/settings.json`
  Exemple de contenu :

  ```json
  {
    "env": {
      "ANTHROPIC_AUTH_TOKEN": "sk-proj-xxxx",
      "ANTHROPIC_BASE_URL": "https://www.codebyai.net/api/agent",
      "API_TIMEOUT_MS": "600000",
      "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
    }
  }
  ```

* **VS Code settings.json** – Ajouter :

  ```json
  "claudeCode.environmentVariables": [
    { "name": "ANTHROPIC_BASE_URL", "value": "https://www.codebyai.net/api/agent" },
    { "name": "ANTHROPIC_AUTH_TOKEN", "value": "sk-proj-xxxx" }
  ],
  ```

Après modification, veuillez recharger VS Code ou redémarrer le terminal.
