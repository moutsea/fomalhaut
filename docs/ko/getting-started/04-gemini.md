# Gemini 구성

## 필수 환경 변수 구성

Gemini는 현재 CLI 명령줄 도구를 통해서만 사용 가능하며, VS Code 확장은 아직 지원하지 않습니다. 구성 방법은 Claude Code와 유사합니다.

### macOS 또는 Linux

다음 내용을 `~/.zshrc` (zsh) 또는 `~/.bashrc` (bash)에 추가하세요:

```bash
export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"
export GEMINI_API_KEY="sk-proj-xxxx"
```

파일을 저장한 후 `source ~/.zshrc`를 실행하여 구성이 즉시 적용되도록 하세요.

하나씩 추가하려면 다음을 실행하세요 (bash 사용자는 `~/.zshrc`를 `~/.bashrc`로 변경):

```bash
echo 'export GOOGLE_GEMINI_BASE_URL="https://www.codebyai.net/api/agent"' >> ~/.zshrc
echo 'export GEMINI_API_KEY="sk-proj-xxxx"' >> ~/.zshrc

source ~/.zshrc
```

### Windows

다음 방법 중 하나를 사용하여 동일한 구성을 완료할 수 있습니다:

**방법 1 · GUI (권장, 영구적)**
1. `Win + R`을 누르고 `sysdm.cpl`을 입력한 다음 Enter를 누르세요.
2. **고급** → **환경 변수**를 엽니다.
3. **사용자 변수**에서 **새로 만들기**를 클릭하고 하나씩 추가합니다:
   * `GOOGLE_GEMINI_BASE_URL` → `https://www.codebyai.net/api/agent`
   * `GEMINI_API_KEY` → `sk-proj-xxxx`
4. 모든 창을 닫습니다.

**방법 2 · 명령 프롬프트 (영구적)**
```cmd
setx GOOGLE_GEMINI_BASE_URL "https://www.codebyai.net/api/agent"
setx GEMINI_API_KEY "sk-proj-xxxx"
```

**방법 3 · PowerShell (영구적)**
```powershell
[System.Environment]::SetEnvironmentVariable('GOOGLE_GEMINI_BASE_URL', 'https://www.codebyai.net/api/agent', 'User')
[System.Environment]::SetEnvironmentVariable('GEMINI_API_KEY', 'sk-proj-xxxx', 'User')
```

**방법 4 · 임시 세션 (현재 CMD 창에서만 유효)**
```cmd
set GOOGLE_GEMINI_BASE_URL=https://www.codebyai.net/api/agent
set GEMINI_API_KEY=sk-proj-xxxx
```

## Gemini CLI 시작

아무 프로젝트 디렉토리에서나 다음을 실행하세요:

```bash
cd your-project
gemini
```

성공적으로 시작되면 다음과 유사한 인터페이스가 나타납니다:

![](/gemini_hello.png)
