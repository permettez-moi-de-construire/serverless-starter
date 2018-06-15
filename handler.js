import message from './src/message'

export const main = async (event, context, callback) => {
  const data = JSON.parse(event.body)

  if (data.message === 'undefined') {
    return callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Missing message in POST request.' })
    })
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: `${(await message({ time: 1, copy: data.message }))}`
    })
  })
}
