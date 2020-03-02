import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  couture: []
})

export const mutations = {
  setCouture(state, payload) {
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getCouture({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      commit('setCouture', [response.items, obj.content_type])
    }
  }
}
