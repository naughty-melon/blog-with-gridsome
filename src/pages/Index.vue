<template>
  <Layout>
    <div>
      <el-card>
        <div slot="header" class="clearfix">
          <el-row>
            <el-col :span="12">
              {{ $page.blogs.edges[0].node.title }}
            </el-col>
            <el-col :span="12">
              <div :style="{ color: '#1e6bb8', fontSize: '14px', textAlign: 'right' }">
                <i class="el-icon-share" @click="handleCopy">分享</i>
                <g-link to="/blog/">
                  <span :style="{ marginLeft: '10px', color: '#1e6bb8' }">···更多微博</span>
                </g-link>
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <div :style="{ fontSize: '14px' }">
            <div>发布{{ $page.blogs.edges[0].node.created_at }}</div>
            <div>更新{{ $page.blogs.edges[0].node.updated_at }}</div>
          </div>
          <div v-html="mdToHtml($page.blogs.edges[0].node.det)">
          </div>
          <div :style="{backgroundImage: `url(${GRIDSOME_API_URL + $page.blogs.edges[0].node.cover[0].url})`, width: '500px', height: '300px'}"></div>
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    blogs: allStrapiBlogs(perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
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
    }
  }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'Index',
  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return {
      
    }
  },
  methods: {
    handleCopy(){

    },
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style>
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
