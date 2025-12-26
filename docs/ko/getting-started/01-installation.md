# 설치 가이드

### 1단계: Node.js 설치

Node.js는 Chrome V8 엔진 기반의 JavaScript 런타임으로, 서버 사이드 스크립트 실행을 지원하며 확장 가능한 네트워크 애플리케이션을 구축할 수 있습니다.

Node.js를 설치하려면 [공식 웹사이트](https://nodejs.org)에서 설치 프로그램을 다운로드하여 실행 파일을 실행하고 안내에 따라 설치를 완료하세요.

또는 macOS에서는 `brew`, Linux에서는 `apt` 패키지 관리자를 사용하여 설치할 수도 있습니다.

#### macOS에서 Brew 사용

```bash
# brew가 이미 설치된 경우
brew install node
```

#### Linux에서 Apt 사용

```bash
# Linux에서 apt를 사용하여 Node.js 설치
sudo apt install nodejs
sudo apt install npm
```

#### Windows에서 직접 다운로드하여 설치

Node.js 공식 웹사이트 방문: [nodejs.org](https://nodejs.org/en)

**다운로드할 버전 선택**:

- LTS 버전 (장기 지원 버전): 대부분의 사용자에게 적합, 더 안정적
- Current 버전: 최신 기능 포함

**설치 단계**:

- 다운로드한 .msi 설치 파일을 더블 클릭
- 설치 마법사를 따라 진행, 보통 "다음"만 클릭하면 됩니다
- 설치 프로그램이 환경 변수를 자동으로 구성합니다
- npm(Node 패키지 관리자)이 기본적으로 설치됩니다

설치가 완료되면 터미널에서 버전을 확인할 수 있습니다:

```bash
node -v
# 다음과 같이 표시되어야 합니다: v23.11.0

npm -v
# 다음과 같이 표시되어야 합니다: 10.9.2
```

버전 번호가 보이면 Node.js 설치가 성공한 것입니다.

### 2단계: 클라이언트 설치

#### Claude Code

claude-code는 Anthropic의 Claude AI 모델과 상호 작용하기 위한 Node.js 패키지입니다. 개발자가 Claude 모델과 쉽게 통신하고 그 기능을 애플리케이션에 통합할 수 있는 간단한 인터페이스를 제공합니다.

방금 설치한 npm을 사용하여 claude-code를 설치하세요:

```bash
npm install -g @anthropic-ai/claude-code
```

설치 후 버전을 확인하여 설치를 검증할 수 있습니다:

```bash
claude --version
# 다음과 같이 표시되어야 합니다: 2.0.70 (Claude Code)
```

#### Gemini CLI (Google)

Google의 Gemini 모델은 `@google/gemini-cli` 라이브러리를 통해 액세스할 수 있습니다. 이는 Gemini API와 상호 작용하기 위해 공식적으로 제공되는 Node.js 클라이언트 라이브러리입니다.

npm을 사용하여 설치:

```bash
npm install -g @google/gemini-cli
```

#### Codex (OpenAI)

Codex 모델(OpenAI)은 일반적으로 공식 `openai` Node.js 라이브러리를 통해 액세스됩니다.

npm을 사용하여 설치:

```bash
npm install -g @openai/codex
```
