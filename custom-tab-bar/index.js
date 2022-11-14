// custom-tab-bar/index.js
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../store/store";


Component({
  options: {
    styleIsolation:'shared'
  },
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      active: 'activeTabBarIndex'
    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [{
      "pagePath": "/pages/turntable/turntable",
      "text": "每日一转",
      "iconPath": "/assets/tab_icons/turntable.png",
      "selectedIconPath": "/assets/tab_icons/turntable-active.png"
    },
    {
      "pagePath": "/pages/home/home",
      "text": "首页",
      "iconPath": "/assets/tab_icons/home.png",
      "selectedIconPath": "/assets/tab_icons/home-active.png"
    },
    {
      "pagePath": "/pages/center/center",
      "text": "个人中心",
      "iconPath": "/assets/tab_icons/center.png",
      "selectedIconPath": "/assets/tab_icons/center-active.png"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      console.log(this.data.active);
      this.updateActive(event.detail);
      wx.switchTab({
        url: this.data.list[event.detail].pagePath
      })
    },
  }
})
