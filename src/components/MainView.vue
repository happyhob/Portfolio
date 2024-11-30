<template>
  <div class="root">
    <!-- Header -->
    <header class="header" :class="{'scrolled':isScroll}">
      <div class="header-container">
        <div class="brand">HBL's Portfolio</div>
        <button class="hamburger" @click="toggleMenu">☰</button>
        <ul class="navbar-menu" :class="{ open: isMenuOpen }">
          <li><a href="#about" @click="closeMenu">About Me</a></li>
          <li><a href="#skills" @click="closeMenu">Skills</a></li>
          <li><a href="#archiving" @click="closeMenu">Archiving</a></li>
          <li><a href="#projects" @click="closeMenu">Projects</a></li>
          <li><a href="#career" @click="closeMenu">Career</a></li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- title -->
      <section id="title" class="section title">
        <h2 id="name">"이호빈"의 포트폴리오</h2>
        <font-awesome-icon icon="handshake" size="2xl" style="margin-top: 20px;" />
        <h2 id="split-bar"></h2>
        <p id="sub-title">"안녕하세요. 실천하는 개발자 이호빈입니다.</p>
        <p id="sub-title">실천하는 사람만이 기회를 꿈 꿀 수 있다고 믿기에</p>
        <p id="sub-title">저는 꾸준하게 자기개발을 실천하는 개발자입니다"</p>
      </section>
      <!-- 자기소개 -->
      <section id="about" class="section about">
        <AboutMe />
      </section>
      <!-- 기술 스텍 -->
      <section id="skills" class="section skills">
        <Skills />
      </section>
      <!-- 활동 -->
      <section id="archiving" class="section archiving">
        <Archiving/>
      </section>
      <!-- 프로젝트 소개 -->
      <section id="projects" class="section projects">
        <Project/>
      </section>

      <section id="career" class="section career">
        <h2>Career</h2>
        <p>Summarize your professional experience and career milestones.</p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Your Name. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import AboutMe from './Index/AbountMe.vue'
import Skills from './Index/Skills.vue'
import Archiving from './Index/Archiving.vue'
import Project from './Index/Project.vue'
export default {
  data() {
    return {
      isMenuOpen: false,
      isScroll:false,
    };
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll() {
      // 스크롤 위치 확인
      this.isScroll = window.scrollY > 100;
    },
  },
  components: {
    AboutMe,
    Skills,
    Archiving,
    Project,
  },
};
</script>

<style>
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  scroll-behavior: smooth;
}

.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  /* background-color: #575047; */
  color: #fff;
  padding: 20px;
  transition: background-color 0.3s ease; /* 부드러운 전환 효과 */
}
.header.scrolled {
  background-color: #3d3c3c; /* 스크롤 시 배경색 추가 */
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
  max-width: 77.25rem;
  /*창이 넓어져도 max 값으로 고정||rem:루트 글꼴 크기의 root font size의 배수를 의미, 기본 브라우저 글꼴 크기 16px, 1rem = 16px  71.25rem*16px = 1140px*/
  border-bottom: 2px solid #978f84;
}

.brand {
  font-size: 28px;
  font-weight: bold;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-menu li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.navbar-menu.open {
  display: block;
}

.main-content {
  /* padding-top: 60px; */
  width: 100%;
  /* 전체 너비 */
}

.section {
  padding: 100px 20px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  /* 부모 요소의 너비를 100%로 차지 */
  box-sizing: border-box;
  /* 패딩 포함 크기 계산 */
}

.title {
  /* 
  linear-gradient: 점진적 색상 변화, 
  180deg: 그라데이션 방향, 180도는 위에서 아래로 수직방향의 그라데이션 의미
  rgba(112,93,80,0.8) 0, rgba(112,93,80,0.8) 90% : 0과 90% 그라데이션 색상이 각각 시작되는 위치와 끝나는 위치를 퍼센트로 지정
  50%: 개병 이미지의 위치 설정 50%는 가로축 중심에 이미지를 정렬한다는 의미
  no-repeat: 개병 이미지 반복 x 설정
  */
  background: linear-gradient(180deg, rgba(14, 13, 13, 0.8) 0, rgba(77, 63, 54, 0.8) 90%), url("../../public/developer2.jpg") 50% no-repeat;
  background-size: cover;
  /* 이미지가 컨테이너 크기에 맞게 조정 */
  height: 600px;
  text-align: center;
}

#name {
  white-space: nowrap;
  /* 기본적으로 줄바꿈 없음 */
  margin-top: 100px;
  font-size: 55px;
  font-weight: 900;
  color: #e9e3e3;
  font-family: Arial;
  font-style: italic;
}

#split-bar {
  width: 6.25rem;
  margin: 1.5rem auto;
  border-top: .3rem solid #db5c2a;
  opacity: 1;
  margin-bottom: 10px;
}

#sub-title {
  font-size: 18px;
  font-weight: 500;
  color: #c4bdbd;
  margin-top: 10px;
  font-style: italic;
}

.about {
  background-color: #ffffff;
}

.skills {
  background-color: #070707;
}

.archiving {
  background-color: #ca4d4d;
}

.projects {
  background-color: #fdfdfd;
}

.career {
  background-color: #504f4f;
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #504f4f;
  color: #fff;
}


/* Responsive Design */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;

  }

  .navbar-menu.open {
    display: flex;
  }

  #name {
    white-space: pre-line;
    /* 모바일에서 줄바꿈 허용 */
    font-size: 30px;
    /* 모바일에서 텍스트 크기 조정 */
    text-align: center;
    /* 텍스트 중앙 정렬 */
  }

  #sub-title {
    font-size: 13px;
  }
}
</style>