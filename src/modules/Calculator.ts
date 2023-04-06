export enum Operation {
  addition = '+',
  subtraction = '−',
  division = '÷',
  multiplication = '×',
}
export class Calculator {
  private firstNumber = 0
  private operation: Operation | undefined

  public print (): string {
    return [this.firstNumber, this.operation]
      .filter(v => v !== undefined)
      .join(' ')
  }

  public addNumber (number: 0|1|2|3|4|5|6|7|8|9): Calculator {
    this.firstNumber = Number(`${this.firstNumber}${number}`)

    return this
  }

  public doBackspace (): Calculator {
    if (this.operation) {
      this.operation = undefined
    } else {
      this.firstNumber = Math.floor(this.firstNumber / 10)
    }

    return this
  }

  public doClear (): Calculator {
    this.firstNumber = 0
    this.operation = undefined

    return this
  }

  public setOperation (operation: Operation): Calculator {
    this.operation = operation

    return this
  }
}
