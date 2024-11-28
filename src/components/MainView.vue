<template>
    <div class="root">
        <!-- Header -->
        <header class="header">
            <div class="header-container">
                <div class="brand">My Portfolio</div>
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
            <section id="about" class="section about">
                <h2>About Me</h2>
                <p>Introduce yourself here.</p>
            </section>

            <section id="skills" class="section skills">
                <h2>Skills</h2>
                <p>Showcase your technical skills and expertise.</p>
            </section>

            <section id="archiving" class="section archiving">
                <h2>Archiving</h2>
                <p>Include links to your GitHub, blog, or other repositories.</p>
            </section>

            <section id="projects" class="section projects">
                <h2>Projects</h2>
                <p>Highlight your most significant projects and achievements.</p>
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
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
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

html, body {
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
  background-color: #333;
  color: #fff;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.brand {
  font-size: 24px;
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
  padding-top: 60px;
  width: 100%; /* 전체 너비 */
}

.section {
  padding: 60px 20px;
  border-bottom: 1px solid #ddd;
  width: 100%; /* 부모 요소의 너비를 100%로 차지 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
}

.about {
  background-color: #504f4f;
}

.skills {
  background-color: #504f4f;
}

.archiving {
  background-color: #504f4f;
}

.projects {
  background-color: #504f4f;
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
}

</style>