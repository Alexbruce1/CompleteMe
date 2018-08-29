import Node from './Node';

export default class Trie {
  constructor() {
    this.rootNode = new Node();
    this.words = 0;
  }

  insert(string) {
    let currNode = this.rootNode;
    let lettersArr = [...string];

    this.recursiveInsert(lettersArr, currNode, string);
    this.words++;
  }

  recursiveInsert(lettersArr, currNode, string) {
    if (!lettersArr.length) {
      currNode.end = true;
      currNode.finalWord = string;
      return;
    }

    if (currNode.children[lettersArr[0]]) {
      currNode = currNode.children[lettersArr.shift()];
    } else {
      currNode.children[lettersArr[0]] = new Node();
      currNode = currNode.children[lettersArr.shift()];
    }

    return this.recursiveInsert(lettersArr, currNode, string);
  }

  count() {
    return this.words;
  }

  suggest(prefix) {
    let completeMe = [...prefix];
    let currNode = this.root;

    while (completeMe.length) {
      if (currNode.children[completeMe[0]]) {
        currNode = currNode.children[completeMe.shift()];
      } else {
        return 'Nothing found';
      }
    }

  }

  delete() {}
}