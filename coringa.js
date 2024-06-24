// https://stackoverflow.com/questions/60363513/how-to-execute-a-function-before-and-after-each-class-method-call
// How to execute a function before and after each class method call?

class Foo {
/*
    before(funName, ...params){
      // Should print ('method1', [p1, p2]) when method 1 is called
      // and ('method2', [p3]) when method 2 is called
      console.log(funName, params)
    }
    after(funName, result){
      // Should print the function name followed by its result
      console.log(funName, result)
    }
*/    
    method1(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;
    }
    method2(p3) {
      this.p3 = p3;
    }
  }

// we iterate over all method names
// Please note that this code is not part of the class itself, execute it as a normal script.
// And there is a good chance that this short proof of concept crashes on real-world classes and requires some additional checks and special-case handlers
Object.getOwnPropertyNames(Foo.prototype).forEach((name) => {

    // 1º) we save the original method. Adding it to prototype is a good idea, 
    //     we keep 'method1' as '_method1' and so on
    Foo.prototype['_' + name] = Foo.prototype[name];
  
    // 2º) we replace the original method with one that does the logging before and after method execution. 
    Foo.prototype[name] = function() 
                        {
                            // doing somethig BEFORE:
                            console.log("call: method1("+Object.values(arguments).join(',')+")");

                            // 3º) now we call the original method, with all arguments we received:
                            const result = this['_' + name](...arguments);

                            // doing somthing AFTER:
                            console.log("result: method1()="+result);

                            // and we need to return the original result of the method
                            return result;
                        };
  });