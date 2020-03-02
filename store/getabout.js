import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  about: []
})

export const mutations = {
  setAbout(state, payload) {
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getAbout({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      commit('setAbout', [response.items, obj.content_type])
    }
  }
}
