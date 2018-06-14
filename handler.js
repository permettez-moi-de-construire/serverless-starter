import message from './src/message'

export const main = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: `${(await message({ time: 1, copy: 'Hello world!' }))}`
    })
  })
}
