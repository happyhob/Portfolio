<template>
    <CommonModal/>
    <div class="project-container">
        <div class="project-top">
            <font-awesome-icon icon="link" size="2xl" />
            <h2 id="project-title">Project</h2>
        </div>
        <div class="project-bottom">
            <div id="project-item-top">
                <div id="project-item-box1">
                    <div id="box-header">
                        <div id="project-box-title">
                            <font-awesome-icon icon="folder-open" size="xl" />
                            <h2 id="project-box-title-style">2D 안내도 3D QR 플랫폼</h2>
                        </div>
                        <p id="box-date">2023.12 - 팀 프로젝트</p>
                    </div>
                    <div id="box-content">
                        <li id="box-details">
                            고정된 키오스크 안내판의 불편함을 극복하고자 개발
                        </li>
                        <li id="box-details">
                            키오스크 안내판 설치 비용 최소화 및 변화에 따른 빠른 대처
                        </li>
                        <li id="box-details">
                            키오스크 안내판 설치 비용 최소화 및 변화에 따른 빠른 대처
                        </li>
                        <li id="box-details">
                            키오스크 안내판 설치 비용 최소화 및 변화에 따른 빠른 대처
                        </li>
                    </div>
                    <div id="project-skills">
                        <p>Three.js, React, SpringBoot, Blender, Node.js, MySQL, FastAPI </p>
                    </div>
                    <div class="button-area">
                        <button id="project-bitton"  @click="clickModal(`projectReadme1`)" >
                            <font-awesome-icon icon="book" />
                            README
                        </button>
                        <button id="project-bitton" @click="clickModal(`imageReadme1`)" >
                            <font-awesome-icon icon="image" />
                            IMAGE
                        </button>
                    </div>
                </div>
                <div id="project-item-box2">

                </div>
                <div id="project-item-box3">

                </div>
                <div id="project-item-box4">

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

import projectReadme1 from '../Modal/ReadmeModal/projectReadme1.vue'
import CommonModal from '../Modal/CommonModal.vue';
export default {
    data(){
        return{
            isModal:false
        }
    },
    components:{
        projectReadme1,
        CommonModal,
    },
    methods:{
        ...mapMutations("ModalMap",["toggleModal","ModalType"]),
        clickModal(modalType){
            // this.isModal = !this.isModal;
            // console.log(this.isModal)
            this.ModalType(modalType)
            this.toggleModal();
        }
    },
    
}
</script>

<style>
.project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.project-top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* 이미지와 이름 간의 간격 */
    text-align: center;
}

.project-bottom {
    display: flex;
    flex-wrap: wrap;
}

#project-title {
    font-size: 50px;
    margin: 0;
}

.project-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
}

#project-item-top {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* 요소를 줄 바꿈 가능하도록 설정 */
    margin: 0;
    gap: 20px;
    /* 박스 간격 추가 */
}

#project-item-box1,
#project-item-box2,
#project-item-box3,
#project-item-box4 {
    width: 45%;
    /* 기본 너비를 45%로 설정 (화면 크기에 따라 조정됨) */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
    margin: 20px;
    transition: all 0.3s ease;
    /* 크기 변화에 부드러운 전환 효과 */
}

#box-header {
    color: rgb(0, 0, 0);
    margin: 10px;
    width: 70%;
    padding: 10px;
}

#project-box-title {
    display: flex;
    gap: 20px;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
}

#project-box-title-style {
    background-color: #f8687c;
    border-radius: 10px;
}

#box-date {
    color: rgb(0, 0, 0);
    border-bottom: 2px solid #000000;
    font-size: 16px;
    font-weight: 400;
}

#box-content {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

#box-details {
    margin-bottom: 5px;
}

#project-skills {
    display: flex;
    padding: 20px;
    background-color: #e9e9b8ef;
    border-radius: 10px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    width: 70%;
}

.button-area {
    width: 70%;
    display: flex;
    gap: 20px;
    margin-top: 15px;
}

#project-bitton {
    background-color: #ffffff;
    padding: 4px;
    width: 100px;
    /* border: #524c4c; */
    border-width: 0.5px;
    border-radius: 10px;
}

@media screen and (max-width: 1024px) {

    #project-item-box1,
    #project-item-box2,
    #project-item-box3,
    #project-item-box4 {
        width: 100%;
        /* 작은 화면에서는 각 박스가 한 줄에 표시되도록 설정 */
        margin: 10px 0;
        /* 간격 조정 */
    }
}
@media (max-width:768px){
    #project-box-title{
        font-size: 10px;
        font-weight: 300;
        gap: 10px;
    }
}

</style>