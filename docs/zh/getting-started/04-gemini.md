# Gemini 配置

## 配置必需的环境变量

Gemini 当前只支持通过 cli 命令行工具使用，暂不支持 vscode 插件。配置方式类似 Claude Code。

### macOS 或 Linux

将下列内容添加到 `~/.zshrc`（zsh）或 `~/.bashrc`（bash）中：

```bash
export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"
export GEMINI_API_KEY="sk-proj-xxxx"
```

保存文件后运行 `source ~/.zshrc` 使配置立即生效。

若希望逐条追加，可运行（bash 用户将 `~/.zshrc` 改为 `~/.bashrc`）：

```bash
echo 'export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export GEMINI_API_KEY="sk-proj-xxxx"' >> ~/.zshrc

source ~/.zshrc
```

### Windows

以下任意方式都可以完成同样的配置：

**方式 1 · GUI（推荐，永久生效）**
1. 按 `Win + R`，输入 `sysdm.cpl` 并回车。
2. 打开 **高级** → **环境变量**。
3. 在 **用户变量** 中点击 **新建**，逐个添加：
   * `GOOGLE_GEMINI_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `GEMINI_API_KEY` → `sk-proj-xxxx`
4. 关闭所有窗口。

**方式 2 · 命令提示符（永久）**
```cmd
setx GOOGLE_GEMINI_BASE_URL "https://www.codebyai.net/api/agent"
setx GEMINI_API_KEY "sk-proj-xxxx"
```

**方式 3 · PowerShell（永久）**
```powershell
[System.Environment]::SetEnvironmentVariable('GOOGLE_GEMINI_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('GEMINI_API_KEY', 'sk-proj-xxxx', 'User')
```

**方式 4 · 临时会话（只对当前 CMD 窗口生效）**
```cmd
set GOOGLE_GEMINI_BASE_URL=https://www.codebyai.net/api/agent
set GEMINI_API_KEY=sk-proj-xxxx
```

## 启动 Gemini Cli

在任意项目目录中运行：

```bash
cd your-project
gemini
```

成功启动后将出现类似界面：

![](/gemini_hello.png)
