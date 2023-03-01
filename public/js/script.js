const titles = document.querySelectorAll('.titleClick')

titles.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault()
    
        const resumoHidden = document.querySelector('.resumoTarefa')
    
        console.log(resumoHidden)
    
        resumoHidden.style.height = 'auto';
    })
})