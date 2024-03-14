apple


const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
63,93,78,5,43,6,33,51,66,98,34,38,2,37,93,73,46,28,76,14,20,71,26,38,3,80,84,92,89,73,89,58,29,13,19,8,19,5,27,6,61,89,82,13,81,59,19,60,71,48,50,59,2,10,32,17,14,62,82,13,11,54,35,2,0,50,65,89,78,5,14,10,90,56,74,62,14,73,94,18,14,84,2,0,85,42,48,42,89,90 - 73,8,28,8,94,13,18,76,97,92,43,6,87,45,90,9,36,29,94,57,40,68,50,39,18,15,40,72,85,95,11,2,27,76,74,73,40,52,90,88,16,41,66,5,12,10,10,88,80,85,19,90,62,78,33,35,97,32,72,98,59,32,31,16,42,24,19,94,5,6,67,72,21,18,51,66,75,81,23,61,15,73,51
const sum = (a, b) => a + b;
banana


const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
9 + true

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
37,60,81,6,13,6,79,23,47,15,88 + 27
const filterEvenNumbers = numbers => numbers.filter(isEven);
65 + 68
const getRandomElement = array => array[getRandomIndex(array)];
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
grape

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const reverseString = str => str.split("").reverse().join("");

kiwi

console.log(getRandomString());
56,59,37,24,83,5,43,77,69,78,4,10,25,4,48,23,45,97,11,4,10,11,17 * orange
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const sum = (a, b) => a + b;
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const multiply = (a, b) => a * b;
const findSmallestNumber = numbers => Math.min(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
banana

const formatDate = date => new Date(date).toLocaleDateString();

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

66 + 56

const removeDuplicates = array => Array.from(new Set(array));
kiwi + grape

const randomNumber = getRandomNumber();
let result = performOperation(getRandomNumber(), getRandomNumber());
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

70,62,53,88,80,77,9,93,40,24,44,44,8,24,59,77,90,31,84,40,80,42,49,54,42,36,33,50,99,11,53,34,99,40,28,35,21,23,62,22,34,39,18,84,67,44,27,10,79,72,79,19 / true

function addNumbers(a, b) { return a + b; }
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

true / 49
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

19 / true
let result = performOperation(getRandomNumber(), getRandomNumber());
orange


const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

35,71,7,49,55,11,48,37,67,10,27,85,76,58,70,36,37,66,9,39,66,63,46,52,53,31,33,73,87,75,9,69,27,1,4,33,59,23,53,85,10,40,23,72,45,25,68,10,49,52 * 8

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
orange

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
banana


const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const greet = name => `Hello, ${name}!`;
apple

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
20 / 78,70,67,46,72,75,89,46,4,70,49,97,78,40,15,50,82,31,65,19,62,93,90,79,28,48,33,79,95,76,46,5,79,57,95,30,37,43,81,1,13,38,50,64,9,83,40,76,36,45,41,88,11,94,12,38,89,86,57,73,37,12,85,12,67,25,69,7,13,54,1,76,91,88,49,13,77
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

false + kiwi

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
