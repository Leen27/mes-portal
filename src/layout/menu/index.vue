<script setup lang="ts">
import { VueElement, h, reactive } from 'vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import type { ItemType } from 'ant-design-vue'

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group'
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type
  } as ItemType
}

const content = `<span>Option 1</span><span>sub 1</span>`
const items = reactive([
  {
    key: '1',
    icon: () => h(MailOutlined),
    label: h('div', { children: 'sub' }, 'wowo'),
    title: 'Option 1'
  },
  {
    key: '2',
    icon: () => h(AppstoreOutlined),
    label: 'Option 2',
    title: 'Option 2'
  },
  {
    key: '3',
    icon: () => h(AppstoreOutlined),
    label: 'Option 3',
    title: 'Option 3'
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5'
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6'
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7'
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8'
      }
    ]
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9'
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10'
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11'
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12'
          }
        ]
      }
    ]
  }
])

// const items: ItemType[] = reactive([
//   getItem('测试环境', 'sub1', () => h(MailOutlined), [
//     getItem('产品', '1'),
//     getItem('STIC', '2'),
//     getItem('Naura', '3'),
//     getItem('Sidtek', '4')
//   ]),
//   getItem('Demo环境', 'sub2', () => h(AppstoreOutlined), [getItem('产品', '5')])
// ])

const state = reactive({
  collapsed: false,
  rootSubmenuKeys: ['sub1', 'sub2'],
  openKeys: ['sub1'],
  selectedKeys: []
})
const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1) as string
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : []
  }
}

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed
  state.openKeys = state.collapsed ? [] : state.openKeys
}
</script>
<template>
  <div style="width: 240px">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="state.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :open-keys="state.openKeys"
      :inline-collapsed="state.collapsed"
      :items="items"
      @openChange="onOpenChange"
    ></a-menu>
  </div>
</template>
<style scoped></style>
