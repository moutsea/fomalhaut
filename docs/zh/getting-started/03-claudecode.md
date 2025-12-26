# Claude Code配置

## 配置必需的环境变量

在启动 Claude Code CLI 或 VS Code 插件之前，需要先准备若干环境变量。推荐一次性配置在 shell/系统设置里，并在修改后重新打开终端或编辑器，这样每个新会话都会自动继承。

### macOS 或 Linux

将下列内容添加到 `~/.zshrc`（zsh）或 `~/.bashrc`（bash）中：

```bash
# Claude Code
export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"
export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx" # 替换成刚刚复制的 apikey
export API_TIMEOUT_MS=600000
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

保存文件后运行 `source ~/.zshrc` 使配置立即生效。

若希望逐条追加，可运行（bash 用户将 `~/.zshrc` 改为 `~/.bashrc`）：

```bash
echo 'export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx"' >> ~/.zshrc
echo 'export API_TIMEOUT_MS=600000' >> ~/.zshrc
echo 'export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1' >> ~/.zshrc

source ~/.zshrc
```

### Windows

以下任意方式都可以完成同样的配置：

**方式 1 · GUI（推荐，永久生效）**
1. 按 `Win + R`，输入 `sysdm.cpl` 并回车。
2. 打开 **高级** → **环境变量**。
3. 在 **用户变量** 中点击 **新建**，逐个添加：
   * `ANTHROPIC_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `ANTHROPIC_AUTH_TOKEN` → `sk-proj-xxxx`
   * `API_TIMEOUT_MS` → `600000`
   * `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` → `1`
4. 关闭所有窗口，重启终端或 IDE。

**方式 2 · 命令提示符（永久）**
```cmd
setx ANTHROPIC_BASE_URL "https://www.codebyai.net/api/agent"
setx ANTHROPIC_AUTH_TOKEN "sk-proj-xxxx"
setx API_TIMEOUT_MS "600000"
setx CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC "1"
```

**方式 3 · PowerShell（永久）**
```powershell
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', 'sk-proj-xxxx', 'User')
[System.Environment]::SetEnvironmentVariable('API_TIMEOUT_MS', '600000', 'User')
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC', '1', 'User')
```

**方式 4 · 临时会话（只对当前 CMD 窗口生效）**
```cmd
set ANTHROPIC_BASE_URL=https://www.codebyai.net/api/agent
set ANTHROPIC_AUTH_TOKEN=sk-proj-xxxx
set API_TIMEOUT_MS=600000
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

## 启动 Claude 编码环境

在任意项目目录中运行：

```bash
cd your-project
claude
```

成功启动后将出现类似界面：

![](/claude_test.png)

若使用 VS Code（或其他 IDE）插件，也需要上述环境变量。若看到如下提示：

![](/claude_code_error.png)

说明插件没有读到配置，需要重新检查。也可以直接在配置文件里写死这些值：

* **Claude 全局设置**  
  * macOS/Linux：`~/.claude/settings.json`  
  * Windows：`C:/Users/<UserName>/.claude/settings.json`  
  内容示例：

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

* **VS Code settings.json** – 添加：

  ```json
  "claudeCode.environmentVariables": [
    { "name": "ANTHROPIC_BASE_URL", "value": "https://www.codebyai.net/api/agent" },
    { "name": "ANTHROPIC_AUTH_TOKEN", "value": "sk-proj-xxxx" }
  ],
  ```

修改后请重新加载 VS Code 或重启终端。
