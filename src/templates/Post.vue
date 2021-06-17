<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" :style="{backgroundImage: `url(http://localhost:1337${$page.strapiPost.cover[0].url})`}">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ $page.strapiPost.title }}</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.strapiPost.content)">
          
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!){
    strapiPost (id: $id) {
      id
      title
      content
      cover {
        url
      }
      tags {
        id
        title
      }
    }
  }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'PostPage',
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style>

</style>