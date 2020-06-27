fetch('http://puzzle.mead.io/puzzle').then((response => {
    // then provides parsed json
    response.json().then((data) => {
        console.log(data)
    })
}))