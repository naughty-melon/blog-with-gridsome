<template>
  <div class="layout">
    <!-- Navigation -->

    <!-- Page Header -->
    <div class="head-img">
      <div :style="{ position: 'absolute', top: '20px', right: '20px', zIndex: 2 }" @click="toggleFullscreen">
        <el-button :icon="isFullscreen ? 'el-icon-close' : 'el-icon-rank'" circle></el-button>
      </div>
      <div v-for="count in randomData " :key="count + 'l'" :style="{ position: 'absolute', top: randomNum(20, 250)+'px', left: randomNum(150, 400)+'px', zIndex: 1 }">
        <font :style="{ fontSize: randomNum(20, 40)+'px' }">♪</font>
      </div>
      <div v-for="count in (10-randomData)" :key="count + 'r'" :style="{ position: 'absolute', top: randomNum(20, 250)+'px', left: randomNum(900, 1250)+'px', zIndex: 1 }">
        <font :style="{ fontSize: randomNum(20, 40)+'px' }">♪</font>
      </div>
      <h1 class="project-name">Laziji</h1>
      <h2 class="project-tagline">欢迎来到辣子鸡的个人博客。</h2>
      <a href="https://github.com/GitHub-Laziji" target="_blank" class="btn">GitHub主页</a>
      <a href="https://github.com/GitHub-Laziji/vblog" target="_blank" class="btn">博客源码</a>
    </div>
    <div :style="{ position: 'relative', zIndex: 2, margin: '-30px auto auto', width: '64rem' }">
      <el-card class="box-card">
        <el-row>
          <el-col :span="10">
            <el-menu mode="horizontal">
              <el-submenu index="1">
                <template slot="title">了解博主</template>
                <a href="https://github.com/GitHub-Laziji" target="_blank" :style="{textDecoration: 'none'}"><el-menu-item index="1-1">GitHub主页</el-menu-item></a>
                <el-menu-item index="1-2">其他博客</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">其他网站</template>
                <el-menu-item index="2-1">segmentfault</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="8">
            <el-slider />
            <span>00:00:00</span>
          </el-col>
          <el-col :span="4" :style="{ paddingLeft: '20px' }">
            <div :style="{ fontSize: '20px', color: 'rgb(96, 98, 102)', marginTop: '5px' }">
              GitHub-Laziji
            </div>
            <div :style="{ color: 'rgb(96, 98, 102)' }">
              <i class="el-icon-location" />
              fuzhou
            </div>
          </el-col>
          <el-col :span="2">
            <el-dropdown placement='top'>
              <span class="el-dropdown-link">
                <img :src="cardImg" alt="" class="card-img">
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="menu-content">
                  <div>GitHub-Laziji</div>
                  <div><i class="el-icon-star-on" />辣子鸡</div>
                  <div><i class="el-icon-location" />fuzhou</div>
                  <img :src="cardImg" alt="" class="card-img-menu">
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <!-- Main Content -->
    <div class="content">
      <el-row>
        <el-col :span='6'>
          <el-card shadow="never">
            <el-aside>
              <el-menu :default-active="this.$route.path">
                <g-link v-for="item in menuData" :key="item.key" :to="item.path">
                  <el-menu-item :index="item.key">
                    <i :class="item.iconName"></i>
                    <span slot="title">{{ item.textName }}</span>
                  </el-menu-item>
                </g-link>
              </el-menu>
            </el-aside>
          </el-card>
          <el-card :style="{ textAlign: 'center', marginTop: '20px' }">
            <div class="token-line1">
              <el-tag type="danger">&nbsp;</el-tag>
              Token未绑定
              <el-button type="text" @click="dialogFormVisible = true">绑定</el-button>
            </div>
            <div :style="{ marginTop: '10px', textAlign: 'left' }">
               <el-alert
                title="Token获取"
                type="info"
                :closable="false"
                description="在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"
              />
            </div>
            <el-dialog title="绑定Token" :visible.sync="dialogFormVisible" >
              <el-form :rules="rules">
                <el-form-item label="GitHub" prop="github" :label-width="formLabelWidth">
                  <el-tag>GitHub-Laziji</el-tag>
                </el-form-item>
                <el-form-item label="Token" prop='token' error="请输入accessToken" :label-width="formLabelWidth">
                  <el-input  autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
          </el-card>
        </el-col>
        <el-col :span='18' :style="{ paddingLeft: '10px' }">
          <div :style="{ minHeight: '600px' }">
            <!-- 子组件出口 -->
            <slot />
          </div>
        </el-col>
      </el-row>
    </div>

     <!-- Footer -->
    <div class="container">
      <el-row>
        <el-col :span="10">
          <div>
            © 2018 GitHub-Laziji
            <a href="https://github.com/GitHub-Laziji" target="_blank">Profile</a>
            <a href="https://github.com/GitHub-Laziji/vblog" target="_blank">VBlog</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="geography">
            <i class="el-icon-location-outline" />
          </div>
        </el-col>
        <el-col :span="10">
          <div :style="{ float: 'right' }">
            <a href="https://developer.github.com/" target="_blank">Profile</a>
            <a href="https://cn.vuejs.org/" target="_blank">VBlog</a> 
            <a href="https://element.eleme.io/#/" target="_blank">Profile</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import '@liripeng/vue-audio-player/lib/vue-audio-player.css'
