custom.onclick = () =>{
    document.body.classList.toggle('custom')
    document.body.classList.remove('normal')
    document.body.classList.remove('custom_2')

}
custom_2.onclick = () =>{
    document.body.classList.toggle('custom_2')
    document.body.classList.remove('normal')
    document.body.classList.remove('custom')
}
normal.onclick = () =>{
    document.body.classList.toggle('normal')
    document.body.classList.remove('custom_2')
    document.body.classList.remove('custom')
}

