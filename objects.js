/* let object = {
    name: "John",
    surname: "Smith",
};

object.name = "Pete";

delete object.name;
 */
/* 
 function isEmpty(object) {
    let count = 0;
    
    for(let key in object) {
        if(key) return false;
    }

    return true;
} */

/* 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


  function sum(object) {
      let summ = 0;
      
      if(isEmpty(object)) summ;

      for(let key in object) {
          summ += object[key];
      }
      

      return summ;
  }
 */

  /* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };


  function changeObject(object) {
    for(let i in object) {
        if(typeof object[i] === 'number') {
            menu[i] *= 2;
        }
    }
  }

  changeObject(menu);
  console.log(menu);
 */


/* 
  let calculator  = {
      numberOne,
      numberTwo,
      
      
      read() {
          this.numberOne = +prompt("input one number");
          this.numberTwo = +prompt("input two number");
      },

      sum() {
          return this.numberOne + this.numberTwo;
      },

      mul() {
          return this.numberOne * this.numberTwo;
      }


  };
 */


