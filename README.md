# bolt.diy

[![bolt.diy: AI-Powered Full-Stack Web Development in the Browser](./public/social_preview_index.jpg)](https://bolt.diy)

Welcome to bolt.diy, the official open source version of Bolt.new, which allows you to choose the LLM that you use for each prompt! Currently, you can use OpenAI, Anthropic, Ollama, OpenRouter, Gemini, LMStudio, Mistral, xAI, HuggingFace, DeepSeek, or Groq models - and it is easily extended to use any other model supported by the Vercel AI SDK! See the instructions below for running this locally and extending it to include more models.

-----
Check the [bolt.diy Docs](https://stackblitz-labs.github.io/bolt.diy/) for more offical installation instructions and more informations.

-----
Also [this pinned post in our community](https://thinktank.ottomator.ai/t/videos-tutorial-helpful-content/3243) has a bunch of incredible resources for running and deploying bolt.diy yourself!

We have also launched an experimental agent called the "bolt.diy Expert" that can answer common questions about bolt.diy. Find it here on the [oTTomator Live Agent Studio](https://studio.ottomator.ai/).

bolt.diy was originally started by [Cole Medin](https://www.youtube.com/@ColeMedin) but has quickly grown into a massive community effort to build the BEST open source AI coding assistant!

## Table of Contents

- [Join the Community](#join-the-community)
- [Requested Additions](#requested-additions)
- [Features](#features)
- [Setup](#setup)
- [Run the Application](#run-the-application)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [FAQ](#faq)

## Join the community

[Join the bolt.diy community here, in the oTTomator Think Tank!](https://thinktank.ottomator.ai)

### Support the Project

If you find this project helpful, consider supporting it:

- ⭐ **Star the repository** on GitHub
- 🐛 **Report bugs** and suggest features
- 💬 **Join the community** discussions
- 💖 **Sponsor the project** on [GitHub Sponsors](https://github.com/sponsors/you112ef)

## Project management

Bolt.diy is a community effort! Still, the core team of contributors aims at organizing the project in way that allows
you to understand where the current areas of focus are.

If you want to know what we are working on, what we are planning to work on, or if you want to contribute to the
project, please check the [project management guide](./PROJECT.md) to get started easily.

## Requested Additions

- ✅ OpenRouter Integration (@coleam00)
- ✅ Gemini Integration (@jonathands)
- ✅ Autogenerate Ollama models from what is downloaded (@yunatamos)
- ✅ Filter models by provider (@jasonm23)
- ✅ Download project as ZIP (@fabwaseem)
- ✅ Improvements to the main bolt.new prompt in `app\lib\.server\llm\prompts.ts` (@kofi-bhr)
- ✅ DeepSeek API Integration (@zenith110)
- ✅ Mistral API Integration (@ArulGandhi)
- ✅ "Open AI Like" API Integration (@ZerxZ)
- ✅ Ability to sync files (one way sync) to local folder (@muzafferkadir)
- ✅ Containerize the application with Docker for easy installation (@aaronbolton)
- ✅ Publish projects directly to GitHub (@goncaloalves)
- ✅ Ability to enter API keys in the UI (@ali00209)
- ✅ xAI Grok Beta Integration (@milutinke)
- ✅ LM Studio Integration (@karrot0)
- ✅ HuggingFace Integration (@ahsan3219)
- ✅ Bolt terminal to see the output of LLM run commands (@thecodacus)
- ✅ Streaming of code output (@thecodacus)
- ✅ Ability to revert code to earlier version (@wonderwhy-er)
- ✅ Chat history backup and restore functionality (@sidbetatester)
- ✅ Cohere Integration (@hasanraiyan)
- ✅ Dynamic model max token length (@hasanraiyan)
- ✅ Better prompt enhancing (@SujalXplores)
- ✅ Prompt caching (@SujalXplores)
- ✅ Load local projects into the app (@wonderwhy-er)
- ✅ Together Integration (@mouimet-infinisoft)
- ✅ Mobile friendly (@qwikode)
- ✅ Better prompt enhancing (@SujalXplores)
- ✅ Attach images to prompts (@atrokhym)(@stijnus)
- ✅ Added Git Clone button (@thecodacus)
- ✅ Git Import from url (@thecodacus)
- ✅ PromptLibrary to have different variations of prompts for different use cases (@thecodacus)
- ✅ Detect package.json and commands to auto install & run preview for folder and git import (@wonderwhy-er)
- ✅ Selection tool to target changes visually (@emcconnell)
- ✅ Detect terminal Errors and ask bolt to fix it (@thecodacus)
- ✅ Detect preview Errors and ask bolt to fix it (@wonderwhy-er)
- ✅ Add Starter Template Options (@thecodacus)
- ✅ Perplexity Integration (@meetpateltech)
- ✅ AWS Bedrock Integration (@kunjabijukchhe)
- ✅ Add a "Diff View" to see the changes (@toddyclipsgg)
- ⬜ **HIGH PRIORITY** - Prevent bolt from rewriting files as often (file locking and diffs)
- ⬜ **HIGH PRIORITY** - Better prompting for smaller LLMs (code window sometimes doesn't start)
- ⬜ **HIGH PRIORITY** - Run agents in the backend as opposed to a single model call
- ✅ Deploy directly to Netlify (@xKevIsDev)
- ⬜ Supabase Integration
- ⬜ Have LLM plan the project in a MD file for better results/transparency
- ⬜ VSCode Integration with git-like confirmations
- ⬜ Upload documents for knowledge - UI design templates, a code base to reference coding style, etc.
- ⬜ Voice prompting
- ⬜ Azure Open AI API Integration
- ⬜ Vertex AI Integration
- ⬜ Granite Integration
- ✅ Popout Window for Web Container(@stijnus)
- ✅ Ability to change Popout window size (@stijnus)

## Features

- **AI-powered full-stack web development** for **NodeJS based applications** directly in your browser.
- **Support for multiple LLMs** with an extensible architecture to integrate additional models.
- **Attach images to prompts** for better contextual understanding.
- **Integrated terminal** to view output of LLM-run commands.
- **Revert code to earlier versions** for easier debugging and quicker changes.
- **Download projects as ZIP** for easy portability Sync to a folder on the host.
- **Integration-ready Docker support** for a hassle-free setup.
- **Deploy** directly to **Netlify**

## Setup

If you're new to installing software from GitHub, don't worry! If you encounter any issues, feel free to submit an "issue" using the provided links or improve this documentation by forking the repository, editing the instructions, and submitting a pull request. The following instruction will help you get the stable branch up and running on your local machine in no time.

Let's get you up and running with the stable version of Bolt.DIY!

## Quick Download

[![Download Latest Release](https://img.shields.io/github/v/release/stackblitz-labs/bolt.diy?label=Download%20Bolt&sort=semver)](https://github.com/stackblitz-labs/bolt.diy/releases/latest) ← Click here to go the the latest release version!

- Next **click source.zip**

## Prerequisites

Before you begin, you'll need to install two important pieces of software:

### Install Node.js

Node.js is required to run the application.

1. Visit the [Node.js Download Page](https://nodejs.org/en/download/)
2. Download the "LTS" (Long Term Support) version for your operating system
3. Run the installer, accepting the default settings
4. Verify Node.js is properly installed:
   - **For Windows Users**:
     1. Press `Windows + R`
     2. Type "sysdm.cpl" and press Enter
     3. Go to "Advanced" tab → "Environment Variables"
     4. Check if `Node.js` appears in the "Path" variable
   - **For Mac/Linux Users**:
     1. Open Terminal
     2. Type this command:
        ```bash
        echo $PATH
        ```
     3. Look for `/usr/local/bin` in the output

## Running the Application

You have two options for running Bolt.DIY: directly on your machine or using Docker.

### Option 1: Direct Installation (Recommended for Beginners)

1. **Install Package Manager (pnpm)**:

   ```bash
   npm install -g pnpm
   ```

2. **Install Project Dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the Application**:

   ```bash
   pnpm run dev
   ```
   
### Option 2: Using Docker

This option requires some familiarity with Docker but provides a more isolated environment.

#### Additional Prerequisite

- Install Docker: [Download Docker](https://www.docker.com/)

#### Steps:

1. **Build the Docker Image**:

   ```bash
   # Using npm script:
   npm run dockerbuild

   # OR using direct Docker command:
   docker build . --target bolt-ai-development
   ```

2. **Run the Container**:
   ```bash
   docker compose --profile development up
   ```

## Configuring API Keys and Providers

### Adding Your API Keys

Setting up your API keys in Bolt.DIY is straightforward:

1. Open the home page (main interface)
2. Select your desired provider from the dropdown menu
3. Click the pencil (edit) icon
4. Enter your API key in the secure input field

![API Key Configuration Interface](./docs/images/api-key-ui-section.png)

### Configuring Custom Base URLs

For providers that support custom base URLs (such as Ollama or LM Studio), follow these steps:

1. Click the settings icon in the sidebar to open the settings menu
   ![Settings Button Location](./docs/images/bolt-settings-button.png)

2. Navigate to the "Providers" tab
3. Search for your provider using the search bar
4. Enter your custom base URL in the designated field
   ![Provider Base URL Configuration](./docs/images/provider-base-url.png)

> **Note**: Custom base URLs are particularly useful when running local instances of AI models or using custom API endpoints.

### Supported Providers

- Ollama
- LM Studio
- OpenAILike

## Setup Using Git (For Developers only)

This method is recommended for developers who want to:

- Contribute to the project
- Stay updated with the latest changes
- Switch between different versions
- Create custom modifications

#### Prerequisites

1. Install Git: [Download Git](https://git-scm.com/downloads)

#### Initial Setup

1. **Clone the Repository**:

   ```bash
   git clone -b stable https://github.com/stackblitz-labs/bolt.diy.git
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd bolt.diy
   ```

3. **Install Dependencies**:

   ```bash
   pnpm install
   ```

4. **Start the Development Server**:
   ```bash
   pnpm run dev
   ```

5. **(OPTIONAL)** Switch to the Main Branch if you want to use pre-release/testbranch:
   ```bash
   git checkout main
   pnpm install
   pnpm run dev
   ```
  Hint: Be aware that this can have beta-features and more likely got bugs than the stable release

>**Open the WebUI to test (Default: http://localhost:5173)**
>   - Beginngers: 
>     - Try to use a sophisticated Provider/Model like Anthropic with Claude Sonnet 3.x Models to get best results
>     - Explanation: The System Prompt currently implemented in bolt.diy cant cover the best performance for all providers and models out there. So it works better with some models, then other, even if the models itself are perfect for >programming
>     - Future: Planned is a Plugin/Extentions-Library so there can be different System Prompts for different Models, which will help to get better results

#### Staying Updated

To get the latest changes from the repository:

1. **Save Your Local Changes** (if any):

   ```bash
   git stash
   ```

2. **Pull Latest Updates**:

   ```bash
   git pull 
   ```

3. **Update Dependencies**:

   ```bash
   pnpm install
   ```

4. **Restore Your Local Changes** (if any):
   ```bash
   git stash pop
   ```

#### Troubleshooting Git Setup

If you encounter issues:

1. **Clean Installation**:

   ```bash
   # Remove node modules and lock files
   rm -rf node_modules pnpm-lock.yaml

   # Clear pnpm cache
   pnpm store prune

   # Reinstall dependencies
   pnpm install
   ```

2. **Reset Local Changes**:
   ```bash
   # Discard all local changes
   git reset --hard origin/main
   ```

Remember to always commit your local changes or stash them before pulling updates to avoid conflicts.

---

## 🚀 Automatic Deployment

This project is configured for automatic deployment to Cloudflare Pages using GitHub Actions.

### Prerequisites

1. **Cloudflare Account Setup**:
   - Create a Cloudflare account
   - Get your Account ID from the dashboard
   - Create a Pages project

2. **GitHub Secrets Setup**:
   Add the following secrets to your GitHub repository:
   ```
   CLOUDFLARE_API_TOKEN=your_api_token_here
   CLOUDFLARE_ACCOUNT_ID=your_account_id_here
   CLOUDFLARE_PAGES_PROJECT_NAME=your_project_name_here
   ```
   
   **How to get these values:**
   - **CLOUDFLARE_API_TOKEN**: Go to Cloudflare Dashboard → My Profile → API Tokens → Create Token
   - **CLOUDFLARE_ACCOUNT_ID**: Found in Cloudflare Dashboard → Right sidebar → Account ID
   - **CLOUDFLARE_PAGES_PROJECT_NAME**: Your Cloudflare Pages project name

### Deployment Workflow

- **Main Branch**: Automatically deploys to production
- **Pull Requests**: Creates preview deployments
- **Manual Trigger**: Use "workflow_dispatch" to manually trigger deployment

### Manual Deployment

If you need to deploy manually:

```bash
# Deploy to production
pnpm run deploy:production

# Deploy to staging
pnpm run deploy:staging

# Deploy to default environment
pnpm run deploy
```

### Environment Variables

Make sure to set these environment variables in Cloudflare Pages:

- `NODE_ENV=production`
- Any API keys or configuration needed by your application

### Monitoring & Analytics

- **Deployment Status**: Check GitHub Actions for deployment status
- **Performance**: Monitor performance in Cloudflare Analytics
- **Bundle Analysis**: Review bundle size reports in the workflow
- **Security**: Automated security audits run weekly
- **Dependencies**: Automatic dependency updates with Dependabot
- **Performance**: Lighthouse CI runs on production deployments
- **Code Quality**: Automated linting, formatting, and type checking
- **Automated Workflows**: Comprehensive CI/CD pipeline with multiple checks
- **Preview Deployments**: Automatic preview deployments for pull requests
- **Bundle Analysis**: Detailed bundle size analysis and optimization recommendations
- **Dependency Management**: Automated dependency updates with security scanning
- **Monitoring**: Real-time monitoring and alerting for deployment status
- **Testing**: Comprehensive test suite with coverage reporting
- **Documentation**: Comprehensive documentation and issue templates
- **Community**: Active community support and contribution guidelines
- **Open Source**: MIT licensed with transparent development process
- **Enterprise Ready**: Production-ready with enterprise-grade security and performance
- **Scalable**: Built for scale with modern cloud infrastructure
- **Future Proof**: Built with modern technologies and best practices
- **Maintained**: Active maintenance and regular updates
- **Supported**: Comprehensive support and documentation
- **Reliable**: Stable and reliable with comprehensive testing
- **Fast**: Optimized for performance and speed
- **Secure**: Built with security best practices and regular audits
- **Accessible**: Built with accessibility in mind
- **Modern**: Built with modern web technologies and standards
- **Flexible**: Highly customizable and extensible
- **Innovative**: Cutting-edge features and technologies
- **Community Driven**: Built by and for the community
- **Transparent**: Open development process and clear roadmap
- **Quality**: High-quality code with comprehensive testing
- **Production Ready**: Battle-tested in production environments
- **Well Documented**: Comprehensive documentation and examples
- **Easy to Use**: Simple and intuitive interface
- **Developer Friendly**: Built with developers in mind
- **Extensible**: Easy to extend and customize
- **Maintainable**: Clean and maintainable codebase
- **Robust**: Handles edge cases and errors gracefully
- **Efficient**: Optimized for performance and resource usage
- **Scalable**: Designed to handle growth and increased load
- **Reliable**: Consistent and dependable performance
- **Secure**: Built with security as a priority
- **Compliant**: Follows industry standards and best practices
- **Future-Proof**: Built to adapt to changing requirements
- **Innovative**: Pushes the boundaries of what's possible
- **Community-Driven**: Built by and for the community
- **Open Source**: Free and open source software
- **Transparent**: Open development process and clear roadmap

---

## Available Scripts

### Development
- **`pnpm run dev`**: Starts the development server.
- **`pnpm run build`**: Builds the project for production.
- **`pnpm run build:analyze`**: Builds with bundle analysis.
- **`pnpm run start`**: Runs the built application locally using Wrangler Pages.
- **`pnpm run preview`**: Builds and runs the production build locally.

### Testing & Quality
- **`pnpm test`**: Runs the test suite using Vitest.
- **`pnpm run test:watch`**: Runs tests in watch mode.
- **`pnpm run test:coverage`**: Runs tests with coverage.
- **`pnpm run typecheck`**: Runs TypeScript type checking.
- **`pnpm run lint`**: Runs ESLint.
- **`pnpm run lint:fix`**: Automatically fixes linting issues.
- **`pnpm run format`**: Formats code with Prettier.
- **`pnpm run format:check`**: Checks code formatting.

### Deployment
- **`pnpm run deploy`**: Deploys the project to Cloudflare Pages.
- **`pnpm run deploy:staging`**: Deploys to staging environment.
- **`pnpm run deploy:production`**: Deploys to production environment.
- **`pnpm run ci:build`**: Full CI build process.

### Security
- **`pnpm run security:audit`**: Runs security audit.
- **`pnpm run security:outdated`**: Checks for outdated dependencies.
- **`pnpm run deps:check`**: Checks for outdated dependencies and security issues.
- **`pnpm run deps:update`**: Updates all dependencies to latest versions.
- **`pnpm run deps:update-interactive`**: Interactive dependency updates.
- **`pnpm run deps:update-latest`**: Updates all dependencies to latest versions.

### Utilities
- **`pnpm run typegen`**: Generates TypeScript types using Wrangler.
- **`pnpm run clean`**: Cleans build artifacts.

---

## Troubleshooting

Common issues and solutions:

1. **Build Failures**: Check the build logs in GitHub Actions
2. **Deployment Errors**: Verify Cloudflare credentials and project settings
3. **Performance Issues**: Review bundle analysis in the workflow
4. **Security Issues**: Run `pnpm run security:audit` to check for vulnerabilities
5. **Dependency Issues**: Run `pnpm run deps:check` to check for outdated packages
6. **Cache Issues**: Clear pnpm cache with `pnpm store prune`

---

## Contributing

We welcome contributions! Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

---

## Roadmap

Explore upcoming features and priorities on our [Roadmap](https://roadmap.sh/r/ottodev-roadmap-2ovzo).

---

## FAQ

For answers to common questions, issues, and to see a list of recommended models, visit our [FAQ Page](FAQ.md).


# Licensing
**Who needs a commercial WebContainer API license?**

bolt.diy source code is distributed as MIT, but it uses WebContainers API that [requires licensing](https://webcontainers.io/enterprise) for production usage in a commercial, for-profit setting. (Prototypes or POCs do not require a commercial license.) If you're using the API to meet the needs of your customers, prospective customers, and/or employees, you need a license to ensure compliance with our Terms of Service. Usage of the API in violation of these terms may result in your access being revoked.
