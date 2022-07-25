import  { soma } from './index.js'

describe('Test for Index', () => {

  it('Deve somar 2 numeros inteiros', () => {
    expect(soma(3,1)).toBe(4)
  })

  it('Deve conseguir somar 2 numeros inteiros', () => {
    expect(soma(3,2)).toBe(5)
  })

})
