export const state = () => ({
  reviews: null,
  statistics: null,
  isLoading: false,
  error: null
})

export const getters = {
  getIsLoading(state) {
    return state.isLoading
  },
  getReviews(state) {
    return state.reviews
  },
  getStatistics(state) {
    return state.statistics
  }
}

export const mutations = {
  getReviewsStart(state) {
    state.reviews = null
    state.isLoading = true
    state.error = null
  },
  getReviewsSuccess(state, payload) {
    state.isLoading = false
    state.reviews = payload
  },
  getStatisticsSuccess(state, payload) {
    state.isLoading = false
    state.statistics = payload
  },
  getReviewsFailure(state, error) {
    state.isLoading = false
    state.error = error
  }
}

export const actions = {
  async getReviews({commit}, {productId}) {
    commit("getReviewsSuccess")
    try {
      const {data: dataResult} = await this.$api.review.getReviews(productId)

      commit("getReviewsSuccess", dataResult.data)
      commit("getStatisticsSuccess", dataResult.statistics)
    } catch (error) {
      commit("getReviewsFailure", error)
      throw new Error(error)
    }
  }
}
