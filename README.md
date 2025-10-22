# Ansible Sign

This extension runs the configured signing command in the integrated terminal.

On POSIX (Linux/macOS) the extension prefixes the command with:
  export GPG_TTY=$(tty) &&

This ensures GPG can find the terminal device when it needs to prompt for a passphrase.
On Windows the command is left unchanged.

## Configuration

- `ansibleSign.command` — full shell command to sign the project (default: `ansible-sign project gpg-sign .`)
- `ansibleSign.path` — optional path to the ansible-sign executable (can replace the leading `ansible-sign` in the default command)

## Create the vsix file

In order to install the extension, we need to make a zip archive with .vsix as extension.
It needed to have the folder extension at the root of the archive

## Installation

1. Install the `.vsix` via: Extensions → ... → Install from VSIX...
2. Open a folder and run the command: Ansible Sign: Sign project (gpg-sign)


