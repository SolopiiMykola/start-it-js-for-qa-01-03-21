const post = {
    title : "Test title",
    author: "Serhii Voloshyn",
    views: 10,
    isLive: true,
    someFunction:() => {
        return "Десять";
    }
}

console.log(post.someFunction())