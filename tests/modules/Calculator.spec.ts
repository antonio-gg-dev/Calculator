import { Calculator, Operation } from '@/modules/Calculator'

describe('@/modules/Calculator', () => {
  let calculator: Calculator

  beforeEach(() => {
    calculator = new Calculator('en')
  })

  it('should print "0" at start', () => {
    expect(calculator.print()).toBe('0')
  })

  describe('Adding Numbers', () => {
    it.each`
      given | expected
      ${0}  | ${'0'}
      ${1}  | ${'1'}
      ${2}  | ${'2'}
      ${3}  | ${'3'}
      ${8}  | ${'8'}
    `('should print "$expected" when number $given added', ({ given, expected }) => {
      calculator.addNumber(given)

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      givenFirst | givenSecond | expected
      ${0}       | ${6}        | ${'6'}
      ${2}       | ${6}        | ${'26'}
      ${6}       | ${5}        | ${'65'}
      ${7}       | ${0}        | ${'70'}
      ${8}       | ${6}        | ${'86'}
    `('should print "$expected" when number $givenFirst added then $givenSecond', ({ givenFirst, givenSecond, expected }) => {
      calculator.addNumber(givenFirst)
        .addNumber(givenSecond)

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      givenFirst | givenSecond | givenThird | expected
      ${0}       | ${0}        | ${9}       | ${'9'}
      ${0}       | ${4}        | ${2}       | ${'42'}
      ${3}       | ${0}        | ${0}       | ${'300'}
      ${7}       | ${9}        | ${9}       | ${'799'}
      ${9}       | ${8}        | ${9}       | ${'989'}
    `('should print "$expected" when number $givenFirst added then $givenSecond and $givenThird', ({ givenFirst, givenSecond, givenThird, expected }) => {
      calculator.addNumber(givenFirst)
        .addNumber(givenSecond)
        .addNumber(givenThird)

      expect(calculator.print()).toBe(expected)
    })
  })

  describe('Erasing', () => {
    it.each`
      given
      ${0}
      ${2}
      ${5}
      ${8}
      ${6}
    `('should print "0" when number $given added then erase', ({ given }) => {
      calculator.addNumber(given)
        .erase()

      expect(calculator.print()).toBe('0')
    })

    it.each`
      givenFirst | givenSecond | expected
      ${0}       | ${7}        | ${'0'}
      ${3}       | ${9}        | ${'3'}
      ${4}       | ${4}        | ${'4'}
      ${6}       | ${3}        | ${'6'}
      ${8}       | ${0}        | ${'8'}
    `('should print "$expected" when numbers $givenFirst and $givenSecond added then erase', ({ givenFirst, givenSecond, expected }) => {
      calculator.addNumber(givenFirst)
        .addNumber(givenSecond)
        .erase()

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      givenNumber | givenOperator               | expected
      ${0}        | ${Operation.addition}       | ${'0'}
      ${1}        | ${Operation.subtraction}    | ${'1'}
      ${3}        | ${Operation.division}       | ${'3'}
      ${8}        | ${Operation.multiplication} | ${'8'}
    `('should print "$expected" only removing the operator "$givenOperator" when erase after number $givenNumber and operator', ({ givenNumber, givenOperator, expected }) => {
      calculator.addNumber(givenNumber)
        .setOperation(givenOperator)
        .erase()

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      givenOperator               | givenNumber | expected
      ${Operation.addition}       | ${4}        | ${'0 +'}
      ${Operation.subtraction}    | ${6}        | ${'0 −'}
      ${Operation.subtraction}    | ${7}        | ${'0 −'}
      ${Operation.division}       | ${8}        | ${'0 ÷'}
      ${Operation.multiplication} | ${9}        | ${'0 ×'}
    `('should print "$expected" only removing the second number $givenNumber when erase after operator "$givenOperator" and second number $givenNumber', ({ givenOperator, givenNumber, expected }) => {
      calculator.setOperation(givenOperator)
        .addNumber(givenNumber)
        .erase()

      expect(calculator.print()).toBe(expected)
    })

    it('should write the number again when erase after the operator', () => {
      calculator.setOperation(Operation.multiplication)
        .erase()
        .addNumber(2)

      expect(calculator.print()).toBe('2')
    })

    it('should write on first number when erase enough to remove the second number and the operator', () => {
      calculator.addNumber(9)
        .setOperation(Operation.addition)
        .addNumber(2)
        .erase()
        .erase()
        .addNumber(3)

      expect(calculator.print()).toBe('93')
    })

    it('should rewrite the operator when erase enough to remove the second number', () => {
      calculator.addNumber(3)
        .setOperation(Operation.multiplication)
        .addNumber(9)
        .addNumber(9)
        .erase()
        .erase()
        .setOperation(Operation.division)

      expect(calculator.print()).toBe('3 ÷')
    })

    it('should clear the previous result', () => {
      calculator.addNumber(5)
        .setOperation(Operation.multiplication)
        .addNumber(5)
        .calculate()
        .erase()

      expect(calculator.print()).toBe('0')
    })
  })

  describe('Clearing', () => {
    it.each`
      givenFirst | givenSecond | givenThird
      ${0}       | ${0}        | ${0}
      ${0}       | ${0}        | ${3}
      ${0}       | ${7}        | ${4}
      ${4}       | ${1}        | ${2}
      ${2}       | ${9}        | ${8}
    `('should print "0" when numbers $givenFirst, $givenSecond and $givenThird added then clear', ({ givenFirst, givenSecond, givenThird }) => {
      calculator.addNumber(givenFirst)
        .addNumber(givenSecond)
        .addNumber(givenThird)
        .clear()

      expect(calculator.print()).toBe('0')
    })

    it.each`
      given
      ${Operation.addition}
      ${Operation.subtraction}
      ${Operation.division}
      ${Operation.multiplication}
    `('should print "0" when operation "$given" then clear', ({ given }) => {
      calculator.setOperation(given)
        .clear()

      expect(calculator.print()).toBe('0')
    })

    it.each`
      givenOperator               | givenNumber
      ${Operation.addition}       | ${1}
      ${Operation.addition}       | ${4}
      ${Operation.subtraction}    | ${5}
      ${Operation.division}       | ${6}
      ${Operation.multiplication} | ${7}
    `('should print "0" when when operation "$givenOperator" and second number $givenNumber then clear', ({ givenOperator, givenNumber }) => {
      calculator.setOperation(givenOperator)
        .addNumber(givenNumber)
        .clear()

      expect(calculator.print()).toBe('0')
    })
  })

  describe('Operators', () => {
    it.each`
      given                       | expected
      ${Operation.addition}       | ${'0 +'}
      ${Operation.subtraction}    | ${'0 −'}
      ${Operation.division}       | ${'0 ÷'}
      ${Operation.multiplication} | ${'0 ×'}
    `('should print the operator after the number ("$expected") when "$given" operation given', ({ given, expected }) => {
      calculator.setOperation(given)

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      givenFirst                  | givenSecond                 | expected
      ${Operation.subtraction}    | ${Operation.addition}       | ${'0 +'}
      ${Operation.division}       | ${Operation.subtraction}    | ${'0 −'}
      ${Operation.multiplication} | ${Operation.division}       | ${'0 ÷'}
      ${Operation.addition}       | ${Operation.multiplication} | ${'0 ×'}
    `('should print only the last operator "$expected" when "$givenFirst" operation given then "$givenSecond"', ({ givenFirst, givenSecond, expected }) => {
      calculator.setOperation(givenFirst)
        .setOperation(givenSecond)

      expect(calculator.print()).toBe(expected)
    })

    it('should calculate first before set operation again when second number is set', () => {
      calculator.addNumber(1)
        .setOperation(Operation.addition)
        .addNumber(2)
        .setOperation(Operation.addition)

      expect(calculator.print()).toBe('3 +')
    })

    it('should add a second number when calculate before set operation when second number is set', () => {
      calculator.addNumber(1)
        .setOperation(Operation.addition)
        .addNumber(2)
        .setOperation(Operation.addition)
        .addNumber(3)

      expect(calculator.print()).toBe('3 + 3')
    })
  })

  describe('Adding Numbers After Operator', () => {
    it.each`
      givenOperator               | givenNumber | expected
      ${Operation.addition}       | ${1}        | ${'0 + 1'}
      ${Operation.addition}       | ${4}        | ${'0 + 4'}
      ${Operation.subtraction}    | ${5}        | ${'0 − 5'}
      ${Operation.division}       | ${6}        | ${'0 ÷ 6'}
      ${Operation.multiplication} | ${7}        | ${'0 × 7'}
    `('should print "$expected" when add number $givenNumber after set "$givenOperator" operation', ({ givenOperator, givenNumber, expected }) => {
      calculator.setOperation(givenOperator)
        .addNumber(givenNumber)

      expect(calculator.print()).toBe(expected)
    })
  })

  describe('Calculating!', () => {
    it.each`
      givenFirst | givenOperator               | givenSecond | expected
      ${4}       | ${Operation.addition}       | ${2}        | ${'6'}
      ${7}       | ${Operation.subtraction}    | ${3}        | ${'4'}
      ${4}       | ${Operation.division}       | ${2}        | ${'2'}
      ${7}       | ${Operation.division}       | ${2}        | ${'3.5'}
      ${5}       | ${Operation.multiplication} | ${9}        | ${'45'}
    `('should perform the operation "$givenFirst $givenOperator $givenSecond = $expected', ({ givenFirst, givenOperator, givenSecond, expected }) => {
      calculator.addNumber(givenFirst)
        .setOperation(givenOperator)
        .addNumber(givenSecond)
        .calculate()

      expect(calculator.print()).toBe(expected)
    })
  })

  it('should reset the number when add a number after calculate', () => {
    calculator.addNumber(1)
      .setOperation(Operation.addition)
      .addNumber(2)
      .calculate()
      .addNumber(1)

    expect(calculator.print()).toBe('1')
  })

  it('should reset the number only once when add many numbers after calculate', () => {
    calculator.addNumber(1)
      .setOperation(Operation.addition)
      .addNumber(2)
      .calculate()
      .addNumber(1)
      .addNumber(2)

    expect(calculator.print()).toBe('12')
  })

  it('should concatenate several operations', () => {
    calculator.addNumber(2)
      .setOperation(Operation.multiplication)
      .addNumber(2)
      .calculate()
      .setOperation(Operation.addition)
      .addNumber(1)
      .calculate()

    expect(calculator.print()).toBe('5')
  })

  it('should repeat the last operation each time calculate is called', () => {
    calculator.addNumber(2)
      .setOperation(Operation.addition)
      .addNumber(3)
      .calculate()
      .calculate()

    expect(calculator.print()).toBe('8')
  })

  describe('Decimals', () => {
    it('should write decimal separator', () => {
      calculator.addDecimal()

      expect(calculator.print()).toBe('0.')
    })

    it.each`
      given | expected
      ${0}  | ${'0.'}
      ${2}  | ${'2.'}
      ${4}  | ${'4.'}
      ${5}  | ${'5.'}
      ${9}  | ${'9.'}
    `('should print "$expected" when add number $given then decimal', ({ given, expected }) => {
      calculator.addNumber(given)
        .addDecimal()

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      given | expected
      ${0}  | ${'0.0'}
      ${4}  | ${'0.4'}
      ${5}  | ${'0.5'}
      ${6}  | ${'0.6'}
      ${9}  | ${'0.9'}
    `('should print "$expected" when add decimal then number', ({ given, expected }) => {
      calculator.addDecimal()
        .addNumber(given)

      expect(calculator.print()).toBe(expected)
    })
  })
})
