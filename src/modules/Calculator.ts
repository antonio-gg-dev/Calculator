export class Calculator {
  private firstNumber = 0
  private operation = false

  public print (): string {
    if (this.operation) {
      return this.firstNumber + ' +'
    }

    return this.firstNumber.toString()
  }

  public addNumber (number: number): Calculator {
    this.firstNumber = Number(`${this.firstNumber}${number}`)

    return this
  }

  public doBackspace (): Calculator {
    this.firstNumber = Math.floor(this.firstNumber / 10)

    return this
  }

  public doClear (): Calculator {
    this.firstNumber = 0

    return this
  }

  public setOperation (operation: string): Calculator {
    this.operation = true

    return this
  }
}
