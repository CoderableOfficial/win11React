console.log('%cWin11React is a project by Coderable Official.', 'color: lightblue; font-size: x-large');

function removeWarning() {
  document.body.dataset.force = true;
}

window.pythonRunner = new BrythonRunner({
  stdout: {
    write(content) {
      window.pythonResult = content;
      window.pythonErr = 0;
    },
    flush() {},
  },
  stderr: {
    write(content) {
      window.pythonResult = content;
      window.pythonErr = 1;
    },
    flush() {},
  },
  stdin: {
    async readline() {
      var userInput = prompt();
      console.log('Received StdIn: ' + userInput);
      return userInput;
    },
  },
  onInit() {}
});
