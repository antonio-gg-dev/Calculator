export enum Operation {
  addition = '+',
  subtraction = '−',
  division = '÷',
  multiplication = '×',
}
export class Calculator {
  private firstNumber = 0
  private operation: Operation | undefined
  private secondNumber = 0
  private clearOnNumber = false
  private previousOperation: Operation | undefined
  private previousSecondNumber = 0

  public print (): string {
    return [this.firstNumber, this.operation, this.secondNumber || undefined]
      .filter(v => v !== undefined)
      .join(' ')
  }

  public addNumber (number: 0|1|2|3|4|5|6|7|8|9): Calculator {
    if (this.clearOnNumber) {
      this.clear()
    }

    if (this.operation) {
      this.secondNumber = Number(`${this.secondNumber}${number}`)
    } else {
      this.firstNumber = Number(`${this.firstNumber}${number}`)
    }

    return this
  }

  public erase (): Calculator {
    if (this.clearOnNumber) {
      this.clear()
    }

    if (this.secondNumber) {
      this.secondNumber = Math.floor(this.secondNumber / 10)
    } else if (this.operation) {
      this.operation = undefined
    } else {
      this.firstNumber = Math.floor(this.firstNumber / 10)
    }

    return this
  }

  public clear (): Calculator {
    this.firstNumber = 0
    this.operation = undefined
    this.secondNumber = 0
    this.clearOnNumber = false

    return this
  }

  public setOperation (operation: Operation): Calculator {
    if (this.secondNumber) {
      this.calculate()
    }

    this.clearOnNumber = false
    this.operation = operation

    return this
  }

  public calculate (): Calculator {
    if (!this.operation && this.previousOperation) {
      this.operation = this.previousOperation
      this.secondNumber = this.previousSecondNumber
    }

    switch (this.operation) {
      case Operation.addition:
        this.firstNumber += this.secondNumber
        break
      case Operation.subtraction:
        this.firstNumber -= this.secondNumber
        break
      case Operation.division:
        this.firstNumber /= this.secondNumber
        break
      case Operation.multiplication:
        this.firstNumber *= this.secondNumber
        break
    }

    this.previousOperation = this.operation
    this.previousSecondNumber = this.secondNumber

    this.operation = undefined
    this.secondNumber = 0
    this.clearOnNumber = true

    return this
  }
}
