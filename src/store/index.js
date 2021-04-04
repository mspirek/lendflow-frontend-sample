import { createStore } from 'vuex';
import githubApi from '@/api/githubApi';

const store = createStore({
  state () {
    return {
      allOrgs: [],
      apiError: false,
      orgDetails: {},
      noResults: false,
    };
  },
  actions: {
    async getAllOrgs ({ commit }) {
      try {
        const resp = await githubApi.get('organizations');
        if (resp && resp.data) {
          commit('setAllOrgs', resp.data);
        }
      } catch (e) {
        commit('setApiError');
      }
    },
    async getOrgDetails ({ commit }, login) {
      if(!login) {
        commit('setNoResults');
      }
      try {
        const resp = await githubApi.get(`orgs/${login}`);
        if (resp && resp.data) {
          commit('setOrgDetails', resp.data);
        }
      } catch (e) {
        commit('setNoResults');
      }
    },
  },
  mutations: {
    setAllOrgs (state, data) {
      state.apiError = false;
      state.allOrgs = data;
    },
    setApiError (state) {
      state.apiError = true;
    },
    setOrgDetails (state, data) {
      state.noResults = false;
      state.orgDetails = data;
    },
    setNoResults (state) {
      state.noResults = true;
    },
  },
});

export default store;

