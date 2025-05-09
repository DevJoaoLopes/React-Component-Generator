import * as vscode from 'vscode';
import { getTemplates } from '../';

export const verifyPermissionWriteFile = () => {
  if(!vscode.workspace.fs.isWritableFileSystem('file')) {
    return vscode.window.showErrorMessage('System does not allow creating files!!');
  }
};

export const createComponentFolder = (path: string, nameComponent: string) => {
  const uriParse = vscode.Uri.parse(path + '/' + nameComponent + '/');
  vscode.workspace.fs.createDirectory(uriParse);
};

export const createFilesReactComponent = (path: string, nameComponent: string) => {
  const baseUri = `${path}/${nameComponent}/${nameComponent}`;
  vscode.workspace.fs.writeFile(vscode.Uri.parse(path + '/' + nameComponent + '/index.ts'), new TextEncoder().encode(getTemplates(nameComponent, 'INDEX')));
  vscode.workspace.fs.writeFile(vscode.Uri.parse(baseUri + '.tsx'), new TextEncoder().encode(getTemplates(nameComponent, 'COMPONENT')));
  vscode.workspace.fs.writeFile(vscode.Uri.parse(baseUri + '.test.tsx'), new TextEncoder().encode(getTemplates(nameComponent, 'TEST')));
};