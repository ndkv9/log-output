const getRandomString = () => {
  const randomString = Math.random().toString(36).substring(2, 10)
  let timestamp = new Date()

  console.log(`${timestamp} : - ${randomString}`)

  setTimeout(getRandomString, 5000)
}

getRandomString()
