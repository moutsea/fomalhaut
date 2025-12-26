# Codex Configuration

## Universal Configuration (Applies to Windows / macOS / Linux)

### 1. Create Configuration Directory

Create a `.codex` folder in your user home directory:

- macOS / Linux: `~/.codex`
- Windows: `C:\Users\YourUserName\.codex`

As long as the directory exists, you don't need to recreate it.

### 2. Create `config.toml`

Create a new `config.toml` in the `.codex` directory and paste the following content:

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

If you need to change the model, just adjust the `model` field.

### 3. Create `auth.json`

Still in the `.codex` directory, create `auth.json`:

```json
{
  "OPENAI_API_KEY": "sk-proj-xxxx"
}
```

### 4. Start Codex CLI

Enter your project directory and run `codex`:

```bash
cd your-project
codex
```

You will see results similar to this:

![](/codex_hello.png)

### 5. Using in VS Code

Install the official Codex extension from the VS Code Marketplace (make sure to choose the version with the official badge):

![](/vscode_codex.png)

VS Code will automatically read `config.toml` and `auth.json`, so no extra configuration is required. If the extension prompts for missing configuration, please check if the steps above are completed.
