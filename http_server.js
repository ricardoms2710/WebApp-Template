/**
 * @class HTTPServer
 * @version 0.1
 * @author Ricardo de Magalhães Simões
 * --------------------------------------------
 * @description The class HTTPServer is responsible to handle XMLHTTPRquests
 * 
 * @tutorial
 * @link https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest
 * @link https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
 * @link https://www.w3schools.com/xml/xml_http.asp
 */
_log("server.js", "-x-", "Starting the file execution");

class HTTPServer
{
    constructor()
    {
        this.ClassName = "SysError";
        this.URL = "https://www.impactovar.com.br/program.php";
        this.IP = "";
        this.Sending = false;
        this.Waiting_Response = false;
    }

    /******************************************************************************
     * @method Send
     * @version 0.1
     * @description Send a text message to the server, warning about the error
     * @param {object} Item The object that will be sent to the server
     */
    Send( item=null )
    {
        _log("server.js", "Send()", { param: item } );

        //? SELF is used to avoid conflict with THIS in XML_onreadystatechange
        var self = this; /* testing... */
        var message = "";
        var server = new XMLHttpRequest();

        server.onreadystatechange = function() 
                                    {
                                        console.log(this);
                                        if (this.readyState == 4 && this.status == 200) 
                                        {
                                            /* testing... */
                                            self.Receive(this.responseText);
                                        }
                                    };

        server.open( "POST", this.URL, true );
        server.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        message = this.Prepare(item);
        server.send(message);
    }

    /******************************************************************************
     * @method Receive
     * @version 0.1
     * @description Receive the response from the server, after a warning message
     * @param {string} [response =""]
     */
    Receive( response ="" )
    {
        //_log("server.js", "Receive()", { param: response } );

        _log("SERVER.js", "Receive()", "response: ", response );
    }

    /******************************************************************************
     * @method Prepare
     * @version 0.1
     * @description Extract the properties from an object to a string in the format 
     *              "prop1=value&prop2=value$...", to be send to the server using the
     *              method 'Send()'
     * @param {object} [item=null]
     * @returns {string}
     */
    Prepare( item=null )
    {
        var prepared = "";
        if ( item != null && item != undefined && typeof(item) === "object" )
        {
            for (const [key, value] of Object.entries(item)) 
            {
                prepared += key+"="+value+"&";
            }
            prepared = prepared.substring(0, prepared.length - 1);
    
            _log("SERVER.js", "Prepare()", "prepared: ", prepared );
            prepared = encodeURI(prepared);           
        }

        _log("SERVER.js", "Prepare()", "encodeURI: ", prepared );

        return prepared;
    }
}
