export const state = () => ({
    displaySearch: false,
    currentRoute: 'search'
})

export const mutations = {
    toggleSearch: state => {
        state.displaySearch = !state.displaySearch
    },

    setCurrentRoute(state, page) {
        state.currentRoute = page
    }
}

export const actions = {
    toggleSearchBar({ commit }) {
        commit("toggleSearch")
    }
}