const obj = {
    lol: 1,
    lol1: 12,
    "first Name": 'value'
}

const post = {
    "title body": "title body",
    author: "author",
    views: 0,
    isLive: false,
    someFunction: () => {
        console.log("Some value");
    },
    comment: {
        firstName: "firstName",
        lastName: "lastName",
        commentBody: 'lol'
        }
    }
};

let user ={ name: "Mykola" };
let userAge = { age: 26 };
let isAdmin = { isAdmin: true };
// copies all properties from userAge into userAge, and then from userAge into user
const user2 = Object.assign(user, userAge, isAdmin);
console.log(user);
console.log(user2);

user2.name = 'Lol';
console.log(user);

let user1 = { name: "Mykola" };
let userAge1 = { name: 'Lol', age: 26 };
let isAdmin1 = { isAdmin: true };
const userNew = {...user1, ...userAge1, ...isAdmin1};
console.log(user1);
console.log(userNew);