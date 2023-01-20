import { Apartment } from './apartment';
import { Reservations } from './reservations';
import { User } from './user';

describe('Reservations', () => {
  it('should create an instance', () => {
    expect(new Reservations(new Date(), new Date(), new Apartment("","","","", 5, 6), new User("","","", new Date()) )).toBeTruthy();
  });
});
