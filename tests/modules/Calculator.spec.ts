import { Calculator } from '@/modules/Calculator'

describe('@/modules/Calculator', () => {
  let calculator: Calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  it('should print "0" at start', () => {
    expect(calculator.print()).toBe('0')
  })

  describe('Adding numbers', () => {
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
  })

  describe('Operators', () => {
    it('should print the operator "+" after the number when "addition" operation given', () => {
      calculator.setOperation('addition')

      expect(calculator.print()).toBe('0 +')
    })
  })
})
