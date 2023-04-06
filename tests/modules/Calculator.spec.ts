import { Calculator } from '@/modules/Calculator'

describe('', () => {
  let calculator: Calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  it('should print 0 at start', () => {
    expect(calculator.print()).toBe('0')
  })

  it('should print 1 when number 1 added', () => {
    calculator.addNumber(1)

    expect(calculator.print()).toBe('1')
  })

  it('should print 2 when number 2 added', () => {
    calculator.addNumber(2)

    expect(calculator.print()).toBe('2')
  })
})
