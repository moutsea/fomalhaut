# Claude Code Configuration

## Configure Required Environment Variables

Before starting Claude Code CLI or the VS Code extension, you need to prepare several environment variables. It is recommended to configure them once in your shell/system settings, and then reopen the terminal or editor after modification, so that every new session inherits them automatically.

### macOS or Linux

Add the following content to `~/.zshrc` (zsh) or `~/.bashrc` (bash):

```bash
# Claude Code
export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"
export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx" # Replace with the API Key you just copied
export API_TIMEOUT_MS=600000
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

Run `source ~/.zshrc` after saving the file to make the configuration take effect immediately.

If you prefer to append them one by one, you can run (bash users change `~/.zshrc` to `~/.bashrc`), remember to replace the auth token with your API Key just copied:

```bash
echo 'export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx"' >> ~/.zshrc
echo 'export API_TIMEOUT_MS=600000' >> ~/.zshrc
echo 'export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1' >> ~/.zshrc

source ~/.zshrc
```

### Windows

You can use any of the following methods to complete the same configuration:

**Method 1 · GUI (Recommended, Permanent)**
1. Press `Win + R`, type `sysdm.cpl` and hit Enter.
2. Open **Advanced** → **Environment Variables**.
3. Under **User variables**, click **New**, and add them one by one:
   * `ANTHROPIC_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `ANTHROPIC_AUTH_TOKEN` → `sk-proj-xxxx`
   * `API_TIMEOUT_MS` → `600000`
   * `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` → `1`
4. Close all windows and restart your computer.

**Method 2 · Command Prompt (Permanent)**
```cmd
setx ANTHROPIC_BASE_URL "https://www.codebyai.net/api/agent"
setx ANTHROPIC_AUTH_TOKEN "sk-proj-xxxx"
setx API_TIMEOUT_MS "600000"
setx CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC "1"
```

**Method 3 · PowerShell (Permanent)**
```powershell
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', 'sk-proj-xxxx', 'User')
[System.Environment]::SetEnvironmentVariable('API_TIMEOUT_MS', '600000', 'User')
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC', '1', 'User')
```

**Method 4 · Temporary Session (Valid only for current CMD window)**
```cmd
set ANTHROPIC_BASE_URL=https://www.codebyai.net/api/agent
set ANTHROPIC_AUTH_TOKEN=sk-proj-xxxx
set API_TIMEOUT_MS=600000
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

## Start Claude Coding Environment

Run in any project directory:

```bash
cd your-project
claude
```

After successful startup, you will see an interface similar to this:

![](/claude_test.png)

If using VS Code (or other IDE) extensions, these environment variables are also required. If you see the following prompt:

![](/claude_code_error.png)

It means the extension did not set up the configuration correctly, and you need to recheck. You can also hardcode these values directly in the configuration file:

* **Claude Global Settings**
  * macOS/Linux: `~/.claude/settings.json`
  * Windows: `C:/Users/<UserName>/.claude/settings.json`
  Example content:

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

* **VS Code settings.json** – Add:

  ```json
  "claudeCode.environmentVariables": [
    { "name": "ANTHROPIC_BASE_URL", "value": "https://www.codebyai.net/api/agent" },
    { "name": "ANTHROPIC_AUTH_TOKEN", "value": "sk-proj-xxxx" }
  ],
  ```

After modification, please reload VS Code or restart the terminal.
