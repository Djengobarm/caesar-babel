import * as assert from 'assert';
import * as chai from 'chai';
import { caesar } from '../src/caesar';

describe('caesar', function() {
  it('should convert abc to bcd if key is 1', () => {
    assert.equal(caesar('abc', 1), 'bcd');
  });
  it("should go to start of alphabet if it reaches it's end", () => {
      assert.equal(caesar('z', 1), 'a');
  });
  it('should keep intact any chars which are not in the alphabet', () => {
      assert.equal(caesar('!', 1), '!');
  });
  it('should throw error if key is greater than alphabet length', () => {
      chai.expect(() => { caesar('abc', 777) }).to.throw('Key is invalid');
  });
});