import { proxy } from 'valtio'

export const rootStore = proxy({
    tabs: [{ title: 'Platform Launch' }, { title: 'Marketing Plan' }, { title: 'Roadmap' }],
    darkMode: false,
    sidebarOpened: true,
    activeTab: 0
})

export const appendTab = (tab) => rootStore.tabs.push(tab)

export const setActive = (index) => (rootStore.activeTab = index)
