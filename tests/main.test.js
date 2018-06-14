import * as handler from '../handler'

test('main', async () => {
  const event = 'event'
  const context = 'context'
  const callback = (error, response) => {
    if (error) {
      throw error
    }
    expect(response.statusCode).toEqual(200)
    expect(typeof response.body).toBe('string')
  }

  await handler.main(event, context, callback)
})
