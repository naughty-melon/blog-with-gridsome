<template>
  <Layout>
    <el-card :style="{ minHeight: '400px' }">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="粉丝" name="first">
          <div>
            <el-row>
              <el-col :span="8"  v-for="item in $page.funs.edges" :key="item.node.id" :style="{ padding: '10px' }">
                <el-card>
                  <i class="el-icon-star-off"></i>
                  <g-link :to=" '/socialDetail/' + item.node.id">
                    <span>{{ item.node.name }}</span>
                  </g-link>
                  <br/>
                  <i class="el-icon-message"></i>
                  <a :href="item.node.homepageUrl" target="_blank">{{ item.node.homePage }}</a>
                  <div :style="{backgroundImage: `url(${GRIDSOME_API_URL + item.node.img[0].url})`, width: '150px', height: '150px'}"></div>
                </el-card>
              </el-col>
            </el-row>
            <div class="pager">
              <Pager :info="$page.funs.pageInfo"/>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关注" name="second">
          <div>
            <el-row>
              <el-col :span="8"  v-for="item in $page.funs.edges" :key="item.node.id" :style="{ padding: '10px' }">
                <el-card>
                  <i class="el-icon-star-off"></i>
                  <g-link :to=" '/socialDetail/' + item.node.id">
                    <span>{{ item.node.name }}</span>
                  </g-link>
                  <br/>
                  <i class="el-icon-message"></i>
                  <a :href="item.node.homepageUrl" target="_blank">{{ item.node.homePage }}</a>
                  <div :style="{backgroundImage: `url(${GRIDSOME_API_URL + item.node.img[0].url})`, width: '150px', height: '150px'}"></div>
                </el-card>
              </el-col>
            </el-row>
            <div class="pager">
              <Pager :info="$page.funs.pageInfo"/>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    funs: allStrapiFuns(perPage: 9, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          name
          homePage
          homepageUrl
          img {
            url
          }
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  components: {
    Pager
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<style>
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