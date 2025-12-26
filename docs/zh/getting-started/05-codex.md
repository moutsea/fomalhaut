# Codex 配置


## 通用配置（适用于 Windows / macOS / Linux）

### 1. 创建配置目录

在用户主目录下创建 `.codex` 文件夹：

- macOS / Linux：`~/.codex`
- Windows：`C:\\Users\\你的用户名\\.codex`

目录存在即可，无需重复创建。

### 2. 创建 `config.toml`

在 `.codex` 目录中新增 `config.toml`，粘贴以下内容：

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

如需更换模型，只需调整 `model` 字段即可。

### 3. 创建 `auth.json`

仍在 `.codex` 目录下创建 `auth.json`：

```json
{
  "OPENAI_API_KEY": "sk-proj-xxxx"
}
```

### 4. 启动 Codex CLI

进入你的项目目录并运行 `codex`：

```bash
cd your-project
codex
```

将会看到类似结果：

![](/codex_hello.png)


### 5. 在 VS Code 中使用

在 VS Code 插件市场安装官方 Codex 插件（注意选择带官方标识的版本）：

![](/vscode_codex.png)

VS Code 会自动读取 `config.toml` 和 `auth.json`，无需额外配置。若插件提示缺少配置，请检查上述步骤是否完成。
