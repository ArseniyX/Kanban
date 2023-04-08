import { proxy } from 'valtio'
import data from '../../data.json' assert { type: 'json' }
import { updateParams } from '../../src/common/utils.js'

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
    openAddBoard: false,
    openEditBoard: false,
    openDeleteBoard: false,
    selectedTask: {}
})

const defaultTask = {
    title: '',
    description: '',
    status: 'Todo',
    subtasks: []
}

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
    rootStore.selectedTask.columnId = columnId
    rootStore.selectedTask.taskId = taskId
    rootStore.openTask = true
}

export const openAddTask = () => {
    rootStore.openAddTask = true
}

export const openEditTask = () => {
    rootStore.openEditTask = true
    rootStore.openTask = false
}

export const closeAddEditTask = () => {
    rootStore.openEditTask = false
    rootStore.openAddTask = false
    rootStore.selectedTask = defaultTask
}

export const openEditBoard = () => {
    rootStore.openEditBoard = true
}

export const openAddBoard = () => {
    rootStore.openAddBoard = true
}

export const closeAddEditBoard = () => {
    rootStore.openAddBoard = false
    rootStore.openEditBoard = false
}

export const toggleDeleteDialog = () => {
    rootStore.openDeleteBoard = !rootStore.openDeleteBoard
}

export const updateSubtask = ({ index, isCompleted }) => {
    rootStore.selectedTask.subtasks[index].isCompleted = isCompleted
}

export const updateStatus = ({ index, status }) => {
    const { columnId, taskId } = rootStore.selectedTask
    // remove from prev columns
    rootStore.columns[columnId].tasks = rootStore.columns[columnId].tasks.filter((_, index) => taskId !== index)
    // add to curr column
    rootStore.columns[index].tasks.push({ ...rootStore.selectedTask, status })
    const currTaskId = rootStore.columns[index].tasks.length - 1
    // update selected
    openTask(index, currTaskId)
}

export const deleteSubtask = (index) => {
    rootStore.selectedTask.subtasks = rootStore.selectedTask.subtasks.filter((_, id) => id !== index)
}

export const deleteColumn = (index) => {
    data.boards[0].columns = data.boards[0].columns.filter((_, id) => id !== index)
}

export const addSubtask = () => {
    rootStore.selectedTask.subtasks.push({ title: '', isCompleted: false })
}

export const updateTask = ({ title, description, subtasks }) => {
    rootStore.selectedTask
}

export const onDragStarted = (e, { taskId, columnId }) => {
    rootStore.columns[columnId].tasks[taskId].hidden = true
}
