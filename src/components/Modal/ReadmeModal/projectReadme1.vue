<template>
    <div class="readme_container">
        <div id="readme_header">
            <font-awesome-icon icon="star" size="2xl"/>
            <h2 id="readme_title">
                2D 안내도 3D QR 플랫폼
            </h2>
        </div>
        <div class="readme_summary">
            <font-awesome-icon icon="paperclip" style="color: #FFD43B;" size="xl"/>
            <h2>Summary</h2>
        </div>
        <div class="readme_content">
            <ul>
                <li>
                    content1
                </li>
                <li>
                    content1
                </li>
                <li>
                    content1
                </li>
                <li>
                    content1
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "projectReadme1",
};
</script>
<style>
.readme_container{
    display: flex;
    flex-direction: column;
    width:100%;
    /* align-content: flex-start; */
    /* justify-content: flex-start; */
}
#readme_header{
    display: flex;
    gap:20px;
    padding:10px;
}

#readme_title{
    width: 100%;
    font-size: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(134, 128, 128);
}

.readme_summary{
    width: 100%;
    display: flex;
    align-items: center;
    gap:20px ;
    font-size: 20px;
    padding:10px;
}

.readme_content{
    display: flex;
    align-items: center;
    margin-left:30px;
    padding:20px;
}

li{
    margin-bottom: 5px;
}


</style>
