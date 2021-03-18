let Post = [
    1,
    false,
    "строка",
    undefined,
    a = () => {
        console.log(1);
    },
    [{key: "value"}, {}]
]

let array = [
    21, 
    true, 
    'ololo',
    underfined,
    zzz = () => {
    
    console.log('hello am function') },
    
    zzz = [
    apple,
    orange]


const f = () => { console.log('hello')}
const obj = {a: 1, b = 2}
const Post = [1, '123', true, undefined, f, [obj, {}] ]

// - Get the first and last array value
console.log(Post[0])
console.log(Post[Post.length-1])
// - Get value of function by array index and log value
console.log(Post[5][0])

let Post = [
    1,
    false,
    "строка",
    undefined,
    a = () => {
        console.log(1);
    },
    [[{key: "value"}, {}]]
]

// - Get the first and last array value
console.log(Post[0])
console.log(Post[Post.length - 1]);
console.log(Post[4]())
console.log(Post[Post[4]()])
// - Get value of function by array index and log value
console.log(Post[Post.length - 1][0][0]);