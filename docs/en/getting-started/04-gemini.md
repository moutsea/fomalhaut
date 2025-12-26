# Gemini Configuration

## Configure Required Environment Variables

Gemini currently only supports usage via the CLI command-line tool and does not yet support the VS Code extension. The configuration method is similar to Claude Code.

### macOS or Linux

Add the following content to `~/.zshrc` (zsh) or `~/.bashrc` (bash):

```bash
export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"
export GEMINI_API_KEY="sk-proj-xxxx"
```

Run `source ~/.zshrc` after saving the file to make the configuration take effect immediately.

If you prefer to append them one by one, you can run (bash users change `~/.zshrc` to `~/.bashrc`):

```bash
echo 'export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export GEMINI_API_KEY="sk-proj-xxxx"' >> ~/.zshrc

source ~/.zshrc
```

### Windows

You can use any of the following methods to complete the same configuration:

**Method 1 · GUI (Recommended, Permanent)**
1. Press `Win + R`, type `sysdm.cpl` and hit Enter.
2. Open **Advanced** → **Environment Variables**.
3. Under **User variables**, click **New**, and add them one by one:
   * `GOOGLE_GEMINI_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `GEMINI_API_KEY` → `sk-proj-xxxx`
4. Close all windows.

**Method 2 · Command Prompt (Permanent)**
```cmd
setx GOOGLE_GEMINI_BASE_URL "https://www.codebyai.net/api/agent"
setx GEMINI_API_KEY "sk-proj-xxxx"
```

**Method 3 · PowerShell (Permanent)**
```powershell
[System.Environment]::SetEnvironmentVariable('GOOGLE_GEMINI_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('GEMINI_API_KEY', 'sk-proj-xxxx', 'User')
```

**Method 4 · Temporary Session (Valid only for current CMD window)**
```cmd
set GOOGLE_GEMINI_BASE_URL=https://www.codebyai.net/api/agent
set GEMINI_API_KEY=sk-proj-xxxx
```

## Start Gemini CLI

Run in any project directory:

```bash
cd your-project
gemini
```

After successful startup, you will see an interface similar to this:

![](/gemini_hello.png)
