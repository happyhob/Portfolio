<template>
    <div class="about-container">
        <div class="about-top">
            <font-awesome-icon icon="link" size="2xl" />
            <h2 id="about-title">About Me</h2>
        </div>
        <!-- 새로운 작업 영역 -->
        <div class="about-middle">
            <div class="about-item">
                <div id="about-labal">
                    <div id="about-detail">
                        <font-awesome-icon icon="user" />
                        <p>이름</p>
                    </div>
                    <p id='about-content'>이호빈</p>
                </div>
            </div>
            <div class="about-item">
                <div id="about-labal">
                    <div id="about-detail">
                        <font-awesome-icon icon="calendar" />
                        <p>생년월일</p>
                    </div>
                    <p id='about-content'>2001.09.19</p>
                </div>
            </div>
            <div class="about-item">
                <div id="about-labal">
                    <div id="about-detail">
                        <font-awesome-icon icon="map" />
                        <p>주소</p>
                    </div>
                    <p id='about-content'>경기도 성남시 분당구</p>
                </div>
            </div>
            <div class="about-item">
                <div id="about-labal">
                    <div id="about-detail">
                        <font-awesome-icon icon="phone" />
                        <p>연락처</p>
                    </div>
                    <P id='about-content'>010-5535-6863</p>
                </div>
            </div>
            <div class="about-item">
                <div id="about-labal">
                    <div id="about-detail">
                        <font-awesome-icon icon="envelope" />
                        <p>이메일</p>
                    </div>
                    <p id='about-content'>capaboss111@naver.com</p>
                </div>
            </div>
            <div class="about-item">
                <div id="about-labal">
                    <div id="about-detail">
                        <font-awesome-icon icon="graduation-cap" />
                        <p>학력</p>
                    </div>
                    <p id='about-content'>우송대학교(컴퓨터공학)</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

export default {

}

</script>

<style>
/* 전체 컨테이너 정렬 */
.about-container {
    display: flex;
    flex-direction: column;
    /* Flexbox 활성화 */
    align-items: center;
    gap: 20px;
    /* 요소 간 간격 */
}

/* 세부 정보 정렬 */
.about-top {
    display: flex;
    align-items: center;
    gap: 20px;
    /* 이미지와 이름 간의 간격 */
    text-align: center;
}

/* 제목 스타일 */
#about-title {
    font-size: 50px;
    margin:0;
}

/* 새로운 작업 영역 스타일 */
.about-middle {
    display: flex;
    flex-wrap: wrap;
    /* 줄 바꿈 */
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    max-width: 1400px;
    text-align: center;
    padding: 20px;
    background-color: #e0b4b4;
    border-radius: 10px;
    /* 둥근 모서리 */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
    /* 그림자 효과 */
}

.about-item {
    flex: 1 1 calc(33.33% - 20px);
    /* 3열 레이아웃 */
    box-sizing: border-box;
    margin-bottom: 20px;
    /* 아래쪽 간격 */
}


/* 요소 */
#about-labal {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 이미지와 이름 간의 간격 */
    font-weight: 600;
}

#about-content {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    color:rgb(63, 62, 62);
}

#about-detail {
    display: flex;
    gap: 10px;
    font-size: 25px;
    font-weight: 900;
    border-bottom: 2px solid #000000;
}

@media (max-width: 768px) {
    .about-item {
        flex: 1 1 100%;
        /* 작은 화면에서는 한 줄에 하나씩 배치 */
    }
}
</style>