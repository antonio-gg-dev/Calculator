import { Calculator } from '@/modules/Calculator'

describe('', () => {
  it('should print 0 at start', () => {
    const calculator = new Calculator()

    expect(calculator.print()).toBe('0')
  })
})
