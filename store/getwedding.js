import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  wedding: []
})

export const mutations = {
  setWedding(state, payload) {
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getWedding({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      commit('setWedding', [response.items, obj.content_type])
    }
  }
}
