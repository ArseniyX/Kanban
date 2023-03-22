import { proxy } from 'valtio'
import data from '../data.json' assert { type: 'json' }
import { updateParams } from '../common/utils.js'

export const rootStore = proxy({
    boards: data.boards,
    darkMode: false,
    sidebarOpened: true,
    activeTab: 0,
    activeTabName: 'Platform Launch',
    columns: data.boards[0].columns,
    openTask: false,
    openAddTask: false,
    openEditTask: false,
    openBoard: false,
    openDeleteBoard: false,
    selectedTask: {}
})

export const appendTab = (board) => rootStore.boards.push(board)

export const setActive = (boardId) => {
    rootStore.activeTab = boardId
    rootStore.activeTabName = rootStore.boards[boardId].name
    rootStore.columns = rootStore.boards[boardId].columns
    updateParams({ key: 'board', value: rootStore.activeTabName })
}

export const setDarkMode = (state) => {
    const value = state ? 'dark' : 'light'
    document.documentElement.className = value
    rootStore.darkMode = state
    updateParams({ key: 'theme', value })
}

export const toggleSidebar = () => {
    rootStore.sidebarOpened = !rootStore.sidebarOpened
}

export const closeTask = () => {
    rootStore.openTask = false
}

export const openTask = (columnId, taskId) => {
    rootStore.selectedTask = rootStore.columns[columnId].tasks[taskId]
    rootStore.openTask = true
}

export const openAddTask = () => {
    rootStore.openAddTask = true
}

export const toggleEditTask = () => {
    rootStore.openEditTask = false
    rootStore.openAddTask = false
}
