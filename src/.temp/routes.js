const c1 = () => import(/* webpackChunkName: "page--src-pages-social-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\src\\pages\\Social.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-social-detail-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\src\\templates\\SocialDetail.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\src\\pages\\Project.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-project-detail-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\src\\templates\\ProjectDetail.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\src\\pages\\Blog.vue")
const c6 = () => import(/* webpackChunkName: "page--src-templates-blog-detail-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\src\\templates\\BlogDetail.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules-gridsome-0-7-23-gridsome-app-pages-404-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\node_modules\\_gridsome@0.7.23@gridsome\\app\\pages\\404.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\train\\part3-4\\blog-with-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/social/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/socialDetail/:id/",
    component: c2
  },
  {
    path: "/project/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/projectDetail/:id/",
    component: c4
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c5
  },
  {
    path: "/blogDetail/:id/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
