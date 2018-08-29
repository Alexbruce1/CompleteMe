import { expect, assert } from 'chai';
import Trie from '../lib/Trie';
// import Node from '../lib/Node';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('should start with no elements', () => {
    expect(trie.words).to.equal(0);
  });

  it('should set its root to a default of an empty object', () => {
    expect(trie.rootNode.children).to.deep.eq({});
  });

});

describe('INSERT', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should have an insert function', () => {
    assert.isFunction(trie.insert);
    assert.isFunction(trie.recursiveInsert);
  });

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.words).to.eq(0);
    trie.insert('apple');
    expect(trie.words).to.eq(1);
  });

  it('should insert word correctly when calling insert', () => {
    trie.insert('apple');
    trie.insert('dpg');
    console.log(JSON.stringify(trie, null, 4));

    expect(Object.keys(trie.rootNode.children)).to.deep.eq(['a', 'd']);
  });
  
});

describe('SUGGEST', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });
  
  it.skip('should ', () => {});
  
  it.skip('should ', () => {});

});