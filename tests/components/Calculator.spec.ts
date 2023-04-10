import { shallowMount, VueWrapper } from '@vue/test-utils'
import CalculatorComponent from '@/components/Calculator.vue'
import { Calculator as CalculatorService, Operation } from '@/modules/Calculator'

describe('@/components/Calculator.vue', () => {
  let calculatorService: CalculatorService
  let calculatorComponent: VueWrapper<InstanceType<typeof CalculatorComponent>>

  beforeEach(() => {
    calculatorService = {
      print: () => 'expected print',
      addNumber: jest.fn(),
      calculate: jest.fn(),
      setOperation: jest.fn(),
      clear: jest.fn(),
      erase: jest.fn()
    } as unknown as CalculatorService

    calculatorComponent = shallowMount(CalculatorComponent, {
      props: {
        calculator: calculatorService
      }
    })
  })

  it('should print on the display what the print method returns', () => {
    expect(calculatorComponent.find('[data-test="display"]').text()).toBe('expected print')
  })

  it.each`
    number
    ${0}
    ${1}
    ${2}
    ${3}
    ${4}
    ${5}
    ${6}
    ${7}
    ${8}
    ${9}
  `('should call addNumber with number $number when $number button clicked ', ({ number }) => {
    calculatorComponent.find(`[data-test="number-${number}"]`)
      .trigger('click')

    expect(calculatorService.addNumber).toHaveBeenCalledWith(number)
  })

  it.each`
    operation           | symbol
    ${'addition'}       | ${Operation.addition}
    ${'subtraction'}    | ${Operation.subtraction}
    ${'division'}       | ${Operation.division}
    ${'multiplication'} | ${Operation.multiplication}
  `('should call setOperation with operator "$symbol" when $operation button clicked ', ({ symbol, operation }) => {
    calculatorComponent.find(`[data-test="operation-${operation}"]`)
      .trigger('click')

    expect(calculatorService.setOperation).toHaveBeenCalledWith(symbol)
  })

  it('should call erase when erase button clicked ', () => {
    calculatorComponent.find('[data-test="erase"]')
      .trigger('click')

    expect(calculatorService.erase).toHaveBeenCalled()
  })

  it('should call clear when clear button clicked ', () => {
    calculatorComponent.find('[data-test="clear"]')
      .trigger('click')

    expect(calculatorService.clear).toHaveBeenCalled()
  })

  it('should call calculate when calculate button clicked ', () => {
    calculatorComponent.find('[data-test="calculate"]')
      .trigger('click')

    expect(calculatorService.calculate).toHaveBeenCalled()
  })
})
