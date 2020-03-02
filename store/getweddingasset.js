import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  weddingImages: []
})

export const mutations = {
  setWeddingImages(state, payload) {
    console.log('getasset', payload)
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getWeddingImages({ commit }, obj) {
    const response = await client.getEntries(obj)
    console.log('response', response)

    if (response.items.length > 0) {
      commit('setWeddingImages', [response.items, obj.content_type])
    }
  }
}
