const ModalMap = {
    namespaced: true,
    state: {
        modal: false,
        ModalType:"",
    },
    getters: {
        getModals: (state) => state.modals,
    },
    mutations: {
        toggleModal(state) {
            state.modal = !state.modal;
        },
        ModalType(state,modalType){
            state.ModalType = modalType;
        },
        ADD_MODAL: (state, infos) => {
            state.modals.push({
                id: state.modalId++,
                title: infos.title,
                kind: infos.kind,
                type: infos.type,
                infos: infos.infos,
            });
        },
        UPDATE_MODAL: (state, { modalId, updatedInfos }) => {
            const modalIndex = state.modals.findIndex((modal) => modal.id === modalId);
            if (modalIndex !== -1) {
                state.modals[modalIndex] = {
                    ...state.modals[modalIndex],
                    ...updatedInfos,
                };
            }
        },
        REMOVE_MODAL(state, modalId) {
            state.modals = state.modals.filter((modal) => modal.id !== modalId);
        },
    },
    actions: {
        addModal({ commit, state }, modalInfo) {
            commit("ADD_MODAL", modalInfo);
            const addedModal = state.modals[state.modals.length - 1];
            return addedModal.id;
        },
        updateModal({ commit }, { modalId, updatedInfos }) {
            commit("UPDATE_MODAL", { modalId, updatedInfos });
        },
        removeModal({ commit }, modalId) {
            commit("REMOVE_MODAL", modalId);
        },
    },
};

export default ModalMap;
