const title = document.getElementById("post-title")
const img = document.getElementById("post-image-url")
const content = document.getElementById("post-content")
const postList = document.getElementById("post-list")
const postForm = document.getElementById("post-form")

// equivalent method - js will create key for each variable
// const post = (title, img, content) => ({
//     title,
//     img,
//     content
// })

const addPost = post => {
    const postEl = document.createElement("li")
    postEl.innerHTML = `
    <li>
        <h2>${post.title}</h2>
        <h2>${post.content}</h2>
        <img src="${post.img}"/>
    </li>
    `
    postList.appendChild(postEl)
}

postForm.addEventListener("submit", event => {
    event.preventDefault()

    const post = {
        title: title.value,
        img: img.value,
        content: content.value
    }

    createPost(post)
        .then(post => addPost(post))
        .catch(error => alert("Soz"))

    title.value = ""
    img.value = ""
    content.value = ""
})

const addPosts = posts =>
    posts.forEach(post => addPost(post))

getPosts()
    .then(posts => addPosts(posts))