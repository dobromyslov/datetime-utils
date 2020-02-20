import {parseRussianDate} from '../src';

describe('parseRussianDate', () => {
    it('parses correctly', async () => {
        const testDate = '14.12.2020';
        expect(parseRussianDate(testDate).toFormat("dd.MM.yyyy")).toEqual(testDate);
    });
});
