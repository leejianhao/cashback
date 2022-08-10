import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { Tabbar, TabbarItem, NavBar, ConfigProvider, Tab, Tabs } from 'vant'

const app = createApp(App)
app.use(router)

// 配置vant主题
app.use(ConfigProvider)
// 按需注册vant组件
app.use(Tabbar)
app.use(TabbarItem)
app.use(NavBar)
app.use(Tab)
app.use(Tabs)

app.use(store).use(router).mount('#app')
