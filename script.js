// JavaScript 文件的基本模板

// 定义一个简单的函数
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// 定义一个对象
const person = {
  name: 'John Doe',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// 定义一个数组
const numbers = [1, 2, 3, 4, 5];

// 定义一个类
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// 使用严格模式
'use strict';

// 事件监听器示例
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed.');
});

// 调用函数
sayHello('World');

// 调用对象的方法
person.greet();

// 创建一个Animal类的实例并调用其方法
const dog = new Animal('Rex');
dog.speak();

// 数组方法的使用
numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});
