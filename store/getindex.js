import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  index: []
})

export const mutations = {
  setIndex(state, payload) {
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getIndex({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      commit('setIndex', [response.items, obj.content_type])
    }
  }
}
