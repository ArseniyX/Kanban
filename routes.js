import { render, html, h } from 'preact'
import { setup, glob } from 'goober'
import Story from './features/Story.js'
import Layout from './features/layout/Layout.js'

setup(h)

const GlobalStyles = glob`
  :root {
    --primary-text-color: #fff;
    --primary-background-color: #635FC7;
    --primary-background-hover-color: #A8A4FF;
    --secondary-color: #635FC7;
    --secondary-background-color: #635FC71A;
    --secondary-background-hover-color: #635FC740;
    --destructive-color: #fff;
    --destructive-background-color: #EA5555;
    --destructive-background-hover-color: #FF9898;
    --main-color: #635fc7;
    --main-hover-color: #635fc739;
    --checkbox-background-color: #F4F7FD;
    --input-field-text-color: #828FA3;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`

const App = () => {
    return html`<${Layout}>sweet app<//> `
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
    <${GlobalStyles} />
    <${Router}>
        <${App} path="/" />
        <${Story} path="/story" />
    <//>
</div>`

render(app, document.body)
