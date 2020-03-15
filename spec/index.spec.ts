import {parseRussianDate, parseRussianDateTime} from '../src';

describe('parseRussianDate', () => {
    it('parses correctly', async () => {
        const testDate = '14.12.2020';
        expect(parseRussianDate(testDate).toFormat('dd.MM.yyyy')).toEqual(testDate);
    });
});

describe('parseRussianDateTime', () => {
  it('parses correctly', async () => {
    const testDateTime = '28.02.2020 11:20:44';
    expect(parseRussianDateTime(testDateTime)?.toFormat('dd.MM.yyyy HH:mm:ss')).toEqual(testDateTime);
  })
});
