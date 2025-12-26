# Installation Guide

### Step 1: Install Node.js

Node.js is a JavaScript runtime built on Chrome's V8 engine that supports server-side script execution and builds scalable network applications.

To install Node.js, you can download the installer from the [official website](https://nodejs.org), run the installation file, and follow the prompts.

Alternatively, you can install it using `brew` on macOS or the `apt` package manager on Linux.

#### Using Brew on macOS

```bash
# If you already have brew installed
brew install node
```

#### Using Apt on Linux

```bash
# Install Node.js using apt on Linux
sudo apt install nodejs
sudo apt install npm
```

#### Direct Download on Windows

Visit the Node.js official website: [nodejs.org](https://nodejs.org/en)

**Select version to download**:

- LTS Version (Long Term Support): Recommended for most users, more stable
- Current Version: Contains the latest features

**Installation Steps**:

- Double-click the downloaded .msi installation file
- Follow the installation wizard, usually just click "Next"
- The installer will automatically configure environment variables
- npm (Node Package Manager) will be installed by default

After installation, you can check the version in the terminal:

```bash
node -v
# You should see something like: v23.11.0

npm -v
# You should see something like: 10.9.2
```

If you can see the version number, Node.js installation is successful.

### Step 2: Install Clients

#### Claude Code

claude code is a Node.js package for interacting with Anthropic's Claude AI models. It provides a simple interface that allows developers to easily communicate with Claude models and integrate their capabilities into applications.

Install claude code using the npm you just installed:

```bash
npm install -g @anthropic-ai/claude-code
```

After installation, you can verify the installation by checking the version:

```bash
claude --version
# You should see something like: 2.0.70 (Claude Code)
```

#### Gemini CLI (Google)

Google's Gemini models can be accessed via the `@google/gemini-cli` library. This is an official Node.js client library provided for interacting with the Gemini API.

Install using npm:

```bash
npm install -g @google/gemini-cli
```

#### Codex (OpenAI)

Codex models (OpenAI) are typically accessed via the official `openai` Node.js library.

Install using npm:

```bash
npm install -g @openai/codex
```
