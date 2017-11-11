import { PetstorePage } from './app.po'

describe('Petstore', () => {
  let page: PetstorePage

  beforeEach(() => {
    page = new PetstorePage()
  })

  it('should display the page title', () => {
    page.navigateTo()
    expect(page.getHeading()).toContain('Pets available')
  })
})
