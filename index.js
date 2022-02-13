const getRandomString = () => {
  const randomString = Math.random().toString(36).substring(2, 6)

  console.log(randomString)

  setTimeout(getRandomString, 5000)
}

getRandomString()
