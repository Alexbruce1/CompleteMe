import { expect } from 'chai';
import Node from '../lib/Node';

describe('test', function () {
  let node = new Node();

  it('should have default properties', function () {
    expect(node).to.deep.eq({children: {}, end: null })
  });
});