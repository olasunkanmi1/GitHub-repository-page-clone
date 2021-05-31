let form = document.getElementById("myForm")


form.addEventListener('submit', function(e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')
    
    window.location.href = `
        https://www.github.com/${originalName}
        `
})
