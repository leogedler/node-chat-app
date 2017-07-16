const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{   
    it('should generate correct message object', ()=>{
        let from = 'leo';
        let text = 'hi world';
        let message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage', ()=>{
    it('should create location object', ()=>{
        let from = 'leo';
        let latitude = 1;
        let longitude = 2;
        let url = 'https://www.google.com/maps?q=1,2';
        let message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,url});
    });
})