import { expect, assert } from 'chai';
import Trie from '../lib/Trie';
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

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
    trie.insert('dog');

    expect(Object.keys(trie.rootNode.children)).to.deep.eq(['a', 'd']);
  });
  
});

describe('SUGGEST', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });
  
  it('should be able to suggest words based on a prefix', () => {
    trie.insert('ape');
    trie.insert('apple');
    trie.insert('applesauce');

    expect(trie.suggest('ap')).to.deep.eq(['ape', 'apple', 'applesauce'])
  });

});

describe('POPULATE', () => {
  let trie;
  
  it('should populate when passing in the dictionary', () => {
    trie = new Trie();

    expect(trie.count()).to.eq(0);
    trie.populate(dictionary);
    expect(trie.count()).to.eq(235886);
  });
  
});