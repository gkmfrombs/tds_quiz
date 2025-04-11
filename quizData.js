const quizData = [
  { question: "What does the command uv run script.py do?", options: ["Runs a Python script using uv", "Compiles a Python script", "Deletes a Python script", "Lists Python scripts"], correctAnswer: 0 },
  { question: "Which file format is used for uv dependency specification?", options: ["requirements.txt", "environment.yml", "pyproject.toml", "package.json"], correctAnswer: 2 },
  { question: "What command formats code using Prettier?", options: ["npx prettier --write .", "prettier format", "npm format", "npx format"], correctAnswer: 0 },
  { question: "Which tool is used to inspect web requests in a browser?", options: ["Console tab", "Debugger", "Network tab in DevTools", "Elements tab"], correctAnswer: 2 },
  { question: "What does .gitignore do?", options: ["Deletes files", "Ignores files from Git tracking", "Backs up files", "Encrypts files"], correctAnswer: 1 },
  { question: "What file extension is used for JSON files?", options: [".js", ".json", ".txt", ".xml"], correctAnswer: 1 },
  { question: "Which command lists all files including hidden ones in Bash?", options: ["ls", "ls -a", "dir", "list all"], correctAnswer: 1 },
  { question: "What is the primary use of cat in Unix?", options: ["Create a file", "Move a file", "Display file contents", "Copy a file"], correctAnswer: 2 },
  { question: "What does git status show?", options: ["Commit history", "Branches", "File changes not committed", "Remote URL"], correctAnswer: 2 },
  { question: "Which language is used to define HTML styles?", options: ["JavaScript", "Python", "HTML", "CSS"], correctAnswer: 3 },
  { question: "Which command clones a GitHub repository?", options: ["git fork", "git copy", "git clone", "git pull"], correctAnswer: 2 },
  { question: "Which of the following is a terminal emulator?", options: ["VS Code", "Chrome", "Terminal", "Finder"], correctAnswer: 2 },
  { question: "What command initializes a Git repository?", options: ["git start", "git init", "git new", "git config"], correctAnswer: 1 },
  { question: "What is the main purpose of JSON?", options: ["Create tables", "API response formatting", "Style web pages", "Debug code"], correctAnswer: 1 },
  { question: "What does Ctrl + Shift + P do in VS Code?", options: ["Open settings", "Run script", "Open terminal", "Opens command palette"], correctAnswer: 3 },
  { question: "What does uvicorn do in a Python project?", options: ["Compiles code", "Runs tests", "Runs FastAPI app", "Creates virtual environment"], correctAnswer: 2 },
  { question: "Which tool helps visualize Git commit history?", options: ["git branch", "git history", "git log", "git status"], correctAnswer: 2 },
  { question: "What is the output of pwd in bash?", options: ["Previous working directory", "Parent directory", "Current working directory", "List of directories"], correctAnswer: 2 },
  { question: "What type of file is .toml?", options: ["Executable", "Script", "Configuration", "Log"], correctAnswer: 2 },
  { question: "Which CSS selector selects all <p> elements?", options: ["#p", ".p", "p {}", "p[]"], correctAnswer: 2 },
  { question: "What does mkdir project do?", options: ["Opens a file", "Compiles code", "Makes a new directory", "Creates a project file"], correctAnswer: 2 },
  { question: "What does ls show by default?", options: ["Hidden files", "Folder contents", "Running processes", "File sizes"], correctAnswer: 1 },
  { question: "What is the use of npx in JavaScript tooling?", options: ["Install packages", "Run packages without installing globally", "Remove packages", "Update packages"], correctAnswer: 1 },
  { question: "What does the .vscode folder contain?", options: ["Images", "Packages", "Editor settings", "Logs"], correctAnswer: 2 },
  { question: "What does echo do in the terminal?", options: ["Saves file", "Shows a string or variable", "Opens browser", "Runs script"], correctAnswer: 1 },
  { question: "Which command checks your Git configuration?", options: ["git list", "git config --list", "git config", "git check"], correctAnswer: 1 },
  { question: "What does touch file.txt do?", options: ["Deletes a file", "Modifies file", "Creates an empty file", "Copies file"], correctAnswer: 2 },
  { question: "What is the command to install a Python package with uv?", options: ["uv install package-name", "uv pip install package-name", "pip install package-name", "uv add package-name"], correctAnswer: 1 },
  { question: "Which command shows the current branch in Git?", options: ["git branch", "git status", "git head", "git show-branch"], correctAnswer: 0 },
  { question: "What is the extension of a Bash script file?", options: [".bash", ".script", ".sh", ".bsh"], correctAnswer: 2 },
  { question: "What tool is used to version control code?", options: ["NPM", "Git", "Docker", "Python"], correctAnswer: 1 },
  { question: "Which keyboard shortcut opens settings in VS Code?", options: ["Ctrl + S", "Ctrl + ,", "Ctrl + P", "Ctrl + Shift + S"], correctAnswer: 1 },
  { question: "What file defines settings for VS Code extensions?", options: ["config.json", "extensions.json", "settings.json", "launch.json"], correctAnswer: 2 },
  { question: "What does the git pull command do?", options: ["Push changes", "Fetches and merges changes", "Rebase commits", "Deletes branch"], correctAnswer: 1 },
  { question: "Which command stages all modified files in Git?", options: ["git stage all", "git add .", "git commit -a", "git save"], correctAnswer: 1 },
  { question: "What command displays the manual page in Unix?", options: ["help", "man", "doc", "manual"], correctAnswer: 1 },
  { question: "What does cd .. do in terminal?", options: ["Goes to root", "Goes to home", "Moves up one directory level", "Opens directory"], correctAnswer: 2 },
  { question: "Which language is used in .ipynb files?", options: ["Python", "Markdown", "R", "JavaScript"], correctAnswer: 0 },
  { question: "What does Ctrl + backtick open in VS Code?", options: ["New file", "Command palette", "Integrated terminal", "Search bar"], correctAnswer: 2 },
  { question: "What command runs a Python file?", options: ["python filename.py", "run filename.py", "python3 run", "py execute"], correctAnswer: 0 },
  { question: "What file tracks Python dependencies?", options: ["packages.txt", "pyproject.toml", "requirements.txt", "dependencies.json"], correctAnswer: 2 },
  { question: "What does git commit -m do?", options: ["Merge changes", "Push to remote", "Creates a commit with message", "Initialize repo"], correctAnswer: 2 },
  { question: "Which command updates packages in uv?", options: ["uv update", "uv pip upgrade", "uv pip install -U package-name", "pip upgrade"], correctAnswer: 2 },
  { question: "What’s the main use of Markdown?", options: ["Draw charts", "Write CSS", "Write formatted text documents", "Run SQL"], correctAnswer: 2 },
  { question: "What’s the command to delete a file in terminal?", options: ["del", "rm filename", "delete", "erase"], correctAnswer: 1 },
  { question: "How to check the current working directory?", options: ["pwd", "ls", "cd", "dir"], correctAnswer: 0 },
  { question: "Which command lists all installed pip packages?", options: ["pip install", "pip list", "pip packages", "list pip"], correctAnswer: 1 },
  { question: "What is main.py typically used for?", options: ["Configuration", "Entry point for Python program", "Data storage", "Logging"], correctAnswer: 1 },
  { question: "What’s a linter used for?", options: ["Run code", "Format text", "Checking code for errors/style", "Convert code"], correctAnswer: 2 },
  { question: "What does the json module in Python do?", options: ["Compress JSON", "Parses and generates JSON data", "Encrypts JSON", "Fetches JSON from web"], correctAnswer: 1 },
  {
    "question": "Which file extension is used for Markdown?",
    "options": [
      ".md",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which tool is used to host static websites directly from GitHub?",
    "options": [
      "GitHub Pages",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What image format supports both lossy and lossless compression?",
    "options": [
      "WEBP",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Python library is used for image compression?",
    "options": [
      "PIL",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which format is best for compressing vector graphics?",
    "options": [
      "SVG",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the command to deploy a FastAPI app locally?",
    "options": [
      "uvicorn main:app",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What platform offers CI/CD pipelines with .yml configuration?",
    "options": [
      "GitHub Actions",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which CLI tool initializes a GitHub repository?",
    "options": [
      "gh repo create",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What command compresses an image to WebP using CLI?",
    "options": [
      "cwebp",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Colab feature allows Google Drive access?",
    "options": [
      "from google.colab import drive",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What file format is used for Docker images?",
    "options": [
      ".tar",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which cloud platform supports serverless Python functions?",
    "options": [
      "Vercel",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does a .dockerignore  file do?",
    "options": [
      "Excludes files from Docker context",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the main purpose of GitHub Actions?",
    "options": [
      "Automating workflows",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the syntax to define a job in GitHub Actions?",
    "options": [
      "YAML",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does docker ps  show?",
    "options": [
      "Running containers",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of Dockerfile ?",
    "options": [
      "Builds container image",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the extension for compressed images using JPEG?",
    "options": [
      ".jpg",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the role of requirements.txt  in deployment?",
    "options": [
      "Lists dependencies",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which file helps deploy markdown content to GitHub Pages?",
    "options": [
      "index.md",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool runs Jupyter Notebooks in the cloud?",
    "options": [
      "Google Colab",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does vercel deploy  do?",
    "options": [
      "Deploys site to Vercel",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which file defines GitHub Action workflows?",
    "options": [
      ".github/workflows/*.yml",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which image format is smallest for web use?",
    "options": [
      "WEBP",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does ngrok  do?",
    "options": [
      "Creates public URL for local app",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does a FastAPI @app.get(\"/\")  define?",
    "options": [
      "GET route",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What command builds a Docker image?",
    "options": [
      "docker build .",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of COPY  in Dockerfile?",
    "options": [
      "Copy files into container",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which file contains metadata for Python packages?",
    "options": [
      "pyproject.toml",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the default port for uvicorn?",
    "options": [
      "8000",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What command runs a container in background?",
    "options": [
      "docker run -d",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s used to write documentation with formatting?",
    "options": [
      "Markdown",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does CMD  in Dockerfile do?",
    "options": [
      "Sets default run command",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which format is best for screenshots?",
    "options": [
      "PNG",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the main benefit of CI/CD?",
    "options": [
      "Automate testing and deployment",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does docker stop  do?",
    "options": [
      "Stops a running container",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is README.md  used for?",
    "options": [
      "Project documentation",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does EXPOSE 8000  do in Dockerfile?",
    "options": [
      "Exposes port 8000",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which tool helps you preview FastAPI docs?",
    "options": [
      "Swagger UI",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is cwebp -q 80  used for?",
    "options": [
      "Compress to WebP at 80% quality",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the extension for Vercel config file?",
    "options": [
      "vercel.json",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is ENTRYPOINT  in Dockerfile?",
    "options": [
      "Main execution command",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the format for GitHub Actions steps?",
    "options": [
      "jobs > steps > run",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which Colab method installs a pip package?",
    "options": [
      "!pip install package -name",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is Llamafile used for?",
    "options": [
      "Running local LLMs",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the purpose of image: tag  in Docker Compose?",
    "options": [
      "Specifies container image and version",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the purpose of volumes:  in Docker Compose?",
    "options": [
      "Mounts local folders into containers",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the main use of serve  in Vercel?",
    "options": [
      "Static file hosting",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which environment does GitHub Actions run on?",
    "options": [
      "Ubuntu (by default)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is base_url  used for in MkDocs?",
    "options": [
      "Set root path for documentation  \nTDS 2025 \u2013 Large Language Models (50 MCQs)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is an embedding in LLMs?",
    "options": [
      "A vector representing meaning",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does GPT stand for?",
    "options": [
      "Generative Pre -trained Transformer",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What OpenAI feature ensures structured output?",
    "options": [
      "response_format: json_schema",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which model supports vision input?",
    "options": [
      "gpt-4o",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of tokenizers in LLMs?",
    "options": [
      "Split text into subunits",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s a common embedding dimension size?",
    "options": [
      "1536",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which API is used to get embeddings from OpenAI?",
    "options": [
      "/v1/embeddings",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is cosine similarity used for?",
    "options": [
      "Measuring similarity between vectors",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the main use of RAG (Retrieval Augmented Generation)?",
    "options": [
      "Enhance LLMs with external knowledge",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a prompt?",
    "options": [
      "Input to the model",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does function calling enable?",
    "options": [
      "Structured outputs via API schema",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s a typical use of LLM for extraction?",
    "options": [
      "Pull entities from text",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a hallucination in LLMs?",
    "options": [
      "Incorrect but plausible output",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the OpenAI chat endpoint?",
    "options": [
      "/v1/chat/completions",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which parameter controls randomness in OpenAI?",
    "options": [
      "temperature",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the token cost of gpt -3.5-turbo?",
    "options": [
      "Lower than gpt -4",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the output of embeddings API?",
    "options": [
      "List of floats",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which model supports multimodal inputs?",
    "options": [
      "gpt-4o",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is chunking in LLMs?",
    "options": [
      "Splitting long texts into parts",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the best strategy for summarization?",
    "options": [
      "Prompt the model with TL;DR",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of top_p ?",
    "options": [
      "Controls diversity of output",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does max_tokens  limit?",
    "options": [
      "Output length",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a system message in OpenAI chat?",
    "options": [
      "Instruction to set behavior",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a logit bias?",
    "options": [
      "Force or suppress tokens",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What library can visualize embeddings?",
    "options": [
      "t-SNE / PCA (e.g., in sklearn)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does embedding search retrieve?",
    "options": [
      "Similar documents",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What model is best for extraction?",
    "options": [
      "gpt-4-turbo",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a vector database?",
    "options": [
      "Stores embeddings for fast lookup",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s the unit of billing for OpenAI APIs?",
    "options": [
      "Tokens",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "How many tokens is \u201cHello world\u201d?",
    "options": [
      "About 3 tokens",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the max token limit of gpt -4o?",
    "options": [
      "128k tokens",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is streaming in OpenAI API?",
    "options": [
      "Partial output as it\u2019s generated",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which API parameter defines the model used?",
    "options": [
      "model",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the difference between gpt -4 and gpt -4o?",
    "options": [
      "gpt-4o supports vision, audio, and is faster",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does the embeddings vector length depend on?",
    "options": [
      "The model used",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is base64 used for in LLMs?",
    "options": [
      "Encode image input",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is vector similarity used for?",
    "options": [
      "Matching documents with queries",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does tool_choice  parameter do?",
    "options": [
      "Choose a specific function call",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which model is cost -efficient for summarization?",
    "options": [
      "gpt-",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "5-turbo  \n40. What does the json mode in OpenAI response_format do?",
    "options": [
      "Outputs machine -readable JSON",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s a key challenge in prompt engineering?",
    "options": [
      "Avoiding hallucinations",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is \u201czero -shot\u201d prompting?",
    "options": [
      "No examples given",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a use of \u201cfew -shot\u201d prompting?",
    "options": [
      "Provide examples in prompt",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does tools  in function calling specify?",
    "options": [
      "Available functions",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is token overlap in chunking?",
    "options": [
      "Shared tokens between chunks",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the format of OpenAI image input?",
    "options": [
      "base64 or URL",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is cosine distance value range?",
    "options": [
      "-1 to 1",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is JSON schema used for?",
    "options": [
      "Validate structured data",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is function calling\u2019s return format?",
    "options": [
      "Arguments dictionary",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does stream=True  do in OpenAI?",
    "options": [
      "Returns content incrementally  \nTDS 2025 \u2013 Data Sourcing (50 MCQs)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What type of data is HTML content?",
    "options": [
      "Semi -structured",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which tool helps extract tables from PDFs?",
    "options": [
      "Tabula",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What API is used to retrieve geographic data?",
    "options": [
      "Nominatim",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the file format of scraped data from IMDb with JS?",
    "options": [
      "JSON",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which Excel function is useful for importing web data?",
    "options": [
      "WEBSERVICE()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which Google Sheets function fetches data from a URL?",
    "options": [
      "IMPORTXML()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a primary challenge in data scraping?",
    "options": [
      "Site structure changes",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the result of using requests.get()  in Python?",
    "options": [
      "HTML response",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Python library is commonly used for web scraping?",
    "options": [
      "BeautifulSoup",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the default file format exported by Tabula?",
    "options": [
      "CSV",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What JavaScript method fetches API data?",
    "options": [
      "fetch()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does the scrapy  library do?",
    "options": [
      "Scrapes web data",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which tool automates scraping tasks on GitHub?",
    "options": [
      "GitHub Actions",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the format of Google Sheets scraped data?",
    "options": [
      "Spreadsheet",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a selector in HTML parsing?",
    "options": [
      "A pattern to match elements (like CSS)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s a drawback of scraping?",
    "options": [
      "Legal and ethical concerns",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the format of data returned by APIs like weather or maps?",
    "options": [
      "JSON",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What method converts HTML to text in Python?",
    "options": [
      ".get_text()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool allows automated scraping with scheduling?",
    "options": [
      "GitHub Actions",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of the pandas.read_html()  function?",
    "options": [
      "Extract tables from HTML",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What library is used to convert PDFs to Markdown?",
    "options": [
      "pdf2md",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which data source gives structured global datasets?",
    "options": [
      "data.gov",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a typical structure of API response?",
    "options": [
      "Nested JSON",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What API is best for accessing Wikipedia data?",
    "options": [
      "MediaWiki API",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool extracts tabular data from PDF into Excel?",
    "options": [
      "Tabula",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does print(soup.prettify())  do?",
    "options": [
      "Outputs formatted HTML",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What format is suitable for scraping coordinates?",
    "options": [
      "GeoJSON",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which Python package automates browser scraping?",
    "options": [
      "Selenium",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the first step in scraping?",
    "options": [
      "Inspect the site structure",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What CSS selector selects all <div class=\"item\"> ?",
    "options": [
      "div.item",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of headers  in a Python GET request?",
    "options": [
      "Imitate a browser",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is rate limiting in scraping?",
    "options": [
      "Restriction on number of requests",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does res.json()  return?",
    "options": [
      "Parsed JSON from response",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which format is easier to scrape: CSV or PDF?",
    "options": [
      "CSV",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool can extract bounding boxes from maps?",
    "options": [
      "Nominatim API",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .find_all('a')  return?",
    "options": [
      "All anchor tags",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What API is used to find Pok\u00e9mon data?",
    "options": [
      "PokeAPI",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does ul li.highlight:last -child  select?",
    "options": [
      "Last list item with class highlight",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the most reliable format for API consumption?",
    "options": [
      "JSON",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is api.weather .com  an example of?",
    "options": [
      "REST API endpoint",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does a scraper need to handle dynamic pages?",
    "options": [
      "JavaScript rendering",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does time.sleep(1)  do in scraping?",
    "options": [
      "Delays request to avoid detection",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What can inspect element  help identify?",
    "options": [
      "HTML structure for scraping",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the risk of scraping without permission?",
    "options": [
      "IP bans / legal notice",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What kind of scraping extracts data from videos?",
    "options": [
      "LLM video screen -scraping",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What format is commonly scraped from Wikipedia tables?",
    "options": [
      "HTML table",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which language is most used in web scraping?",
    "options": [
      "Python",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What format is suitable for scraping hierarchical data?",
    "options": [
      "JSON or XML",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool converts PDF text using OCR?",
    "options": [
      "Tesseract",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a common fallback in scraping failures?",
    "options": [
      "Cached pages / alternative selectors  \nTDS 2025 \u2013 Data Preparation (50 MCQs)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which tool is best for data cleaning with a visual interface?",
    "options": [
      "OpenRefine",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel function splits text into columns?",
    "options": [
      "TEXTSPLIT",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which command in Bash removes duplicate lines?",
    "options": [
      "sort | uniq",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does df.dropna()  do in pandas?",
    "options": [
      "Removes rows with missing values",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which function in pandas fills missing data?",
    "options": [
      "fillna()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the purpose of .str .lower()  in pandas?",
    "options": [
      "Converts text to lowercase",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the role of Apache Airflow?",
    "options": [
      "Automate data workflows",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does df.info()  show?",
    "options": [
      "Summary of DataFrame",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s a common format for raw datasets?",
    "options": [
      "CSV",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is data normalization?",
    "options": [
      "Scaling values to a range",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does pd.read_csv()  do?",
    "options": [
      "Loads a CSV into pandas",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What function splits columns in Excel?",
    "options": [
      "Text to Columns",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does lambda  in Python represent?",
    "options": [
      "Anonymous function",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .apply()  do in pandas?",
    "options": [
      "Applies a function to Series or DataFrame",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does axis=1  mean in pandas?",
    "options": [
      "Operate across columns",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel function removes whitespace?",
    "options": [
      "TRIM()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the result of groupby()  in pandas?",
    "options": [
      "Aggregated groups",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .replace()  do in pandas?",
    "options": [
      "Substitutes values",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of regex in data prep?",
    "options": [
      "Pattern -based transformation",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a DataFrame?",
    "options": [
      "2D labeled data structure",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool is best for image resizing?",
    "options": [
      "mogrify",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is base64 encoding used for?",
    "options": [
      "Embed binary in text",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does split()  do in Python?",
    "options": [
      "Splits string into list",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does pd.to_datetime()  convert?",
    "options": [
      "String to datetime",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .isnull()  in pandas return?",
    "options": [
      "Boolean mask for missing values",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool extracts text from audio?",
    "options": [
      "Whisper",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a DAG in Airflow?",
    "options": [
      "Directed Acyclic Graph",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .astype(str)  do in pandas?",
    "options": [
      "Converts values to string type",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the Excel function for replacing characters?",
    "options": [
      "SUBSTITUTE()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does drop_duplicates()  do in pandas?",
    "options": [
      "Removes duplicate rows",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the difference between int and float  types?",
    "options": [
      "Integer vs. decimal",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does map()  do in Python?",
    "options": [
      "Applies function to iterable",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which method extracts entities with LLM?",
    "options": [
      "Named Entity Recognition",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What command joins CSV files in Bash?",
    "options": [
      "cat *.csv > combined.csv",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does json.loads()  do?",
    "options": [
      "Parses JSON string into Python",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of os module in Python?",
    "options": [
      "File and system operations",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is chunking in data prep?",
    "options": [
      "Dividing data into parts",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a typical delimiter in CSV files?",
    "options": [
      ",",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does sort_values()  in pandas do?",
    "options": [
      "Sorts DataFrame by column",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is pathlib  used for in Python?",
    "options": [
      "File path manipulation",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel function checks for blank?",
    "options": [
      "ISBLANK()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Python function reads Excel?",
    "options": [
      "pd.read_excel()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .head()  show in pandas?",
    "options": [
      "First rows of DataFrame",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a common file format for images?",
    "options": [
      "PNG",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does nlargest()  do in pandas?",
    "options": [
      "Gets top N values",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is data type conversion called?",
    "options": [
      "Type casting",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a common outlier removal method?",
    "options": [
      "IQR filtering",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the command to change file extension in bash?",
    "options": [
      "mv file.txt file.csv",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does enumerate()  do in Python?",
    "options": [
      "Adds index to iterable",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What\u2019s used to automate Excel operations?",
    "options": [
      "VBA or Python (openpyxl)  \nTDS 2025 \u2013 Data Analysis (50 MCQs)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does the CORREL function calculate in Excel?",
    "options": [
      "Correlation coefficient",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart best shows trends over time?",
    "options": [
      "Line chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What library is used for statistical analysis in Python?",
    "options": [
      "statsmodels",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What SQL clause groups records?",
    "options": [
      "GROUP BY",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which function identifies outliers using z -scores?",
    "options": [
      "scipy.stats.zscore",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel feature helps in forecasting?",
    "options": [
      "Forecast Sheet",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which function predicts future values in Excel?",
    "options": [
      "FORECAST()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What type of plot is used for correlation?",
    "options": [
      "Scatter plot",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the purpose of DuckDB in analysis?",
    "options": [
      "Run SQL on local files",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is used to visualize regression in seaborn?",
    "options": [
      "sns.regplot()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does R\u00b2 represent in regression?",
    "options": [
      "Goodness of fit",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which command counts rows in SQL?",
    "options": [
      "SELECT COUNT(*)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel function gives standard deviation?",
    "options": [
      "STDEV.P",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a histogram used for?",
    "options": [
      "Show distribution",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a pivot table used for?",
    "options": [
      "Summarize data",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which SQL command removes duplicates?",
    "options": [
      "SELECT DISTINCT",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .mean()  do in pandas?",
    "options": [
      "Calculates average",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Python library does correlation matrix?",
    "options": [
      "pandas",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is used for geospatial mapping in Python?",
    "options": [
      "geopandas",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart shows distribution of a variable?",
    "options": [
      "Histogram",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What type of analysis identifies cause -effect?",
    "options": [
      "Regression analysis",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is an outlier?",
    "options": [
      "Data point far from others",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What method detects anomalies in data?",
    "options": [
      "Isolation Forest",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .groupby()  in pandas do?",
    "options": [
      "Group and aggregate",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the purpose of .value_counts() ?",
    "options": [
      "Frequency of values",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which SQL function calculates average?",
    "options": [
      "AVG()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .describe()  return in pandas?",
    "options": [
      "Summary stats",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which function in seaborn draws boxplots?",
    "options": [
      "sns.boxplot()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is used to merge two tables in SQL?",
    "options": [
      "JOIN",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What visualizes pairwise relationships?",
    "options": [
      "Pairplot",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the output of .corr()  in pandas?",
    "options": [
      "Correlation matrix",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does a negative correlation mean?",
    "options": [
      "As one increases, the other decreases",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which function helps identify duplicates?",
    "options": [
      "duplicated()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the purpose of .nlargest() ?",
    "options": [
      "Get top N values",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What library provides QGIS integration?",
    "options": [
      "qgis",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is multicollinearity?",
    "options": [
      "Predictors are correlated",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What function does median in pandas?",
    "options": [
      ".median()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is logistic regression used for?",
    "options": [
      "Classification",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel chart shows proportions?",
    "options": [
      "Pie chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the syntax to calculate mean in SQL?",
    "options": [
      "SELECT AVG(column)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is normalization in analysis?",
    "options": [
      "Scaling features",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which test checks normal distribution?",
    "options": [
      "Shapiro -Wilk test",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What function shows cross -tabulation in pandas?",
    "options": [
      "pd.crosstab()",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a boxplot used for?",
    "options": [
      "Visualize distribution and outliers",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a use of .pivot_table()  in pandas?",
    "options": [
      "Aggregated summary",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which chart shows relationships between two variables?",
    "options": [
      "Scatter plot",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What library performs time series analysis?",
    "options": [
      "prophet",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does .quantile()  in pandas return?",
    "options": [
      "Value at percentile",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of .resample()  in time series?",
    "options": [
      "Change frequency",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What model is used for linear regression in Python?",
    "options": [
      "LinearRegression from sklearn  \nTDS 2025 \u2013 Data Visualization (50 MCQs)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart best shows trends over time?",
    "options": [
      "Line chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel chart is best for showing parts of a whole?",
    "options": [
      "Pie chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which Python library is commonly used for plotting?",
    "options": [
      "matplotlib",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the primary use of seaborn?",
    "options": [
      "Statistical visualization",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart shows correlation between two variables?",
    "options": [
      "Scatter plot",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of plt.bar()  in matplotlib?",
    "options": [
      "Draw bar chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool allows animation in PowerPoint?",
    "options": [
      "Morph transition",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which chart is best for showing forecasted values?",
    "options": [
      "Line chart with trendline",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a heatmap used for?",
    "options": [
      "Show intensity of data",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does sns.pairplot()  visualize?",
    "options": [
      "Pairwise relationships",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a good chart for network data?",
    "options": [
      "Network graph",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is Kumu used for?",
    "options": [
      "Network mapping",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What file format is used for vector graphics?",
    "options": [
      "SVG",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which chart is suitable for multivariate data?",
    "options": [
      "Radar chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does a boxplot show?",
    "options": [
      "Distribution and outliers",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart uses axes for dimensions and data?",
    "options": [
      "Radar chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is RAWGraphs?",
    "options": [
      "Data visualization tool",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which chart shows relative proportions?",
    "options": [
      "Treemap",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the best visual for comparison over time?",
    "options": [
      "Line chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool allows drag -and-drop storytelling?",
    "options": [
      "Flourish",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What type of chart does plt.hist()  create?",
    "options": [
      "Histogram",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What visualization shows correlation heat?",
    "options": [
      "Heatmap",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What tool can connect Google Sheets to dashboards?",
    "options": [
      "Google Data Studio",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a Sankey diagram used for?",
    "options": [
      "Flow distribution",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a good library for customizing charts?",
    "options": [
      "Plotly",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of fig, ax = plt.subplots() ?",
    "options": [
      "Create figure and axes",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What library helps in creating dashboards?",
    "options": [
      "Dash",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart is best for categorical distribution?",
    "options": [
      "Bar chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the use of sns.heatmap() ?",
    "options": [
      "Display correlation matrix",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is narrative visualization?",
    "options": [
      "Data storytelling",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel tool creates quick visual summaries?",
    "options": [
      "Quick Analysis",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is used for animated transitions in Flourish?",
    "options": [
      "Story feature",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart shows relationships in social data?",
    "options": [
      "Network graph",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart is best for a single key metric?",
    "options": [
      "KPI card / Gauge",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does plt.savefig()  do?",
    "options": [
      "Save figure as image",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which tool supports map visualizations?",
    "options": [
      "Google Data Studio",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does plt.title()  set?",
    "options": [
      "Chart title",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What chart is best for stock data?",
    "options": [
      "Candlestick chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is matplotlib\u2019s core object?",
    "options": [
      "Figure",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What type of chart is used for Gantt timelines?",
    "options": [
      "Gantt chart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which visual is best for sequential flow?",
    "options": [
      "Flowchart",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What Excel tool animates charts over time?",
    "options": [
      "Power Map / 3D Maps",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the best format for high -quality prints?",
    "options": [
      "PDF or SVG",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a donut chart?",
    "options": [
      "Pie chart with center cut out",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What visual best explains branching logic?",
    "options": [
      "Tree diagram",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does plt.xlabel()  set?",
    "options": [
      "X-axis label",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is used for real -time interactive plots?",
    "options": [
      "Bokeh or Plotly",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which tool visualizes code execution?",
    "options": [
      "Marimo / Jupyter Notebooks",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a typical file extension for vector charts?",
    "options": [
      ".svg",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the purpose of a dashboard?",
    "options": [
      "Summarize and monitor data visually",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": 0
  }
];