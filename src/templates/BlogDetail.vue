<template>
  <Layout>
    <div>
      <el-card>
        <div slot="header" class="clearfix">
          <el-row>
            <el-col :span="12">
              {{ $page.blog.title }}
            </el-col>
            <el-col :span="12">
              <div :style="{ color: '#1e6bb8', fontSize: '14px', textAlign: 'right' }">
                <i
                  class="el-icon-share"
                  :style="{cursor: 'pointer'}"
                  v-clipboard:copy="currentHref"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >分享</i>
                <g-link to="/blog/">
                  <span :style="{ marginLeft: '10px', color: '#1e6bb8' }">···更多微博</span>
                </g-link>
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <div :style="{ fontSize: '14px' }">
            <div>发布{{ $page.blog.created_at }}</div>
            <div>更新{{ $page.blog.updated_at }}</div>
          </div>
          <div v-html="mdToHtml($page.blog.det)">
          </div>
          <div :style="{backgroundImage: `url(${GRIDSOME_API_URL + $page.blog.cover[0].url})`, width: '500px', height: '300px'}"></div>
        </div>
      </el-card>
    </div>
  </Layout>  
</template>

<page-query>
  query ($id: ID!){
    blog: strapiBlogs (id: $id) {
      id
      title
      content
      det
      cover {
        url
      }
      created_at
      updated_at
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
  },
}
</script>

<style>

</style>