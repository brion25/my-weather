const request = (url, options) =>
  window.fetch(url)
    .then(response => {
      console.log(response)
      return response.json()
    })

export const getJSON = request
