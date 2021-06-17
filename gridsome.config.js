// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // 使用本地md文件管理文章内容的插件
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blogs', 'projects', 'funs'],
        // singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    // StrapiPost名字由Strapi+contentTypes定义的内容
    // StrapiPost: [
    //   {
    //     path: '/post/:id',
    //     component: './src/templates/Post.vue'
    //   }
    // ],
    // StrapiTag: [
    //   {
    //     path: '/tag/:id',
    //     component: './src/templates/Tag.vue'
    //   }
    // ],
    StrapiFuns: [
      {
        path: '/socialDetail/:id',
        component: './src/templates/SocialDetail.vue'
      }
    ],
    StrapiBlogs: [
      {
        path: '/blogDetail/:id',
        component: './src/templates/BlogDetail.vue'
      }
    ],
    StrapiProjects: [
      {
        path: '/projectDetail/:id',
        component: './src/templates/ProjectDetail.vue'
      }
    ],
  }
}

