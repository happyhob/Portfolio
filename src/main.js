import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//icon/ font
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import { faLink,faUser,faPhone,faCalendar,faMap,faEnvelope,faGraduationCap,
    faCode,faFileCode,faServer,faCloudArrowUp, faHandshake
  } from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLink,faUser,faPhone,faCalendar,faMap,faEnvelope,faGraduationCap, faCode ,faFileCode,faServer,faCloudArrowUp,faHandshake,faGithub);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // 전역 컴포넌트 등록
app.mount('#app');