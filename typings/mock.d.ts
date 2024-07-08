interface MockAppItem {
  id: string
  name: string
  icon: string
}

interface MockAppListItem {
  group: string
  list: Array<MockAppItem>
}
