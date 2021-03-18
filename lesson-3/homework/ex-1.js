1   
    const post = {
    titleBody: 'Photo',
    author: 'Nataly',
    views: 89,
    isLive: 'true',

    someFunction: function () {
        console.log('Some value')
    },
    comment: {
        firstName: 'Nataly',
        lastName: 'Apanasenko',
        commentBody: 'Photograph',
    }
};

// 1.1. 

console.log(post.comment.commentBody)
console.log(post.someFunction()) // show bracket notation

console.log(post['comment']['commentBody'])
console.log(post['someFunction']())

const keys1 = Object.keys(post);
console.log(keys1.length);


const keyComent = Object.keys(post);
console.log(keyComent[5]);
const keys = Object.keys(post);
console.log(keys[0]);

// 1.2.

for (let key in post){
    console.log(key)
    console.log(post[key])
};
