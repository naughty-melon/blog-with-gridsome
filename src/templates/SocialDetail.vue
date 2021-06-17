<template>
  <Layout>
    <div>
      <el-card>
        <div slot="header" class="clearfix">
          <span>{{ $page.fun.name }}</span>
          <g-link to="/social/">
            <el-button style="float: right; padding: 3px 0" type="text">《返回</el-button>
          </g-link>
        </div>
        <div>
          <el-row>
            <el-col :span="9">
              <div :style="{ backgroundImage: `url(${GRIDSOME_API_URL + $page.fun.img[0].url})`, width: '200px', height: '200px' }"></div>
              <div>{{ $page.fun.name }}</div>
              <a :href="$page.fun.homepageUrl" target="_blank">{{ $page.fun.homepageUrl }}</a>
            </el-col>
            <el-col :span="15" :style="{ padding: '0 20px 20px 10px' }">
              <div class="rightCont">
                {{ $page.fun.homepageUrl }}
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </Layout>  
</template>

<page-query>
query ($id: ID!){
  fun: strapiFuns (id: $id){
    id
    name
    homepageUrl
    img {
      url
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>
.rightCont {
    width: 100%;
    min-height: 300px;
    border-radius: 5px;
    border: 1px solid rgb(235, 238, 245);
    padding: 10px;
    font-size: 16px;
    color: rgb(106, 115, 125);
}
</style>