export class Calculator {
  private firstNumber = false
  public print (): string {
    if (this.firstNumber) {
      return '1'
    }

    return '0'
  }

  public addNumber (number: number): Calculator {
    this.firstNumber = true

    return this
  }
}
