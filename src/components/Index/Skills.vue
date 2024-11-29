<template>
    <div class="skills-container">
        <div class="skills-top">
            <font-awesome-icon icon="link" size="2xl" style="color: #ffffff;" />
            <h2 id="skills-title">Skills</h2>
        </div>
        <div class="skills-middle">
            <div class="skills-item">
                <div id="skills-item-label">
                    <font-awesome-icon icon="code" />
                    <p>Language</p>
                </div>
                <div id="skills-item-content">
                    <p id="skills-item-element">C</p>
                    <p id="skills-item-element">C++</p>
                    <p id="skills-item-element">C#</p>
                    <p id="skills-item-element">Java</p>
                    <p id="skills-item-element">Python</p>
                    <p id="skills-item-element">JavaScript</p>
                </div>
            </div>
            <div class="skills-item">
                <div id="skills-item-label">
                    <font-awesome-icon icon="file-code" />
                    <p>Frontend</p>
                </div>
                <div id="skills-item-content">
                    <p id="skills-item-element">React Js</p>
                    <p id="skills-item-element">vue.js</p>
                    <p id="skills-item-element">Node.js</p>
                    <p id="skills-item-element">Three.js</p>
                    <p id="skills-item-element">Html</p>
                    <p id="skills-item-element">Css</p>
                </div>
            </div>
            <div class="skills-item">
                <div id="skills-item-label">
                    <font-awesome-icon icon="database" />
                    <p>Backend</p>
                </div>
                <div id="skills-item-content">
                    <p id="skills-item-element">Spring</p>
                    <p id="skills-item-element">Spring Boot</p>
                    <p id="skills-item-element">SQL</p>
                </div>
            </div>
            <div class="skills-item">
                <div id="skills-item-label">
                    <font-awesome-icon icon="cloud-arrow-up" />
                    <p>DevOps</p>
                </div>
                <div id="skills-item-content">
                    <p id="skills-item-element">AWS</p>
                    <p id="skills-item-element">Docker</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

</script>

<style>
.skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.skills-top {
    display: flex;
    align-items: center;
    gap: 20px;
    /* 이미지와 이름 간의 간격 */
    text-align: center;
}

#skills-title {
    font-size: 50px;
    margin: 0;
    color: white;
}

#skills-item-element{
    border: 2px solid black;
    border-radius: 10px; /* 모서리를 둥글게 */
    background-color: rgb(60, 172, 172);
    width: 110px;
    margin-right: 15px;
    font-weight: 600;
    color:#000000;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.986);
}

.skills-middle {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 1400px;
    text-align: center;
    padding: 20px;
    background-color: #e0b526;
    border-radius: 10px;
    /* 둥근 모서리 */
    box-shadow: 0px 8px 12px rgba(255, 255, 255, 0.986);
}

.skills-item {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px;
}

#skills-item-label {
    width: 20%;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    font-weight: 900;
}

#skills-item-content {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    max-width: 800px;
    /* justify-content: space-between; */
}

@media (max-width:768px) {
    .skills-item {
        display: inline;
        margin-bottom: 10px;
    }

    #skills-item-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: flex-start;
        gap: .5rem;
        margin:10px;
    }
}
</style>