import color from 'color'

it('should add alpha channel to color', () => {
  expect(color('#000000').alpha(0).string()).toBe('rgba(0, 0, 0, 0)')
})
