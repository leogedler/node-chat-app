

class Users {
    constructor(){
        this.users = [];
    }

    addUser(id, name, room){
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id){
        let removedUser;
        this.users = this.users.filter((user)=> {
            if(user.id !== id){
                return true;
            }else{
                removedUser = user;
                return false
            }
        });
        return removedUser;
    }

    getUser(id){
        return this.users.filter((user)=> user.id === id)[0];
    }
    getUserList(room){
        let users = this.users.filter((user)=> user.room === room);
        let nameArray = users.map((user)=> user.name);

        return nameArray;
    }
}

module.exports = {Users};


// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription(){
//         return `${this.name} is ${this.age} years old`
//     }
// };

// let me = new Person('Leo', 25);