export const state = () => ({
  product: null,
  isLoading: false,
  error: null
})

export const getters = {
  getIsLoading(state) {
    return state.isLoading
  },
  getProduct(state) {
    return state.product
  }
}

export const mutations = {
  getProductStart(state) {
    state.product = null
    state.isLoading = true
    state.error = null
  },
  getProductSuccess(state, payload) {
    state.isLoading = false
    state.product = payload
  },
  getProductFailure(state, error) {
    state.isLoading = false
    state.error = error
  }
}

export const actions = {
  async getProduct({commit}, {productId}) {
    commit("getProductStart")
    try {
      const {data: dataResult} = await this.$api.product.getProductById(productId)

      commit("getProductSuccess", dataResult.data)
    } catch (error) {
      commit("getProductFailure", error)
      throw new Error(error)
    }
  }
}
