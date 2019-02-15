// tslint:disable no-any
import HelloWorld from './HelloWorld'

describe('HelloWorld(1, 2)', () => {
  test('works', () => {
    const input = HelloWorld('hi', 'earth')
    const res = 'hi earth'

    expect(input).toEqual(res)
  })
})
