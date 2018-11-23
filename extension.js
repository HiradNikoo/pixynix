// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const request = require('request');
const baseUrl = 'http://www.digitalfarsi.com';
// The command has been defined in the package.json file
// Now provide the implementation of the command with  registerCommand
// The commandId parameter must match the command field in package.json
var commands = {
    'pixynix.showSearch' : function(){
        vscode.window.showInputBox({ placeHolder: 'Search for Music!' }).then(function(text){
            request('http://46.4.169.170:5001/', { json: true }, (err, res, body) => {
                if (err) { return console.log(err); }
                console.log(res);
                console.log(body);
            });
        });
        // const key = vscode.window.showInputBox({ placeHolder: 'Type the label of the item to reveal' });
        // if (key) {
        //     view.reveal({ key }, { focus: true, select: false, expand: true });
        // }
    },
    'pixynix.sayHello' : function () {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    },
    'pixynix.refresh' : function () {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    }
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "pixynix" is now active!');

    for(let command in commands) {
        context.subscriptions.push(vscode.commands.registerCommand(command, commands[command]));
    }
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;