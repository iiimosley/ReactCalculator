import {parseDisplay} from './utils';

describe('parseDisplay', ()=>{
    it('should split sumple vals and add', ()=>{
        let input = '1+1';
        let actual = parseDisplay(input);

        expect(actual).toEqual([1,'+',1]);
    });
    it('should handle nums greater that 9', ()=>{
        let input = '123+1';
        let actual = parseDisplay(input);

        expect(actual).toEqual([123,'+',1]);
    });
    it('should handle multiple operators', ()=>{
        let input = '123+1*100';
        let actual = parseDisplay(input);

        expect(actual).toEqual([123,'+',1,'*',100]);
    });
});