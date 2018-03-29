<template>
  <div>
    <Nav></Nav>
    <div :style='bg'>
      <el-input placeholder="请输入查询内容"  style="width: 350px;left: 50%;top: 49%;margin-left: -175px;margin-top: -20px;" v-model="input">
        <el-button slot="append" icon="el-icon-search" v-on:click="animation"></el-button>
      </el-input>
    </div>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <el-main>
          <div class="waterfall">
            <CardPoet v-for="i in poet" :name=i.name :alter-name=i.alter_name :born=i.born :death=i.death info='略' work='略' :ob=i.ob></CardPoet>
            <CardPoem v-for="i in poem" :name=i.name :author=i.author  :content=i.content :id=i.o></CardPoem>
            <CardPoem v-for="i in poemnew" :name=i.title :author=i.name  :content=i.content :id=i.poem></CardPoem>
          </div>
        </el-main>
      </el-container>
      <el-aside width="10%" class="aside"></el-aside>
    </el-container>
  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import CardPoet from '../components/card-poet.vue'
  import CardPoem from '../components/card-poem.vue'

  export default {
    components: {Nav,CardPoet,CardPoem},
    data(){
      return{
        bg:{
          width: 'auto',
          height: '673px',
          transition: 'all 0.2s',
          backgroundImage: "url(" + require('../../static/image/background.jpg') + ")",
          backgroundSize:'cover'
        },
        input:'',
        poet:[],
        poem:[],
        poemnew:[]
      }
    },
    methods:{
      animation(){
        this.bg.height='200px';
        this.result();
      },
      result(){
        this.poet=[];
        this.poem=[];
        this.poemnew=[];
        this.$api.get('/datasource/unknownquery?name='+this.input, null, json=> {
//          console.log(json);
          if(json.length===0){
            this.$api.get('datasource/naturequery?content='+this.input,null,r=>{
//              console.log(r);
              this.poemnew=[...r];
            });
          }else{
            if (json[0].born) {//判断单个实体的类型，是古诗还是诗人
              this.poet=[...json];
            } else {
              this.poem=[...json];
            }
          }
        });
      },
    }
  }
</script>
