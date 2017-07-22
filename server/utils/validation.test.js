const expect = require('expect');

let {isRealString} = require('./validation');

describe('isRealString', ()=>{  
    it('should reject non-string value', ()=>{
        let name = 12323;
        expect(isRealString(name)).toBe(false);
    });
    
    it('should reject string with only spaces', ()=>{
        let name = '    ';
        expect(isRealString(name)).toBe(false);
    });

    it('should allow string with none-spaces characters', ()=>{
        let name = 'Leonardo';
        expect(isRealString(name)).toBe(true);
    });

});