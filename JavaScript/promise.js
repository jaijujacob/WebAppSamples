const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii')
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pokie')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise1, promise2]).then(values => {
    console.log(values);
})


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'

]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])

}).catch(() => console.log('error'))


const getDat = async function () {
    try {

        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('Ooops', err)
    }
}

getDat();