const lodashCustom = require('../index');

// Тесты для функции chunk
describe('chunk', () => {
    test('should split an array into chunks of specified size', () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const size = 3;
      const result = lodashCustom.chunk(array, size);
      expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });
  
    test('should return an empty array if the input array is empty', () => {
      const array = [];
      const size = 2;
      const result = lodashCustom.chunk(array, size);
      expect(result).toEqual([]);
    });
  
    test('should return an array with a single chunk if size is greater than the array length', () => {
      const array = [1, 2, 3];
      const size = 5;
      const result = lodashCustom.chunk(array, size);
      expect(result).toEqual([[1, 2, 3]]);
    });
  });
  
  // Тесты для функции compact
  describe('compact', () => {
    test('should remove falsy values from an array', () => {
      const array = [0, false, '', null, undefined, NaN, 1, true, 'hello'];
      const result = lodashCustom.compact(array);
      expect(result).toEqual([1, true, 'hello']);
    });
  
    test('should return an empty array if all values are falsy', () => {
      const array = [false, null, undefined, NaN, 0, ''];
      const result = lodashCustom.compact(array);
      expect(result).toEqual([]);
    });
  
    test('should return the input array if it contains no falsy values', () => {
      const array = [1, 'hello', true];
      const result = lodashCustom.compact(array);
      expect(result).toEqual([1, 'hello', true]);
    });
  });
  
  // Тесты для функции drop
  describe('drop', () => {
    test('should drop n elements from the beginning of an array', () => {
      const array = [1, 2, 3, 4, 5];
      const n = 3;
      const result = lodashCustom.drop(array, n);
      expect(result).toEqual([4, 5]);
    });
  
    test('should drop all elements if n is greater than or equal to the array length', () => {
      const array = [1, 2, 3];
      const n = 5;
      const result = lodashCustom.drop(array, n);
      expect(result).toEqual([]);
    });
  
    test('should return an empty array if the input array is empty', () => {
      const array = [];
      const n = 2;
      const result = lodashCustom.drop(array, n);
      expect(result).toEqual([]);
    });
  });
  
  // Тесты для функции dropWhile
  describe('dropWhile', () => {
    test('should drop elements from the beginning of an array until the predicate returns falsy', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (num) => num < 3;
      const result = lodashCustom.dropWhile(array, predicate);
      expect(result).toEqual([3, 4, 5]);
    });
  
    test('should return an empty array if the input array is empty', () => {
      const array = [];
      const predicate = (num) => num < 3;
      const result = lodashCustom.dropWhile(array, predicate);
      expect(result).toEqual([]);
    });
  
    test('should return the input array if the predicate returns falsy for the first element', () => {
      const array = [1, 2, 3];
      const predicate = (num) => num > 10;
      const result = lodashCustom.dropWhile(array, predicate);
      expect(result).toEqual([1, 2, 3]);
    });
  });
  
  // Тесты для функции take
  describe('take', () => {
    test('should take n elements from the beginning of an array', () => {
      const array = [1, 2, 3, 4, 5];
      const n = 3;
      const result = lodashCustom.take(array, n);
      expect(result).toEqual([1, 2, 3]);
    });
  
    test('should take all elements if n is greater than or equal to the array length', () => {
      const array = [1, 2, 3];
      const n = 5;
      const result = lodashCustom.take(array, n);
      expect(result).toEqual([1, 2, 3]);
    });
  
    test('should return an empty array if the input array is empty', () => {
      const array = [];
      const n = 2;
      const result = lodashCustom.take(array, n);
      expect(result).toEqual([]);
    });
  });
  
  // Тесты для функции filter
  describe('filter', () => {
    test('should return a new array with elements that satisfy the predicate', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (num) => num % 2 === 0;
      const result = lodashCustom.filter(array, predicate);
      expect(result).toEqual([2, 4]);
    });
  
    test('should return an empty array if no element satisfies the predicate', () => {
      const array = [1, 3, 5];
      const predicate = (num) => num % 2 === 0;
      const result = lodashCustom.filter(array, predicate);
      expect(result).toEqual([]);
    });
  
    test('should return an empty array if the input array is empty', () => {
      const array = [];
      const predicate = (num) => num % 2 === 0;
      const result = lodashCustom.filter(array, predicate);
      expect(result).toEqual([]);
    });
  });
  
  // Тесты для функции find
  describe('find', () => {
    test('should return the first element that satisfies the predicate', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (num) => num % 2 === 0;
      const result = lodashCustom.find(array, predicate);
      expect(result).toEqual(2);
    });
  
    test('should return undefined if no element satisfies the predicate', () => {
      const array = [1, 3, 5];
      const predicate = (num) => num % 2 === 0;
      const result = lodashCustom.find(array, predicate);
      expect(result).toBeUndefined();
    });
  
    test('should return undefined if the input array is empty', () => {
      const array = [];
      const predicate = (num) => num % 2 === 0;
      const result = lodashCustom.find(array, predicate);
      expect(result).toBeUndefined();
    });
  });
  
  // Тесты для функции includes
  describe('includes', () => {
    test('should return true if the value is present in the array', () => {
      const array = [1, 2, 3, 4, 5];
      const value = 3;
      const result = lodashCustom.includes(array, value);
      expect(result).toBe(true);
    });
  
    test('should return false if the value is not present in the array', () => {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const result = lodashCustom.includes(array, value);
      expect(result).toBe(false);
    });
  
    test('should return false if the input array is empty', () => {
      const array = [];
      const value = 1;
      const result = lodashCustom.includes(array, value);
      expect(result).toBe(false);
    });
  });
  
  // Тесты для функции map
  describe('map', () => {
    test('should return a new array with the results of applying the function to each element', () => {
      const array = [1, 2, 3, 4, 5];
      const fn = (num) => num * 2;
      const result = lodashCustom.map(array, fn);
      expect(result).toEqual([2, 4, 6, 8, 10]);
    });
  
    test('should return an empty array if the input array is empty', () => {
      const array = [];
      const fn = (num) => num * 2;
      const result = lodashCustom.map(array, fn);
      expect(result).toEqual([]);
    });
  });
  
  // Тесты для функции zip
  describe('zip', () => {
    test('should zip together arrays of the same length', () => {
      const array1 = [1, 2, 3];
      const array2 = ['a', 'b', 'c'];
      const result = lodashCustom.zip(array1, array2);
      expect(result).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
    });
  
    test('should zip together arrays with different lengths', () => {
      const array1 = [1, 2];
      const array2 = ['a', 'b', 'c'];
      const array3 = [true];
      const result = lodashCustom.zip(array1, array2, array3);
      expect(result).toEqual([[1, 'a', true], [2, 'b', undefined], [undefined, 'c', undefined]]);
    });
  });
  
  // Тесты для функции merge
  describe('merge', () => {
    test('should merge two objects', () => {
      const object1 = { a: 1, b: 2 };
      const object2 = { b: 3, c: 4 };
      const result = lodashCustom.merge(object1, object2);
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });
  
    test('should merge multiple objects', () => {
        const object1 = { a: 1 };
        const object2 = { b: 2 };
        const object3 = { c: 3 };
        const result = { ...object1, ...object2, ...object3 };
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
      });
  
    test('should return an empty object if all input objects are empty', () => {
      const object1 = {};
      const object2 = {};
      const result = lodashCustom.merge(object1, object2);
      expect(result).toEqual({});
    });
  });
  
  // Тесты для функции omit
  describe('omit', () => {
    test('should omit specified keys from an object', () => {
      const object = { a: 1, b: 2, c: 3 };
      const keys = ['a', 'c'];
      const result = lodashCustom.omit(object, keys);
      expect(result).toEqual({ b: 2 });
    });
  
    test('should return the input object if no keys are specified', () => {
      const object = { a: 1, b: 2, c: 3 };
      const keys = [];
      const result = lodashCustom.omit(object, keys);
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  
    test('should return an empty object if all keys are specified', () => {
      const object = { a: 1, b: 2, c: 3 };
      const keys = ['a', 'b', 'c'];
      const result = lodashCustom.omit(object, keys);
      expect(result).toEqual({});
    });
  });
  
  // Тесты для функции omitBy
  describe('omitBy', () => {
    test('should omit values from an object that satisfy the predicate', () => {
      const object = { a: 1, b: 2, c: 3 };
      const predicate = (value) => value === 2;
      const result = lodashCustom.omitBy(object, predicate);
      expect(result).toEqual({ a: 1, c: 3 });
    });
  
    test('should return the input object if no values satisfy the predicate', () => {
      const object = { a: 1, b: 2, c: 3 };
      const predicate = (value) => value === 4;
      const result = lodashCustom.omitBy(object, predicate);
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  
    test('should return an empty object if all values satisfy the predicate', () => {
      const object = { a: 1, b: 2, c: 3 };
      const predicate = (value) => value > 0;
      const result = lodashCustom.omitBy(object, predicate);
      expect(result).toEqual({});
    });
  });
  
  // Тесты для функции pick
  describe('pick', () => {
    test('should pick specified keys from an object', () => {
      const object = { a: 1, b: 2, c: 3 };
      const keys = ['a', 'c'];
      const result = lodashCustom.pick(object, keys);
      expect(result).toEqual({ a: 1, c: 3 });
    });
  
    test('should return an empty object if no keys are specified', () => {
      const object = { a: 1, b: 2, c: 3 };
      const keys = [];
      const result = lodashCustom.pick(object, keys);
      expect(result).toEqual({});
    });
  
    test('should return an empty object if none of the specified keys exist', () => {
      const object = { a: 1, b: 2, c: 3 };
      const keys = ['d', 'e', 'f'];
      const result = lodashCustom.pick(object, keys);
      expect(result).toEqual({});
    });
  });
  
  // Тесты для функции pickBy
  describe('pickBy', () => {
    test('should pick values from an object that satisfy the predicate', () => {
      const object = { a: 1, b: 2, c: 3 };
      const predicate = (value) => value > 1;
      const result = lodashCustom.pickBy(object, predicate);
      expect(result).toEqual({ b: 2, c: 3 });
    });
  
    test('should return an empty object if no values satisfy the predicate', () => {
      const object = { a: 1, b: 2, c: 3 };
      const predicate = (value) => value > 3;
      const result = lodashCustom.pickBy(object, predicate);
      expect(result).toEqual({});
    });
  
    test('should return the input object if all values satisfy the predicate', () => {
      const object = { a: 1, b: 2, c: 3 };
      const predicate = (value) => value > 0;
      const result = lodashCustom.pickBy(object, predicate);
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  });
  
  // Тесты для функции toPairs
  describe('toPairs', () => {
    test('should convert an object to an array of key-value pairs', () => {
      const object = { a: 1, b: 2, c: 3 };
      const result = lodashCustom.toPairs(object); // Использование функции toPairs из lodashCustom
      expect(result).toEqual([['a', 1], ['b', 2], ['c', 3]]);
    });
  
    test('should return an empty array for an empty object', () => {
      const object = {};
      const result = lodashCustom.toPairs(object);
      expect(result).toEqual([]);
    });
  
    test('should handle object with non-string keys', () => {
      const object = { 1: 'one', 2: 'two', 3: 'three' };
      const result = lodashCustom.toPairs(object);
      expect(result).toEqual([['1', 'one'], ['2', 'two'], ['3', 'three']]);
    });
  
    test('should handle object with symbols as keys', () => {
        const key1 = Symbol('key1');
        const key2 = Symbol('key2');
        const object = { [key1]: 'value1', [key2]: 'value2' };
        const keys = Reflect.ownKeys(object);
        const result = keys.map(key => [key, object[key]]);
        expect(result).toEqual([[key1, 'value1'], [key2, 'value2']]);
      });                                                                 
  });
