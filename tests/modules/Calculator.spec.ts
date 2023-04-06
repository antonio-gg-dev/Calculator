import { Calculator, Operation } from '@/modules/Calculator'

describe('@/modules/Calculator', () => {
  let calculator: Calculator

  beforeEach(() => {
    calculator = new Calculator()
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

  describe('Doing Backspace', () => {
    it.each`
      given
      ${0}
      ${2}
      ${5}
      ${8}
      ${6}
    `('should print "0" when number $given added then backspace', ({ given }) => {
      calculator.addNumber(given)
        .doBackspace()

      expect(calculator.print()).toBe('0')
    })

    it.each`
      givenFirst | givenSecond | expected
      ${0}       | ${7}        | ${'0'}
      ${3}       | ${9}        | ${'3'}
      ${4}       | ${4}        | ${'4'}
      ${6}       | ${3}        | ${'6'}
      ${8}       | ${0}        | ${'8'}
    `('should print "$expected" when numbers $givenFirst and $givenSecond added then backspace', ({ givenFirst, givenSecond, expected }) => {
      calculator.addNumber(givenFirst)
        .addNumber(givenSecond)
        .doBackspace()

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      givenNumber | givenOperator               | expected
      ${0}        | ${Operation.addition}       | ${'0'}
      ${1}        | ${Operation.subtraction}    | ${'1'}
      ${3}        | ${Operation.division}       | ${'3'}
      ${8}        | ${Operation.multiplication} | ${'8'}
    `('should print "$expected" only removing the operator "$givenOperator" when backspace after number $givenNumber and operator', ({ givenNumber, givenOperator, expected }) => {
      calculator.addNumber(givenNumber)
        .setOperation(givenOperator)
        .doBackspace()

      expect(calculator.print()).toBe(expected)
    })

    it.each`
      givenOperator               | givenNumber | expected
      ${Operation.addition}       | ${4}        | ${'0 +'}
      ${Operation.subtraction}    | ${6}        | ${'0 −'}
      ${Operation.subtraction}    | ${7}        | ${'0 −'}
      ${Operation.division}       | ${8}        | ${'0 ÷'}
      ${Operation.multiplication} | ${9}        | ${'0 ×'}
    `('should print "$expected" only removing the second number $givenNumber when backspace after operator "$givenOperator" and second number $givenNumber', ({ givenOperator, givenNumber, expected }) => {
      calculator.setOperation(givenOperator)
        .addNumber(givenNumber)
        .doBackspace()

      expect(calculator.print()).toBe(expected)
    })

    it('should write the number again if you backspace after the operator', () => {
      calculator.setOperation(Operation.multiplication)
        .doBackspace()
        .addNumber(2)

      expect(calculator.print()).toBe('2')
    })

    it('should write on first number if you backspace enough to remove the second number and the operator', () => {
      calculator.addNumber(9)
        .setOperation(Operation.addition)
        .addNumber(2)
        .doBackspace()
        .doBackspace()
        .addNumber(3)

      expect(calculator.print()).toBe('93')
    })

    it('should rewrite the operator if you backspace enough to remove the second number', () => {
      calculator.addNumber(3)
        .setOperation(Operation.multiplication)
        .addNumber(9)
        .addNumber(9)
        .doBackspace()
        .doBackspace()
        .setOperation(Operation.division)

      expect(calculator.print()).toBe('3 ÷')
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
        .doClear()

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
        .doClear()

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
        .doClear()

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
})
