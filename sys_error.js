/**
 * @class jsError
 * @versin 0.1
 * @author Ricardo de Magalhães Simões
 * --------------------------------------------
 * @description Class to create an Error Object, and handle Erros on the system
 * 
 * @tutorial
 */
_log("sys_error.js", "-x-", "Starting the file execution");

class SysError
{
    constructor( file_name="", function_name="", error_message="", error_stack=null )
    {
        _warn( "sys_error.js", "constructor()", file_name, function_name, error_message, error_stack );

        this.ClassName   = "SysError";
        this.File        = file_name; // @property {string} File The file's name where the error happened
        this.Function    = function_name; // @property {string} Function The function's name where the error happened
        this.Descrition  = error_message; // @property {string} Descrition The error's description
        this.Stack_Trace = this.Stock(error_stack); // @property {object} The calling stack
        this.Time_Stamp  = Date.now(); // @property {number} TimeStant The date and time when the error happened
        this.Handler     = "error_handler.php"; // @property {string} Handler The script that will handle the error on the server side
    }

    /******************************************************************************
     * @method JSON
     * @version 0.1
     * @description Creates a string that represents the actual error
     * @param
     * @returns {string} a string with the 'SysError' properties
     */
    Stringify()
    {
        return JSON.stringify(this);
    }

    /******************************************************************************
     * @method Stack
     * @version 0.1
     * @description Show the calling stack trace, but works only on Firefox
     * @param {string} [stack=""]
     * @returns {object}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack
     */
    Stock( stack="" )
    {
        var heap = [];
        
        if ( stack!=null && stack!=undefined && stack!="" && typeof(stack)==="string")
        {
            if ( stack.indexOf("@file:///") > 0 )
            {
                heap = this.Firefox(stack);
            }
            else
            {
                heap = this.OtherBrowser(stack);
            }

        }

        return heap;
    }

    /******************************************************************************
     * 
     * @tutorial
     */
    Firefox( stack="" )
    {
        //? Pack@file:///R:/rmagalhaess/pack1.js:9:9\nMain@file:///R:/rmagalhaess/functions.js:42:19\n@file:///R:/rmagalhaess/functions.html:13:13\n

        var heap = [];

        var ITENS = stack.split("\n"); 
        for(let i=0; i<ITENS.length; i++)
        {
            var line = ITENS[i].split("@file:///");
            if ( line.length === 2 )
            {
                heap.push(this.SliceFox(line));
            }
        }

        return heap;
    }

    /******************************************************************************
     * 
     * @param {array[2]} line 
     * @returns {object}
     */
    SliceFox( line=[] )
    {
        let error_desc = { file:"", function:"", line:0, column:0 };

        if ( line.length === 2 )
        {
            let file_desc = line[1].split(":"); 
            let file_name = file_desc[0]+":"+file_desc[1];
            
            error_desc.file = decodeURI(file_name);
            error_desc.function = line[0], 
            error_desc.line = parseInt(file_desc[2]), 
            error_desc.column = parseInt(file_desc[3]);
        }

        return error_desc;
    }

    /******************************************************************************
     * 
     */
    OtherBrowser( stack="" )
    {
        // "TypeError: Cannot set properties of undefined (setting 'value')
        //    at Pack (file:///R:/rmagalhaess/OneDrive/Escolas/IFES/Pres.%20Kennedy/Grupo%20de%20Pesquisa/Artigos/01.%20JS%20error%20handling/pack1.js:9:23)
        //    at Main (file:///R:/rmagalhaess/OneDrive/Escolas/IFES/Pres.%20Kennedy/Grupo%20de%20Pesquisa/Artigos/01.%20JS%20error%20handling/functions.js:42:19)
        //    at file:///R:/rmagalhaess/OneDrive/Escolas/IFES/Pres.%20Kennedy/Grupo%20de%20Pesquisa/Artigos/01.%20JS%20error%20handling/functions.html:13:13"

        var heap = [];
        heap.push(stack);
    }

    /******************************************************************************
     * 
     */
    SliceOther( line=[] )
    {
        //
    }

}