export class Calculator {
  private firstNumber = 0

  public print (): string {
    return this.firstNumber.toString()
  }

  public addNumber (number: number): Calculator {
    this.firstNumber = number

    return this
  }
}
