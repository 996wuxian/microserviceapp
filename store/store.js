import { observable, action } from "mobx-miniprogram";

export const store = observable({
  // 数据字段
  activeTabBarIndex: 0,
  // 计算属性
 
  // actions
  updateActiveTabBarIndex: action(function (index) {
    this.activeTabBarIndex = index
  })
});