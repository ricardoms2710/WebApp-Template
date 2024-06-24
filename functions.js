_log("functions.js", "-x-", "Starting the file execution");

function First( html_DIV ) 
{ 
    try{ _log("FUNCTIONS.JS", "First()", "first function"); } 
    catch(e){ _warn("functions.js", "First()", e); } 
    finally{  _debug("functions.js", "First()", "1-finally" );  }
}

function Second( html_DIV ) 
{ 
    try{ _log("FUNCTIONS.JS", "Second()", "second function"); First(); } 
    catch(e){ _warn("functions.js", "Second()", e); } 
    finally{  _debug("functions.js", "Second()", "2-finally" );  }
}

function Third( html_DIV ) 
{ 
    try{ _log("FUNCTIONS.JS", "Third()", "third function"); Second(); } 
    catch(e){ _warn("functions.js", "Third()", e); } 
    finally{  _debug("functions.js", "Third()", "3-finally" );  }
}

function Fourth( html_DIV ) 
{ 
    try{ _log("FUNCTIONS.JS", "Fourth()", "fourth function"); Fifth(); } 
    catch(e){ _warn("functions.js", "Fourth()", e); } 
    finally{  _debug("functions.js", "Fourth()", "4-finally" );  }
}

function Fifth( message ) 
{ 
    try{ _log("FUNCTIONS.JS", "Fifth()", message); Fourth(); } 
    catch(e){ _warn("functions.js", "Fifth()", e); } 
    finally{  _debug("functions.js", "Fifth()", "5-finally" );  }
}

function Main()
{
    _log("FUNCTIONS.JS", "Main()");

    try{ First(); Pack(); Second(); } 
    catch(e){ _error("functions.js", "Main()", e); } 
    finally{  _debug("functions.js", "Main()", "M-finally" );  }
}
