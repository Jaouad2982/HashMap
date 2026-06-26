class HashMap {
  constructor(load_factor, capacity, map) {
    this.map = new Map();
    this._load_factor = load_factor;
    this._capacity = capacity;
  }

  set load_factor(load_factor) {
    this._load_factor = load_factor;
  }

  set capacity(capacity) {
    this._capacity = capacity;
  }

  get load_factor() {
    return this._load_factor;
  }

  get capacity() {
    return this._capacity;
  }

  set(key, value) {
    if (this.map.set(key) == value) {
      key = value;
    }
  }

  has(key) {
    return this.map.has(key);
  }

  remove(key) {
    return this.map.remove(key);
  }

  length() {
    return this.map.size;
  }

  clear() {
    this.map.clear();
  }

  keys() {
    return this.map.keys();
  }

  values() {
    return this.map.values();
  }

  entries() {
    return this.map.entries();
  }
  get(key) {
    if (!key) return null;
    return this.map.get(key);
  }

  hash(key) {
    let hashCode = 1;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
}

const test = new HashMap(0.75, 16);
console.log(test.hash("string"));

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.length());
