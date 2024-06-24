
class Interface
{
    constructor( name="", structure=[] )
    {
        this.Name = name;
        this.Structure = structure;
        this.Link = "https://www.algumacoisa.com.br";
    }

    /******************************************************************************
     * 
     */
    Menu()
    {
        try
        {
            _start("INTERFACE.JS", "MENU()");
            var ul = document.createElement("ul");
            for(let i=0; i<this.Structure.length; i++)
            {
                var item = this.Structure[i];
                ul.appendChild(this.Item(item));            
            }
    
            var div = _ById(this.Name);
                div.appendChild(ul);

            _finish("INTERFACE.JS", "MENU()");
        }
        catch(error)
        {
            //_error( "INTERFACE.JS", "MENU()", error );

            let content_error_message = String(error);
            throw new SysError("INTERFACE.JS", "MENU()", content_error_message, error.stack);
        }
    }

    /******************************************************************************
     * 
     */
    Item( item="" )
    {
        _log("INTERFACE.JS", "Item()", "item", item);
        try
        {
            
            var li = document.createElement("li");
                li.innerHTML = item;
                li.addEventListener("click", 
                                    function() 
                                    { 
                                        _debug("INTERFACE.JS", "Item()", "Clicou no: "+item); 
                                    },
                                    false );
    
            return li;
        }
        catch(error)
        {
            let content_error_message = String(error);
            throw new SysError("INTERFACE.JS", "Item()", content_error_message, error.stack);
        }
    }
}