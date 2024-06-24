_log("pack1.js", "-x-", "Starting the file execution");

function Pack( element, value )
{
    var send_error_message = true;
    var content_error_message = "";
    try
    {
        element.value = value;

        //! last line in the TRY block:
        send_error_message = false;
    }
    catch(error)
    {
        //_debug( "Pack1.JS", "Pack()", "error.stack", error.stack);

        content_error_message = String(error);
        throw new SysError("PACK1.JS", "Pack()", content_error_message, error.stack);
    }
    finally
    {
        _debug( "Pack1.JS", "Pack()", "finally", "ending...");
    }
}