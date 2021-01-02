/**
 * Dummy test
 */

import { as } from '../src/kimai'

describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', async () => {
    console.log(await as())
  })
})
