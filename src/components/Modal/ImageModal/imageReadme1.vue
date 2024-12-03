<template>
    <div class="image_container">
        <div id="left_box">
            <button id="img_button_sytle" @click="minusButton"><</button>
        </div>
        <div id="image_box">
            <img :src="`../../../../public/${IMGURL[idx]}`">
        </div>
        <div id="right_box">
            <button id="img_button_sytle" @click="plusButton">></button>
        </div>
    </div>

</template>

<script>
export default{
    data(){
        return{
            IMGURL:["./image.png","./image2.png"],
            idx:0
        }
    },
    methods:{
        minusButton(){
            if(this.idx==0){
                this.idx =this.IMGURL.length-1;
            }else{
                this.idx = this.idx-1
            }
        },
        plusButton(){
            console.log(this.idx)
            if(this.idx ==this.IMGURL.length-1){
                this.idx =0;
            }else{
                this.idx = this.idx +1;
            }
        }
    }
}

</script>

<style>
.image_container{
    width: 100%;
    height: 100%;
    display: flex;
    /* background-color: rgb(248, 247, 240);
    border: 1px solid rgb(148, 138, 138);
    border-radius: 3%; */
}

#left_box{
    width:15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
#image_box{
    width:70%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background:url("./image.png") 50% no-repeat; */
    /* background-size: cover; */
}
#right_box{
    width:15%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
#img_button_sytle{
    width:50px;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    font-size: 20px;
}
</style>