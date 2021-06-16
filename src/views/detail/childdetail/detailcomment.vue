<template>
  <div class="commentInfo">
    <!-- <div v-if="Object.keys(comment).length !== 0" class="detailcomment"> -->
    <!-- 如有有就展示 -->
    <div class="comment-head">
      <div class="head-title">
        <span>用户评价</span>
        <div class="head-more">查看更多评论</div>
      </div>
    </div>
    <!-- 展示用户头像跟名字 -->
    <!-- <div class='info-use'>
        <img :src='comment' alt=''>
        <span>{{comment.user.name}}</span>
      </div> -->

    <!-- <div class="info-detail">
        <p>{{ 展示评价内容 }}</p>
        <div class="info-other">
          <span class="date">
            {{ 展示时间 || showDate}}//时间戳转换
            </span>
          <span>{{展示衣服样式}}</span>
        </div>
        <div class='info-img'>
        //展示评价图片
          <img :src='item' v-for='(item,index) in comment.img' :key='index'>
        </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "detailcomment",
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.comment-info {
  position: absolute;
  font-size: 16px;
}
.comment-head {
  margin: 80px 0px;
  background-color: #fff;
  position: relative;
}

.head-more {
  float: right;
}
</style>