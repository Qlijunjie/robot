<template>
  <div id="app">
    <JwChat-index
      :taleList="List"
      @enter="bindEnter"
      v-model="inputMsg"
      :showRightBox="true"
      scrollType="scroll"
      :config="config"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      List: [
      ],
      inputMsg: '',
      config: {
        img: 'https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg',
        name: '兄弟们,超帅',
        dept: '兄弟们 我爱你们啊',
        historyConfig: {
          tip: '没有更多数据了',
        }
      },
    }
  },
  methods: {
    bindEnter () {
      if (this.inputMsg === '') {
        alert('不能为空')
        return
      }
      this.List.push({
        "date": Date.now(),
        "text": { "text": this.inputMsg },
        "mine": true,
        "name": "留恋人间不羡仙",
        "img": "https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg"
      })
      this.$axios.get(`api/api.php`, {
        params: {
          key: 'free',
          appid: 0,
          msg: this.inputMsg
        }
      }).then(res => {
        let c = res.data.content.replace(/{br}/g, '<br />')
        this.List.push({
          "date": Date.now(),
          "text": { "text": c },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg"
        })
      })
      // console.log(encodeURI(this.inputMsg))
    },
  }
}
</script>

<style>
</style>
