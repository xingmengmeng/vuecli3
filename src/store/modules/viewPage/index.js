import * as actions from './actions.js';
import * as types from './mutation-types.js';

const state = {
    page: '1',
}
const getters = {
    getPage(state) {
        return state.page;
    },
};
const mutations = {
    [types.PAGE_CHANGE](state,str) {
        state.page = str;
    },
    [types.TO_DEFAULT_PAGE](state) {
        state.page = '1';
    }
}
export default {
    state,
    getters,
    actions,
    mutations,
} 