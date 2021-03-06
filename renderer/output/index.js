const BrowserWindowOutput = require('./browserWindowOutput')
const MainProcessOutput = require('./mainProcessOutput')

class Output {
  constructor() {
    this.browserWindowOutput = new BrowserWindowOutput()
    this.mainProcessOutput = new MainProcessOutput()
  }

  write() {
    const args = Array.prototype.slice.apply(arguments)
    this.mainProcessOutput.write(args)
    this.browserWindowOutput.write(args)
  }
}

module.exports = Output
