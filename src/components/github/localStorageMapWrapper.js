// TODO: Extract to own package
import isPromise from 'p-is-promise';

const ls = window.localStorage;


export default {
  has(key) {
    return ls.getItem(key) !== null;
  },
  get(key) {
    return JSON.parse(ls.getItem(key));
  },
  set(key, value) {
    if (isPromise(value.data)) {
      value.data.then((innerData) => {
        const valueToSave = value;
        valueToSave.data = innerData;
        ls.setItem(key, JSON.stringify(valueToSave));
      });
    } else {
      ls.setItem(key, JSON.stringify(value));
    }
  },
  delete(key) {
    return ls.removeItem(key);
  },
  clear() {
    return ls.clear();
  }
};
