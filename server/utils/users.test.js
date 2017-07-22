const expect = require('expect');

const {Users} = require('./users');

describe('Users', ()=>{
    let users;

    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Room 1'
        },
        {
            id: '2',
            name: 'Leo',
            room: 'Room 2'
        },
        {
            id: '3',
            name: 'Kary',
            room: 'Room 1'
        }]
    })

    it('should add new user', ()=>{
        let users = new Users();
        let user = {
            id: '123',
            name: 'Leo',
            room: 'Cuarto'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', ()=>{
        let user = users.removeUser('1');
        expect(user).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Room 1'
        });
        expect(users.getUser('1')).toNotExist();
    });

    it('should not remove user', ()=>{
        let user = users.removeUser('112334');
        expect(users.users.length).toBe(3);
    })

    it('should find user', ()=>{
        let user = users.getUser('1');
        expect(user).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Room 1'
        });
    });
    
    it('should not find user', ()=>{
         let user = users.getUser('1232323');
         expect(user).toNotExist();
    });

    it('should return names for Room 1', ()=>{
        let userlist = users.getUserList('Room 1');
        expect(userlist).toEqual(['Mike', 'Kary']);
    });

    it('should return name for Room 2', ()=>{
        let userlist = users.getUserList('Room 2');
        expect(userlist).toEqual(['Leo']);
    })
});