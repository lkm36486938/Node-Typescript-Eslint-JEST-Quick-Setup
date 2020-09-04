import { add, mul } from '../math'

describe('math.add', () => {
  it('sum two numbers', () => {
    expect(add(3, 4)).toEqual(7)
  })
})

describe('math.mul', () => {
  it('mul tow numbers', () => {
    expect(mul(2, 3)).toEqual(6)
  })
})
