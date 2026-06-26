class HashMap {
  load_factor = 0.75;
  capacity = 16;
  map = new Map();

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

  getKeys(map) {
    for (const key of map) {
      console.log(key);
    }
  }

  getValues(map) {
    for (const value of map) {
      console.log(value);
    }
  }

  getEntries(map) {
    for (const [key, value] of map) {
      console.log(key, value);
    }
  }

  getKey(key) {
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

const test = new Map();
// console.log(test.hash("string"));

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

console.log(test.size);

test.set("moon", "silver");
test.forEach((key, val) => {
  console.log(key, val);
});

const hashmap = new HashMap();
hashmap.map = test;
console.log(hashmap.map);
console.log(hashmap.load_factor, hashmap.capacity);

console.log(hashmap.map.has("apple"));
console.log(hashmap.map.values());
for (const value of hashmap.map.values()) {
  console.log(value);
}

hashmap.getEntries(test);
console.log(hashmap.getKey("apple"));
console.log(hashmap.hash("string"));
hashmap.getValues(test);
hashmap.getKeys(test);
hashmap.getEntries(test);
