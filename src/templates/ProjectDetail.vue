<template>
  <Layout>
    <div>
      <el-card :style="{ marginBottom: '20px' }">
        <div slot="header" class="clearfix">
          <el-row>
            <el-col :span="16">
              <i class="el-icon-edit-outline" :style="{ color: '#1e6bb8' }"></i>
              <span :style="{ color: '#1e6bb8' }">{{ $page.project.title }}</span>
            </el-col>
            <el-col :span="8">
              <div :style="{ color: '#1e6bb8', fontSize: '14px', textAlign: 'right' }">
                <i
                  class="el-icon-share"
                  :style="{cursor: 'pointer'}"
                  v-clipboard:copy="currentHref"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >分享</i>
                <a :href="$page.project.githubUrl" target="_blank" :style="{ cursor: 'pointer', margin: '0 10px', textDecoration: 'none', color: '#1e6bb8'}">《-前往GitHub</a>
                <g-link to="/project/">
                  <span :style="{ marginLeft: '10px', color: '#1e6bb8' }">···更多微博</span>
                </g-link>
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <div class="update">
            <div>发布&nbsp;&nbsp;{{ $page.project.created_at }}</div>
            <div>更新&nbsp;&nbsp;{{ $page.project.updated_at }}</div>
          </div>
          <div class="contentDes">
            {{ $page.project.description }}
          </div>
          <div>
            <el-row>
              <el-col :span="16">
                <i class="el-icon-star-off">{{ $page.project.star }}</i>&nbsp;&nbsp;
                <i class="el-icon-view">{{ $page.project.eye }}</i>&nbsp;&nbsp;
                <i class="el-icon-bell">{{ $page.project.alert }}</i>&nbsp;&nbsp;
              </el-col>
              <el-col :span="8">
                <div :style="{textAlign: 'right'}">
                  <el-tag v-for="it in $page.project.tags" :key="it.id" :type="it.type">{{ it.title }}</el-tag>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-divider></el-divider>
        <div v-html="mdToHtml($page.project.content)"></div>
      </el-card>
    </div>
  </Layout>  
</template>

<page-query>
  query ($id: ID!){
    project: strapiProjects (id: $id) {
      id
      title
      star
      eye
      alert
      content
      description
      created_at
      updated_at
      githubUrl
      tags {
        id
        title
        type
      }
    }
  }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  data(){
    return {
      currentHref: ''
    }
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
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
    }
  }
}
</script>

<style>

</style>