<template>
  <Layout>
    <el-card :style="{ marginBottom: '20px' }">
      <el-input v-model="inputData" placeholder="请输入内容" :style="{ width: '300px' }"></el-input>
      <el-button icon="el-icon-search" :style="{ marginLeft: '10px' }" circle @click="handleSearch"></el-button>
      <el-button
        icon="el-icon-share"
        type="warning"
        circle
        v-clipboard:copy="currentHref"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      />
    </el-card>
    <el-card v-for="item in this.itemData" :key="item.node.id" :style="{ marginBottom: '20px' }">
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="16">
            <g-link :to=" '/projectDetail/' + item.node.id">
              <i class="el-icon-edit-outline" :style="{ color: '#1e6bb8' }"></i>
              <span :style="{ color: '#1e6bb8' }">{{ item.node.title }}</span>
            </g-link>
          </el-col>
          <el-col :span="8">
            <div :style="{ color: '#1e6bb8', fontSize: '14px', textAlign: 'right' }">
              <a :href="item.node.githubUrl" target="_blank" :style="{ cursor: 'pointer', marginRight: '15px', textDecoration: 'none', color: '#1e6bb8'}">《-前往GitHub</a>
              <i
                class="el-icon-share"
                v-clipboard:copy="originData + '/blogDetail/' + item.node.id"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                :style="{cursor: 'pointer'}"
              />
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <div class="update">
          最近更新&nbsp;&nbsp;{{ item.node.updated_at }}
        </div>
        <div class="contentDes">
          {{ item.node.description }}
        </div>
        <div>
          <el-row>
            <el-col :span="16">
              <i class="el-icon-star-off">&nbsp;{{ item.node.star }}</i>&nbsp;&nbsp;
              <i class="el-icon-view">&nbsp;{{ item.node.eye }}</i>&nbsp;&nbsp;
              <i class="el-icon-bell">&nbsp;{{ item.node.alert }}</i>&nbsp;&nbsp;
            </el-col>
            <el-col :span="8">
              <div :style="{textAlign: 'right'}">
                <el-tag v-for="it in item.node.tags" :key="it.id" :type="it.type" :style="{ marginRight: '10px' }">{{ it.title }}</el-tag>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
    <div class="pager">
      <Pager @click="handlePaginate" :info="$page.projects.pageInfo"/>
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    projects: allStrapiProjects(perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          star
          eye
          alert
          content
          description
          updated_at
          githubUrl
          tags {
            id
            title
            type
          }
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'
import Clipboard from 'clipboard'

export default {
  data(){
    return {
      inputData: '',
      itemData: [],
      originData: '',
      currentHref: ''
    }
  },
  components: {
    Pager
  },
  mounted(){
    this.itemData = this.$page.projects.edges
  },
  methods: {
    handleSearch(value) {
      this.itemData = this.inputData ? this.itemData.filter(ite => ite.node.title.indexOf(this.inputData) !== -1) : this.$page.projects.edges
      console.log(this.itemData)
    },
    onCopy(e) {
      const h = this.$createElement;
      this.$msgbox({
        title: '提示',
        message: h('p', null, [
          h('i', { style: 'color: teal', class: 'el-icon-success' }),
          h('span', null, '链接已复制,去分享给好友吧!! '),
        ]),
        confirmButtonText: '确定',
        showCancelButton: false,
        showClose:false
      })
    },
    onError(e) {
      console.log(e)
    },
    handlePaginate() {
      this.itemData = this.$page.projects.edges
    }
  }
}
</script>

<style>
.update {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgb(96, 108, 113);
}
.contentDes {
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgb(48, 49, 51);
  padding: 10px 0px 0px;
}
.pager {
  text-align: center;
  margin-top: 10px;
}
.pager a {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  min-width: 30px;
  border-radius: 2px;
  padding: 0 4px;
  height: 28px;
  line-height: 28px;
  box-sizing: border-box;
}
</style>