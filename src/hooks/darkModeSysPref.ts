
function darkModeSysPref() {
    let systemDefaultIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log('first')
    return systemDefaultIsDark
}
darkModeSysPref()