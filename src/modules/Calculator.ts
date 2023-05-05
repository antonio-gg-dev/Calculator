import Decimal from 'decimal.js'

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
  public readonly decimalSeparator: string

  constructor (locale: string | undefined = undefined) {
    this.decimalSeparator = this.localeDecimalSeparator(locale)
  }

  private localeDecimalSeparator (locale: string | undefined = undefined): string {
    return (1.1).toLocaleString(locale).substring(1, 2)
  }

  public print (): string {
    return [
      this.firstNumber,
      this.operation,
      (this.secondNumber !== '0' ? this.secondNumber : undefined)
    ]
      .filter(v => v !== undefined)
      .join(' ')
      .replaceAll('.', this.decimalSeparator)
      .replaceAll('-', '−')
  }

  public addNumber (number: 0|1|2|3|4|5|6|7|8|9): Calculator {
    if (this.clearOnNumber) {
      this.clear()
    }

    if (this.operation) {
      let secondNumber = this.secondNumber

      if (secondNumber === '0') {
        secondNumber = ''
      }

      if (secondNumber === '-0') {
        secondNumber = '-'
      }

      this.secondNumber = `${secondNumber}${number}`
    } else {
      let firstNumber = this.firstNumber

      if (firstNumber === '0') {
        firstNumber = ''
      }

      if (firstNumber === '-0') {
        firstNumber = '-'
      }

      this.firstNumber = `${firstNumber}${number}`
    }

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
      if (this.firstNumber === '-0') {
        this.firstNumber = '0'
      }

      this.firstNumber = this.firstNumber.substring(0, this.firstNumber.length - 1) || '0'

      if (this.firstNumber === '-') {
        this.firstNumber = '-0'
      }
    }

    return this
  }

  public clear (): Calculator {
    this.firstNumber = '0'
    this.operation = undefined
    this.secondNumber = '0'
    this.clearOnNumber = false
    this.previousOperation = undefined
    this.previousSecondNumber = '0'

    return this
  }

  public setOperation (operation: Operation): Calculator {
    if (this.secondNumber !== '0') {
      this.calculate()
    }

    if (this.firstNumber.slice(-1) === '.') {
      this.firstNumber = this.firstNumber.substring(0, this.firstNumber.length - 1)
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
        this.firstNumber = new Decimal(this.firstNumber).add(this.secondNumber).toString()
        break
      case Operation.subtraction:
        this.firstNumber = new Decimal(this.firstNumber).sub(this.secondNumber).toString()
        break
      case Operation.division:
        this.firstNumber = new Decimal(this.firstNumber).div(this.secondNumber).toString()
        break
      case Operation.multiplication:
        this.firstNumber = new Decimal(this.firstNumber).mul(this.secondNumber).toString()
        break
    }

    this.previousOperation = this.operation
    this.previousSecondNumber = this.secondNumber

    this.operation = undefined
    this.secondNumber = '0'
    this.clearOnNumber = true

    return this
  }

  public addDecimalSeparator (): Calculator {
    if (this.operation && !this.secondNumber.includes('.')) {
      this.secondNumber += '.'
    } else if (!this.operation && !this.firstNumber.includes('.')) {
      this.firstNumber += '.'
    }

    return this
  }

  public toggleSymbol (): Calculator {
    if (this.operation) {
      if (this.secondNumber.charAt(0) === '-') {
        this.secondNumber = this.secondNumber.slice(1)
      } else {
        this.secondNumber = `-${this.secondNumber}`
      }
    } else {
      if (this.firstNumber.charAt(0) === '-') {
        this.firstNumber = this.firstNumber.slice(1)
      } else {
        this.firstNumber = `-${this.firstNumber}`
      }
    }

    return this
  }
}
