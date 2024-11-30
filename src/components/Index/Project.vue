<template>
    <div class="project-container">
        <div class="project-top">
            <font-awesome-icon icon="link" size="2xl" />
            <h2 id="project-title">Project</h2>
        </div>

        <div id="project-item-top">
            <div id="project-item-box1">
                <!-- <div id="git-title">
                    <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
                    <label style="font-weight:900;">GitHub</label>
                </div>
                <div id="git-content">
                    <label id="git-id">happyhob</label>
                    <button @click="onGithub">방문하기</button>
                </div> -->
            </div>
            <div id="project-item-box2">
                <!-- <div id="certification-title">
                    <font-awesome-icon icon="pen-to-square" size="2xl"/>
                    <label style="font-weight:900;">Certification</label>
                </div>
                <div>
                    <ul id="certification-list">
                        <li style="margin-top:10px; font-weight:500;">
                            .NET 전문가과정 수료-비트교육<br>(23.09 ~ 24.02)
                        </li>
                        <li style="margin-top:10px; font-weight:500;">
                            AWS AI Camp 수료-NextCloud<br>(24.05)
                        </li>
                    </ul>
                </div> -->
            </div>

        </div>
    </div>
</template>

<script>

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

.project-bottom{
    display: flex;
    flex-wrap: wrap;
}

#project-title {
    font-size: 50px;
    margin: 0;

}

#project-item-top {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* 요소를 줄 바꿈 가능하도록 설정 */
    margin: 0;
    gap: 20px; /* 박스 간격 추가 */
}

#project-item-box1,
#project-item-box2 {
    width: 45%; /* 기본 너비를 45%로 설정 (화면 크기에 따라 조정됨) */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    background-color: #f7f6f6;
    border-radius: 10px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
    margin: 20px;
    transition: all 0.3s ease; /* 크기 변화에 부드러운 전환 효과 */
}

@media screen and (max-width: 1024px) {
    #project-item-box1,
    #project-item-box2 {
        width: 100%; /* 작은 화면에서는 각 박스가 한 줄에 표시되도록 설정 */
        margin: 10px 0; /* 간격 조정 */
    }
}
</style>