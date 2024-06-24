/**
 * @file Console
 * @version 0.1
 * @author Ricardo de Magalhães Simões
 * --------------------------------------------
 * @description JS console functions with shorter name, or pre-formated values
 */

console.log("console.js", "-x-", "Starting the file execution");

var something = { _: "👻", toString: function() {return "_:"+this._;} };

function _log( file_name, function_name, ...params ) 
{ 
    console.log("✅", file_name, function_name, params); 
}

function _warn( file_name, function_name, ...params ) 
{ 
    console.log("⚠️", file_name, function_name, params); 
}

function _error( file_name, function_name, ...params ) 
{ 
    console.log("⛔", file_name, function_name, params); 
}

function _debug( file_name, function_name, ...params ) 
{ 
    console.log("⏺️", file_name, function_name, params); 
}

function _start( file_name, function_name, ...params ) 
{ 
    console.log("↘️", file_name, function_name, params); 
}

function _finish( file_name, function_name, ...params ) 
{ 
    console.log("↙️", file_name, function_name, params); 
}

function _ById( id="" )
{
    return document.getElementById(id);
}