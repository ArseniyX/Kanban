import { proxy } from 'valtio'
import data from '../data.json' assert { type: 'json' }
import { updateParams } from '../common/utils.js'

export const rootStore = proxy({
    boards: data.boards,
    darkMode: false,
    sidebarOpened: true,
    activeTab: 0,
    activeTabName: 'Platform Launch',
    columns: data.boards[0].columns
})

export const appendTab = (board) => rootStore.boards.push(board)

export const setActive = (index) => {
    rootStore.activeTab = index
    rootStore.activeTabName = rootStore.boards[index].name
    rootStore.columns = rootStore.boards[index].columns
    updateParams({ key: 'board', value: rootStore.activeTabName })
}

export const setDarkMode = (state) => {
    document.documentElement.className = state ? 'dark' : 'light'
    rootStore.darkMode = state
}
