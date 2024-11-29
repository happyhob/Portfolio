<template>

    <div class="archiving-container">
        <div class="archiving-top">
            <font-awesome-icon icon="link" size="2xl" style="color: #ffffff;" />
            <h2 id="archiving-title">Archiving</h2>
        </div>
        <div class="archiving-bottom">
            <div class="archiving-item">
                <div id="archiving-item-top">
                    <div id="archiving-item-box">
                        <div id="git-title">
                            <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
                            <label>GitHub</label>
                        </div>
                        <div id="git-content">
                            <label>happyhob</label>
                            <button @click="onGithub">방문하기</button>
                        </div>
                    </div>
                    <div id="archiving-item-box">

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onGithub() {
            const width = 1450;
            const height = 1050;

            // 팝업 위치 설정
            const top = (window.innerHeight - height) / 2;
            const left = (window.innerWidth - width) / 2;

            // 팝업 옵션 설정
            const options = `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no`;

            // 팝업 창 열기
            const popupId = "github-popup";
            const popupwindow = window.open("https://github.com/happyhob", popupId, options);

            // 팝업 창이 정상적으로 열리지 않은 경우 처리
            if (!popupwindow) {
                alert("팝업 차단이 활성화되어 팝업을 열 수 없습니다.");
            }
        }
    }
}
</script>

<style>
button {
    background-color: #4caf50;
    /* 배경색 */
    color: white;
    /* 텍스트 색상 */
    padding: 10px 20px;
    /* 버튼 내부 여백 */
    font-size: 16px;
    /* 글자 크기 */
    border: none;
    /* 테두리 제거 */
    border-radius: 5px;
    /* 둥근 모서리 */
    cursor: pointer;
    /* 클릭 커서 표시 */
    transition: background-color 0.3s ease;
    /* 배경색 변경 효과 */
}

.basic-btn:hover {
    background-color: #45a049;
    /* 호버 시 배경색 변경 */
}

.archiving-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.archiving-top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* 이미지와 이름 간의 간격 */
    text-align: center;
}

#archiving-title {
    font-size: 50px;
    margin: 0;
    color: white;
}

.archiving-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
}

#archiving-item-top {
    display: flex;
    justify-content: center;
    margin: 0px 300px 0px 300px;
}

#archiving-item-box {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    background-color: #f7f6f6;
    border-radius: 10px;
    /* 둥근 모서리 */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
    /* 그림자 효과 */
    margin: 20px;
}

#git-title {
    display: flex;
    align-items: center;
    font-size: 30px;
    gap: 20px;
    margin-bottom: 20px;
}
#git-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    font-size: 20px
}
</style>