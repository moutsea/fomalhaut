# Claude Code 구성

## 필수 환경 변수 구성

Claude Code CLI 또는 VS Code 확장을 시작하기 전에, 몇 가지 환경 변수를 준비해야 합니다. 셸/시스템 설정에서 한 번 구성한 다음 터미널이나 편집기를 다시 열어 수정 사항을 적용하는 것이 좋습니다. 이렇게 하면 모든 새 세션이 자동으로 상속받습니다.

### macOS 또는 Linux

다음 내용을 `~/.zshrc` (zsh) 또는 `~/.bashrc` (bash)에 추가하세요:

```bash
# Claude Code
export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"
export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx" # 방금 복사한 API Key로 교체하세요
export API_TIMEOUT_MS=600000
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

파일을 저장한 후 `source ~/.zshrc`를 실행하여 구성이 즉시 적용되도록 하세요.

하나씩 추가하려면 다음을 실행하세요 (bash 사용자는 `~/.zshrc`를 `~/.bashrc`로 변경):

```bash
echo 'export ANTHROPIC_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="sk-proj-xxxx"' >> ~/.zshrc
echo 'export API_TIMEOUT_MS=600000' >> ~/.zshrc
echo 'export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1' >> ~/.zshrc

source ~/.zshrc
```

### Windows

다음 방법 중 하나를 사용하여 동일한 구성을 완료할 수 있습니다:

**방법 1 · GUI (권장, 영구적)**
1. `Win + R`을 누르고 `sysdm.cpl`을 입력한 다음 Enter를 누르세요.
2. **고급** → **환경 변수**를 엽니다.
3. **사용자 변수**에서 **새로 만들기**를 클릭하고 하나씩 추가합니다:
   * `ANTHROPIC_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `ANTHROPIC_AUTH_TOKEN` → `sk-proj-xxxx`
   * `API_TIMEOUT_MS` → `600000`
   * `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` → `1`
4. 모든 창을 닫고 터미널이나 IDE를 다시 시작하세요.

**방법 2 · 명령 프롬프트 (영구적)**
```cmd
setx ANTHROPIC_BASE_URL "https://www.codebyai.net/api/agent"
setx ANTHROPIC_AUTH_TOKEN "sk-proj-xxxx"
setx API_TIMEOUT_MS "600000"
setx CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC "1"
```

**방법 3 · PowerShell (영구적)**
```powershell
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', 'sk-proj-xxxx', 'User')
[System.Environment]::SetEnvironmentVariable('API_TIMEOUT_MS', '600000', 'User')
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC', '1', 'User')
```

**방법 4 · 임시 세션 (현재 CMD 창에서만 유효)**
```cmd
set ANTHROPIC_BASE_URL=https://www.codebyai.net/api/agent
set ANTHROPIC_AUTH_TOKEN=sk-proj-xxxx
set API_TIMEOUT_MS=600000
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

## Claude 코딩 환경 시작

아무 프로젝트 디렉토리에서나 다음을 실행하세요:

```bash
cd your-project
claude
```

성공적으로 시작되면 다음과 유사한 인터페이스가 나타납니다:

![](/claude_test.png)

VS Code(또는 다른 IDE) 확장을 사용하는 경우에도 이러한 환경 변수가 필요합니다. 다음 프롬프트가 표시되는 경우:

![](/claude_code_error.png)

확장이 구성을 읽지 못했음을 의미하므로 다시 확인해야 합니다. 구성 파일에 이 값들을 직접 하드코딩할 수도 있습니다:

* **Claude 전역 설정**
  * macOS/Linux: `~/.claude/settings.json`
  * Windows: `C:/Users/<UserName>/.claude/settings.json`
  예시 내용:

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

* **VS Code settings.json** – 추가:

  ```json
  "claudeCode.environmentVariables": [
    { "name": "ANTHROPIC_BASE_URL", "value": "https://www.codebyai.net/api/agent" },
    { "name": "ANTHROPIC_AUTH_TOKEN", "value": "sk-proj-xxxx" }
  ],
  ```

수정 후 VS Code를 다시 로드하거나 터미널을 다시 시작하세요.
