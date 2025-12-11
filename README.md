
# 🛡️ Ansible Sign for VS Code
A VS Code extension to simplify the use of the `ansible-sign` tool, making it easy to **GPG-sign** all files in an Ansible project directly from the editor.

---

## ✨ Features
This extension provides a single, simple command to run the `ansible-sign` tool on the current workspace directory:
- **Command:** `Ansible Sign: Sign project (gpg-sign)`
- **Keyboard Shortcut:** `Ctrl + Alt + S` (or `Cmd + Alt + S` on macOS)
- **Mechanism:** Creates an integrated terminal, navigates to the project root directory, and executes the signing command.

---

## ⚙️ Prerequisites
This extension is a **wrapper** for an external tool. To use it, you must have:
1. **Visual Studio Code** installed.
2. The **`ansible-sign`** tool installed and available in your `$PATH`.
3. **GnuPG (GPG)** configured on your system to perform cryptographic signing.

> ℹ️ On POSIX systems (Linux, macOS), the extension ensures that the `GPG_TTY` environment variable is correctly set to allow interaction (password input) in the integrated terminal.

---

## 🚀 Installation
### 1. Installing the Extension
To install the extension, create a `.vsix` archive from the extension folder.
The extension folder must be at the root of the archive.

```bash
code --install-extension ansible-sign-vscode-0.1.0.vsix
```

Or graphically:
Install the .vsix file via: Extensions → ... → Install from VSIX...