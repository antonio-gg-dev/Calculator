export enum Operation {
  addition = '+',
  subtraction = '−',
  division = '÷',
  multiplication = '×',
}
export class Calculator {
  private firstNumber = '0'
  private operation: Operation | undefined
  private secondNumber = '0'
  private clearOnNumber = false
  private previousOperation: Operation | undefined
  private previousSecondNumber = '0'
  private isNextDecimal = false;
  private readonly decimalSeparator: string

  constructor (locale: string | undefined = undefined) {
    this.decimalSeparator = this.localeDecimalSeparator(locale)
  }

  private localeDecimalSeparator (locale: string | undefined = undefined): string {
    return (1.1).toLocaleString(locale).substring(1, 2)
  }

  public print (): string {
    return [
      this.printFirstNumber(),
      this.printOperation(),
      this.printSecondNumber()
    ]
      .filter(v => v !== undefined)
      .join(' ')
      .replace('.', this.decimalSeparator)
  }

  private printFirstNumber (): string {
    let print = this.firstNumber

    if (!this.operation && this.isNextDecimal) {
      print += '.'
    }

    return print
  }

  private printOperation (): string | undefined {
    return this.operation
  }

  private printSecondNumber (): string | undefined {
    let print

    if (this.secondNumber !== '0') {
      print = this.secondNumber
    }

    if (this.isNextDecimal && this.operation && this.secondNumber === '0') {
      print = this.secondNumber
    }

    if (this.isNextDecimal && this.operation) {
      print += '.'
    }

    return print
  }

  public addNumber (number: 0|1|2|3|4|5|6|7|8|9): Calculator {
    if (this.clearOnNumber) {
      this.clear()
    }

    if (this.operation) {
      this.secondNumber = (this.isNextDecimal || this.secondNumber !== '0' ? this.secondNumber : '') +
        (this.isNextDecimal ? '.' : '') +
        (`${number}`)
    } else {
      this.firstNumber = (this.isNextDecimal || this.firstNumber !== '0' ? this.firstNumber : '') +
        (this.isNextDecimal ? '.' : '') +
        (`${number}`)
    }

    this.isNextDecimal = false

    return this
  }

  public erase (): Calculator {
    if (this.clearOnNumber) {
      this.clear()
    }

    if (this.secondNumber !== '0') {
      this.secondNumber = this.secondNumber.substring(0, this.secondNumber.length - 1) || '0'
    } else if (this.operation) {
      this.operation = undefined
    } else {
      this.firstNumber = this.firstNumber.substring(0, this.firstNumber.length - 1) || '0'
    }

    return this
  }

  public clear (): Calculator {
    this.firstNumber = '0'
    this.operation = undefined
    this.secondNumber = '0'
    this.clearOnNumber = false

    return this
  }

  public setOperation (operation: Operation): Calculator {
    if (this.secondNumber !== '0') {
      this.calculate()
    }

    this.clearOnNumber = false
    this.operation = operation
    this.isNextDecimal = false

    return this
  }

  public calculate (): Calculator {
    if (!this.operation && this.previousOperation) {
      this.operation = this.previousOperation
      this.secondNumber = this.previousSecondNumber
    }

    switch (this.operation) {
      case Operation.addition:
        this.firstNumber = `${Number(this.firstNumber) + Number(this.secondNumber)}`
        break
      case Operation.subtraction:
        this.firstNumber = `${Number(this.firstNumber) - Number(this.secondNumber)}`
        break
      case Operation.division:
        this.firstNumber = `${Number(this.firstNumber) / Number(this.secondNumber)}`
        break
      case Operation.multiplication:
        this.firstNumber = `${Number(this.firstNumber) * Number(this.secondNumber)}`
        break
    }

    this.previousOperation = this.operation
    this.previousSecondNumber = this.secondNumber

    this.operation = undefined
    this.secondNumber = '0'
    this.clearOnNumber = true

    return this
  }

  public addDecimal (): Calculator {
    this.isNextDecimal = true

    return this
  }
}
