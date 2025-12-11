# Ansible Sign

This extension runs the configured signing command in the integrated terminal.

On POSIX (Linux/macOS) the extension prefixes the command with:
  export GPG_TTY=$(tty) &&

This ensures GPG can find the terminal device when it needs to prompt for a passphrase.
On Windows the command is left unchanged.


## Prerequisites
This extension is a **wrapper** for an external tool. For it to work, you must have:
1. **Visual Studio Code** installed.
2. The **`ansible-sign`** tool installed and available in your `$PATH`.
3. **GnuPG (GPG)** configured on your system to perform cryptographic signing.

> On POSIX systems (Linux, macOS), the extension ensures that the `GPG_TTY` environment variable is correctly set to allow interaction (password input) in the integrated terminal.


## Configuration

- `ansibleSign.command` — full shell command to sign the project (default: `ansible-sign project gpg-sign .`)
- `ansibleSign.path` — optional path to the ansible-sign executable (can replace the leading `ansible-sign` in the default command)


## Usage
This extension provides a single, simple command to run the `ansible-sign` tool on the current workspace directory:
* **Command:** `Ansible Sign: Sign project (gpg-sign)`
* **Keyboard Shortcut:** `Ctrl + Alt + S` (or `Cmd + Alt + S` on macOS)
* **Mechanism:** Creates an integrated terminal, navigates to the project root directory, and executes the signing command.


