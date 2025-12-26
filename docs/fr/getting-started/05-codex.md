# Configuration de Codex

## Configuration universelle (S'applique à Windows / macOS / Linux)

### 1. Créer le répertoire de configuration

Créez un dossier `.codex` dans votre répertoire personnel :

- macOS / Linux : `~/.codex`
- Windows : `C:\Users\VotreNomUtilisateur\.codex`

Si le répertoire existe déjà, il n'est pas nécessaire de le recréer.

### 2. Créer `config.toml`

Créez un nouveau fichier `config.toml` dans le répertoire `.codex` et collez le contenu suivant :

```toml
model_provider = "codebyai"
model = "gpt-5.1"
model_reasoning_effort = "high"
disable_response_storage = true

[model_providers.codebyai]
name = "codebyai"
base_url = "https://www.codebyai.net/api/agent"
wire_api = "responses"
requires_openai_auth = true

[features]
web_search_request = true
```

Si vous avez besoin de changer de modèle, ajustez simplement le champ `model`.

### 3. Créer `auth.json`

Toujours dans le répertoire `.codex`, créez `auth.json` :

```json
{
  "OPENAI_API_KEY": "sk-proj-xxxx"
}
```

### 4. Démarrer Codex CLI

Entrez dans le répertoire de votre projet et lancez `codex` :

```bash
cd your-project
codex
```

Vous verrez des résultats similaires à ceci :

![](/codex_hello.png)

### 5. Utilisation dans VS Code

Installez l'extension officielle Codex depuis le Marketplace VS Code (veillez à choisir la version avec le badge officiel) :

![](/vscode_codex.png)

VS Code lira automatiquement `config.toml` et `auth.json`, aucune configuration supplémentaire n'est donc requise. Si l'extension signale une configuration manquante, veuillez vérifier si les étapes ci-dessus ont été complétées.
