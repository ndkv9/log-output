const fs = require('fs')

const getRandomString = () => {
  const randomString = Math.random().toString(36).substring(2, 10)
  let timestamp = new Date()

  fs.appendFile('./log.txt', `${timestamp} : - ${randomString}\n`, err => {
    if (err) throw err
  })

  console.log(`${timestamp} : - ${randomString}`)
  setTimeout(getRandomString, 5000)
}

getRandomString()
