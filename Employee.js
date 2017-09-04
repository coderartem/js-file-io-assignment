'use strict'

const fs = require('fs')

class Employee {
  constructor (data) {

      this.name = data.name;
      this.title = data.title;
      this.salary = data.salary;
  }

    promote(title,salary){
      this.title = title;
      this.salary = salary;
  }

    static parseFromFilePath(path){
          return new Employee(JSON.parse(fs.readFileSync(path)));
    }
}

module.exports = {
  Employee
}

