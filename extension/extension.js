const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand('ansibleSign.signProject', async () => {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders || folders.length === 0) {
      vscode.window.showErrorMessage('Ouvre un dossier/projet avant de signer.');
      return;
    }
    const cwd = folders[0].uri.fsPath;

    const config = vscode.workspace.getConfiguration('ansibleSign');
    let command = config.get('command') || 'ansible-sign project gpg-sign .';
    const pathOverride = config.get('path');
    if (pathOverride && command.startsWith('ansible-sign')) {
      command = command.replace(/^ansible-sign/, `"${pathOverride}"`);
    }

    // On POSIX systems, prefix the command so GPG_TTY is set to the terminal device.
    // On Windows we don't prefix (Windows doesn't use GPG_TTY).
    const isWindows = (process.platform === 'win32');
    const prefix = isWindows ? '' : 'export GPG_TTY=$(tty) && ';
    const fullCommand = prefix + command;

    // Create an integrated terminal and run the command there so ANSI colors & interactions work
    const term = vscode.window.createTerminal({ name: 'Ansible Sign' });
    term.show(true);
    // change to workspace directory then run the command
    term.sendText(`cd "${cwd.replace(/"/g, '\\"')}"`);
    term.sendText(fullCommand);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}
module.exports = { activate, deactivate };
