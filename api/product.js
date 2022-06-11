export default axios => ({
  getProductById(productId) {
    const url = `products/${productId}?include=brand,category,collections,colors,fabrics,heights,kits,season,sizes,photos,videos,styles`

    return axios.get(url, {
      data: {},
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
})
