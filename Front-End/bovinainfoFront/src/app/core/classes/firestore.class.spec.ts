import { Firestore } from './firestore.class';

describe('Firestore', () => {
  it('should create an instance', () => {
    expect(new Firestore()).toBeTruthy();
  });
});
