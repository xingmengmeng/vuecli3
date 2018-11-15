export const pageChange = ({ commit }, num) => {
    commit('PAGE_CHANGE', num);
}
export const toDefaultPage= ({ commit }, id) => {
    commit('TO_DEFAULT_PAGE', id);
}