import { glob } from 'goober'

glob`
    :root,
    :root.light {
        --main-background: #F4F7FD;
        --secondary-elements: #fff;
    }

    :root.dark {
        --main-background: #20212C;
        --secondary-elements: #2B2C37;
    }
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
        position: relative;
        width: 100%;
        height: 100%;
        background: var(--main-background);
        padding: 0;
        margin: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
`
