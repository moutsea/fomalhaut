# Codex 구성

## 공통 구성 (Windows / macOS / Linux 적용 가능)

### 1. 구성 디렉토리 생성

사용자 홈 디렉토리에 `.codex` 폴더를 생성하세요:

- macOS / Linux: `~/.codex`
- Windows: `C:\Users\사용자이름\.codex`

디렉토리가 이미 존재한다면 다시 생성할 필요가 없습니다.

### 2. `config.toml` 생성

`.codex` 디렉토리에 `config.toml` 파일을 새로 만들고 다음 내용을 붙여넣으세요:

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

모델을 변경해야 하는 경우 `model` 필드만 수정하면 됩니다.

### 3. `auth.json` 생성

마찬가지로 `.codex` 디렉토리에 `auth.json` 파일을 생성하세요:

```json
{
  "OPENAI_API_KEY": "sk-proj-xxxx"
}
```

### 4. Codex CLI 시작

프로젝트 디렉토리로 이동하여 `codex`를 실행하세요:

```bash
cd your-project
codex
```

다음과 유사한 결과를 확인할 수 있습니다:

![](/codex_hello.png)

### 5. VS Code에서 사용하기

VS Code Marketplace에서 공식 Codex 확장 프로그램을 설치하세요 (공식 배지가 있는 버전을 선택하세요):

![](/vscode_codex.png)

VS Code는 `config.toml`과 `auth.json`을 자동으로 읽으므로 별도의 구성이 필요하지 않습니다. 확장 프로그램에서 구성 누락 메시지가 표시되면 위의 단계가 완료되었는지 확인하세요.
