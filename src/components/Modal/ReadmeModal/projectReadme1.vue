<template>
    <div class="readme_container">
        <div id="readme_header">
            <font-awesome-icon icon="star" size="2xl"/>
            <h2 id="readme_title">
                2D 안내도 3D QR 플랫폼
            </h2>
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
</style>
