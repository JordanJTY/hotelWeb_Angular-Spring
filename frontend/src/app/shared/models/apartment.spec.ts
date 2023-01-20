import { Apartment } from './apartment';

describe('Apartment', () => {
  it('should create an instance', () => {
    expect(new Apartment("","","","", 5, 6)).toBeTruthy();
  });
});
