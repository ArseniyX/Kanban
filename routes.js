import { render, html, h } from 'preact'
import { setup, glob } from 'goober'
import Story from './src/features/Story.js'
import Layout from './src/features/layout/Layout.js'
import Board from './src/features/board/Board.js'

setup(h)


const App = () => {
    // useEffect(() => {
    //     const unsub = devtools(rootStore, { name: 'state name', enabled: true })
    //     return () => unsub()
    // }, [])

    return html`<${Layout}><${Board} /><//> `
}

export const getUri = () => {
    return new URL(window.location.href)
}

const Router = ({ children }) => {
    if (!children.length) return children
    const url = getUri()
    const currentPage = url.searchParams.get('page') || ''

    const Page = children.find(({ props }) => {
        return '/' + currentPage === props.path
    })
    return Page
}

const app = html`<div>
    <${Router}>
        <${App} path="/" />
        <${Story} path="/story" />
    <//>
</div>`

render(app, document.body)
