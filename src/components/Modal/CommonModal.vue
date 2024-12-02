<template>
    <div class="modal_container" v-if="modal">
        <div class="modal_content">
            <div>
                <projectReadme1  v-if="ModalType==='projectReadme1'" ></projectReadme1>
                <projectReadme2  v-if="ModalType==='projectReadme2'" ></projectReadme2>
            </div>
            <div id="modal-button">
                <button style="width:100px; height:30px; background-color:white;" @click="modalCancle">닫기</button>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapMutations } from 'vuex';
import projectReadme1 from './ReadmeModal/projectReadme1.vue';
import projectReadme2 from './ReadmeModal/projectReadme2.vue';
export default {
    data() {
        return {

        }
    },
    mounted(){
        console.log(this.ModalType);
    },  
    computed: {
        ...mapState("ModalMap", ["modal","ModalType"])
    },
    methods: {
        ...mapMutations("ModalMap", ["toggleModal"]),
        modalCancle() {
            this.toggleModal();
        }
    },
    components: {
        projectReadme1,
        projectReadme2,
    }
}

</script>

<style>
.modal_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal_content {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 80%;
    align-items: center;
    justify-content: center;
    background-color: white;
}

#modal-button {
    position: fixed;
    /* 화면에 고정 */
    bottom: 10%;
    /* 아래에서 10px */
    right: 15%;
    /* 오른쪽에서 10px */
    z-index: 1000;
    margin: 10px;
    /* 다른 요소 위에 표시되도록 설정 */
}
</style>