// pages/index/banner/banner.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 轮播图数据
    bannerList: {
      type: Array,
      value: [
        '../../../assets/banner/banner-1.jpg',
        '../../../assets/banner/banner-2.jpg',
        '../../../assets/banner/banner-3.jpg'
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取被激活的轮播图索引
    getSwiperIndex(event) {
      // console.log(event)
      const { current } = event.detail

      this.setData({
        activeIndex: current
      })
    }
  }
})
