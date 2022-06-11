export default axios => ({
  getReviews(productId) {
    const url = `https://rest.bellavka.by/api/v1/feedbacks?type=review&product=${productId}&include=answers,characteristics`

    return axios.get(url, {
      data: {},
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
})
