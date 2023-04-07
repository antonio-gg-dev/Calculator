import { shallowMount } from '@vue/test-utils'
import UwuCalculator from '@/components/Calculator.vue'

describe('@/components/Calculator.vue', () => {
  it('renders', () => {
    const calculator = shallowMount(UwuCalculator)

    expect(calculator).toBeTruthy()
  })
})
