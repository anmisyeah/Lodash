// lodashCustom.js

// ------------------
// Вспомогательные функции
// ------------------

// Проверяет, является ли значение массивом
function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

// Проверяет, является ли значение объектом
function isObject(value) {
  return typeof value === 'object' && value !== null && !isArray(value);
}

// Проверяет, является ли значение функцией
function isFunction(value) {
  return typeof value === 'function';
}

// ------------------
// Функции для работы с массивами
// ------------------

// Разделяет массив на части
function chunk(array, size) {
  if (!isArray(array)) {
    throw new TypeError('Первый аргумент должен быть массивом');
  }
  
  if (!Number.isInteger(size) || size <= 0) {
    throw new TypeError('Второй аргумент должен быть положительным целым числом');
  }
  
  const result = [];
  
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  
  return result;
}

// Удаляет ложные (falsy) значения из массива
function compact(array) {
  if (!isArray(array)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  return array.filter(Boolean);
}

// Удаляет первые n элементов из массива
function drop(array, n = 1) {
  if (!isArray(array)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  return array.slice(n);
}

// Удаляет элементы из массива, пока функция-предикат возвращает true
function dropWhile(array, predicate) {
  if (!isArray(array)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  if (!isFunction(predicate)) {
    throw new TypeError('Предикат должен быть функцией');
  }
  
  let dropCount = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      dropCount = i;
      break;
    }
  }
  
  return drop(array, dropCount);
}

// Возвращает первые n элементов из массива
function take(array, n = 1) {
  if (!isArray(array)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  return array.slice(0, n);
}

// Фильтрует массив с помощью функции-предиката
function filter(array, predicate) {
  if (!isArray(array)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  if (!isFunction(predicate)) {
    throw new TypeError('Предикат должен быть функцией');
  }
  
  return array.filter(predicate);
}

// Находит первый элемент массива, удовлетворяющий функции-предикату
function find(array, predicate) {
  if (!isArray(array)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  if (!isFunction(predicate)) {
    throw new TypeError('Предикат должен быть функцией');
  }
  
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  
  return undefined;
}

// Проверяет, содержит ли массив заданное значение
function includes(array, value) {
  if (!isArray(array)) {
    throw new TypeError('Первый аргумент должен быть массивом');
  }
  
  return array.includes(value);
}

// Применяет функцию-итератор к каждому элементу массива
function map(array, iteratee) {
  if (!isArray(array)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  if (!isFunction(iteratee)) {
    throw new TypeError('Итератор должен быть функцией');
  }
  
  return array.map(iteratee);
}

// Объединяет несколько массивов путем группировки элементов с одинаковыми индексами
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result = [];
  
  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map((arr) => arr[i]));
  }
  
  return result;
}

// ------------------
// Функции для работы с объектами
// ------------------

// Объединяет два объекта, заменяя значения ключей из первого объекта значениями из второго объекта
function merge(object, source) {
  if (!isObject(object) || !isObject(source)) {
    throw new TypeError('Оба аргумента должны быть объектами');
  }
  
  return { ...object, ...source };
}

// Возвращает новый объект без указанных ключей
function omit(object, keys) {
  if (!isObject(object)) {
    throw new TypeError('Первый аргумент должен быть объектом');
  }
  
  if (!isArray(keys)) {
    throw new TypeError('Второй аргумент должен быть массивом');
  }
  
  const result = { ...object };
  
  keys.forEach((key) => {
    delete result[key];
  });
  
  return result;
}

// Возвращает новый объект без свойств, удовлетворяющих функции-предикату
function omitBy(object, predicate) {
  if (!isObject(object)) {
    throw new TypeError('Первый аргумент должен быть объектом');
  }
  
  if (!isFunction(predicate)) {
    throw new TypeError('Второй аргумент должен быть функцией');
  }
  
  const result = { ...object };
  
  for (const key in result) {
    if (predicate(result[key], key, result)) {
      delete result[key];
    }
  }
  
  return result;
}

// Возвращает новый объект, содержащий только указанные ключи
function pick(object, keys) {
  if (!isObject(object)) {
    throw new TypeError('Первый аргумент должен быть объектом');
  }
  
  if (!isArray(keys)) {
    throw new TypeError('Второй аргумент должен быть массивом');
  }
  
  const result = {};
  
  keys.forEach((key) => {
    if (key in object) {
      result[key] = object[key];
    }
  });
  
  return result;
}

// Возвращает новый объект, содержащий только свойства, удовлетворяющие функции-предикату
function pickBy(object, predicate) {
  if (!isObject(object)) {
    throw new TypeError('Первый аргумент должен быть объектом');
  }
  
  if (!isFunction(predicate)) {
    throw new TypeError('Второй аргумент должен быть функцией');
  }
  
  const result = {};
  
  for (const key in object) {
    if (predicate(object[key], key, object)) {
      result[key] = object[key];
    }
  }
  
  return result;
}

// Возвращает массив пар ключ-значение объекта
function toPairs(object) {
  if (!isObject(object)) {
    throw new TypeError('Аргумент должен быть объектом');
  }
  
  return Object.entries(object);
}

module.exports = {
  // Массивы
  chunk,
  compact,
  drop,
  dropWhile,
  take,
  filter,
  find,
  includes,
  map,
  zip,
  // Объекты
  merge,
  omit,
  omitBy,
  pick,
  pickBy,
  toPairs
};
