import Node from './Node';
// import fs from 'fs';

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
    let currNode = this.rootNode;
    let finalArr = [];

    while (completeMe.length) {
      if (currNode.children[completeMe[0]]) {
        currNode = currNode.children[completeMe.shift()];
      } else {
        return 'Nothing found';
      }
    }
    this.recursiveSuggest(currNode, finalArr);
    return finalArr;

  }

  recursiveSuggest(currNode, finalArr) {
    if (Object.keys(currNode.children).length > 1) {
      let keysArr = Object.keys(currNode.children);
      let checkpoint = currNode;

      keysArr.forEach(key => {
        currNode = checkpoint;
        currNode = currNode.children[key];
        this.recursiveSuggest(currNode, finalArr);
      });
    } else {
      if (!currNode.end) {
        let key = Object.keys(currNode.children);

        currNode = currNode.children[key];
        this.recursiveSuggest(currNode, finalArr);
      } else {
        finalArr.push(currNode.finalWord);
        currNode.end = !currNode.end;
        let key = Object.keys(currNode.children);

        if (key.length >= 1) {
          this.recursiveSuggest(currNode, finalArr);
        }
      }
    }
    return finalArr;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    })
  }
}