import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  coutureImages: []
})

export const mutations = {
  setCoutureImages(state, payload) {
    console.log('getasset', payload)
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getCoutureImages({ commit }, obj) {
    const response = await client.getEntries(obj)
    console.log('response', response)

    if (response.items.length > 0) {
      commit('setCoutureImages', [response.items, obj.content_type])
    }
  }
}
