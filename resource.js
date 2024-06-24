/**
 * @class Resource
 * @version 0.1
 * @author Ricardo de Magalhães Simões
 * -----------------------------------
 * @description
 * 
 * @tutorial
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 */
_log("resource.js", "-x-", "Starting the file execution");

// we iterate over all method names
Object.getOwnPropertyNames(Foo.prototype).forEach((name) => {

  // First to do: we save the original method. Adding it to prototype
  // is a good idea, we keep 'method1' as '_method1' and so on
  Foo.prototype['_' + name] = Foo.prototype[name];

  // Next, we replace the original method with one that does the logging
  // before and after method execution. 
  Foo.prototype[name] = function() {

    // all arguments that the method receives are in the 'arguments' object
    console.log(`Method call: method1(${Object.values(arguments).join(', ')})`);

    // now we call the original method, _method1, on this with all arguments we received
    // this is probably the most confusing line of code here ;)
    // (I never user this['method'] before - but it works)
    const result = this['_' + name](...arguments);

    // here is the post-execution logging
    console.log(`Method result: ${result}`);

    // and we need to return the original result of the method
    return result;
  };
});

class Resource
{
    constructor( class_name="" )
    {
        this.Class_Name = class_name;
        this.Content = null;
    }

    //----------------------------------------------------------------------------------
    Set( property="", value=null ) { try { this[property] = value; } catch(e) { /* ... */ } }
    Get( property="" )             { try { return this[property]; } catch(e) { /* ... */ } }

    //----------------------------------------------------------------------------------
    Assimilate( object=null )
    {
        var TYPES = ["SysError", "SysStatus", "HTTPServer", "Program" ];
        if ( TYPES.indexOf(typeof(object)) )
        {
            // var PROPS = Object.keys(object);
            // ...
            // Object.defineProperty(this, 'prop_name', {value: 42, writable: false});
        }
    }

    //----------------------------------------------------------------------------------
    Stringify()
    {
        return JSON.stringify(this);
    }

    //----------------------------------------------------------------------------------
    Objectify( string="" )
    {
        //
    }
}