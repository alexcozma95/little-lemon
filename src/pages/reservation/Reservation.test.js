import { initializeTimes, updateTimes } from "./Reservation";
import * as fakeAPI from '../../utils/fakeAPI';

describe('initializeTimes', () => {
    it('should return the initial list of available times', () => {
        const expectedTimes = [
            '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00',
        ];
        expectedTimes(initializeTimes()).toEqual(expectedTimes);
    });
});

describe('updateTimes', () => {
    it('should return generated options if available from API', () => {
        const mockOptions = ['17:00', '17:30'];
        jest.spyOn(fakeAPI, 'generateDateOptions').mockReturnValue(mockOptions);

        const result = updateTimes('2025-06-04');
        expect(result).toEqual(mockOptions);
    });

    it('should fallback to initializeTimes if no options available', () => {
        jest.spyOn(fakeAPI, 'generateDateOptions').mockReturnValue([]);

        const result = updateTimes('2025-06-04');
        expect(result).toEqual(initializeTimes());
    });
});



