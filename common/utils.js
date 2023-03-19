export const updateParams = ({ key, value, state = true }) => {
    const url = new URL(window.location.href)
    state ? url.searchParams.set(key, value) : url.searchParams.delete(key)
    window.history.replaceState(null, '', url)
    window.scrollTo({
        top: 0
    })
}