import cardImg from '../../static/img/cardImg.jpg'

export default {
  data() {
    return {
      cardImg,
      isFullscreen: false,
      menuData: [
        {
          key: '/',
          path: '/',
          iconName: 'el-icon-star-off',
          textName: '最新动态'
        },
        {
          key: '/social',
          path: '/social',
          iconName: 'el-icon-mobile-phone',
          textName: '社交圈'
        },
        {
          key: '/blog',
          path: '/blog',
          iconName: 'el-icon-edit-outline',
          textName: '博客列表'
        },
        {
          key: '/project',
          path: '/project',
          iconName: 'el-icon-service',
          textName: '开源项目'
        }
      ],
      dialogFormVisible: false,
      formLabelWidth: '100px',
      rules: {
        'token': [
          { required: true, message: '请输入accessToken' }
        ]
      }
    }
  },
  computed: {
    randomData: function (){
      return Math.ceil(Math.random()*8)
    },
  },
  methods: {
    randomNum: function (minNum,maxNum){ 
    switch(arguments.length){
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
      } 
    },
    toggleFullscreen () {
      if (!screenfull.isEnabled) {
        return false
      }
      screenfull.toggle()
      screenfull.on('change', this.change)
    },
    change() {      
      this.isFullscreen = screenfull.isFullscreen
    }
  }
}

</script>

<style>
template {
  font-size: 16px;
}
.head-img {
  background-image: linear-gradient(120deg, rgb(38, 144, 249), rgb(252, 45, 45));
  color: rgb(255, 255, 255);
  padding: 5rem 6rem;
  text-align: center;
}
.project-name {
  font-size: 3.25rem;
  margin-top: 0;
  margin-bottom: .1rem;
}
.project-tagline {
  font-size: 1.25rem;
  margin: 1rem 0 2rem 0;
  font-weight: 400;
  opacity: .7;
}
.btn {
  padding: .75rem 1rem;
  display: inline-block;
  margin: 0 0 1rem 1rem;
  color: hsla(0,0%,100%,.7);
  background-color: hsla(0,0%,100%,.08);
  border: 1px solid hsla(0,0%,100%,.2);
  border-radius: .3rem;
  transition: color .2s,background-color .2s,border-color .2s;
}
.box-card .el-card__body {
  padding: 0
}
.card-img {
  margin-top: 4px;
  margin-right: 10px;
  width: 52px;
  height: 52px;
  border-radius: 5px;
  border: 1px solid rgb(235, 238, 245);
}
.card-img-menu{
  width: 200px;
  height: 200px;
}
.menu-content {
  padding: 10px
}
.audio-play .audio__progress-wrap, .audio-play .audio__time-wrap {
  margin-top: 0
}
.container {
  border-top: 1px solid rgb(225, 228, 232) !important;
  padding: 45px 0;
  font-size: 12px!important;
  color: #586069!important;
}
.container a {
  text-decoration: none;
  color: #1e6bb8;
  margin-left: 20px;
}
.geography {
  text-align: center;
  font-size: 18px;
}
.content {
  max-width: 64rem;
  padding: 30px 0;
  font-size: 1.1rem;
  min-height: 800px;
  margin: 0 auto
}
.token-line1 {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgb(96, 108, 113);
}
.content .el-dialog {
  width: 500px;
}
</style>
