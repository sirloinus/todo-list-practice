const getPosts = () => 
    fetch('http://localhost:3000/posts')
        .then(resp => resp.json())

const getPost = id => 
    fetch('http://localhost:3000/posts/%{id}')
        .then(resp => resp.json())

// const createPost = (title, author) => 
//     fetch("http://localhost:3000/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: title,
//             author: author
//         })
//     })

    const createPost = (post) =>
        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })