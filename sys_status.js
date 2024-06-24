/**
 * @class SysStatus
 * @version 0.1
 * @author Ricardo de Magalhães Simões
 * --------------------------------------------
 * @description
 * 
 */
_log("sys_status.js", "-x-", "Starting the file execution");

class SysStatus
{
    constructor( name="" )
    {
        this.Name = name;
        this.ClassName = "SysError";
        this.Direction = (+1); // or (-1)
        this.First = 1;
        this.Last = 53;
        this.Interval = null;
        this.Current_Active = 1;
    }

    /******************************************************************************
     * @method Reduce
     * @version 0.1
     * @description
     * @param {number} [index=1]
     * @returns
     */
    Reduce( index=1 ) 
    { 
        //_log("sys_status.js", "Reduce()", { param: index } );

        //document.getElementById("st"+index).style.backgroundColor = "gray"; 
        var td = _ById("st"+index);
        var value = parseInt(td.getAttribute("data-value"));
        switch ( value ) 
        {
            case 0: td.style.backgroundColor  = "#A0A0A0"; break;
            case 1: td.style.backgroundColor  = "#62C562"; break;
            case 2: td.style.backgroundColor  = "#44D644"; break;
            case 3: td.style.backgroundColor  = "#28E728"; break;
            case 4: td.style.backgroundColor  = "#00FF00"; break;
            default: td.style.backgroundColor = "#FF0000"; break;
        }

        if ( value > 0 )
        {
            value -= 1;
            td.setAttribute("data-value", value);
        }
    }

    /******************************************************************************
     * @method Activate
     * @version 0.1
     * @description
     * @param {number} [index=1]
     * @returns
     */
    Activate( index=1 ) 
    { 
        //_log("sys_status.js", "Activate()", { param: index } );

        _ById("st"+index).setAttribute("data-value", "4"); 
    }

    /******************************************************************************
     * @method Alarm
     * @version 0.1
     * @description
     * @param 
     * @returns
     */
    Alarm() 
    { 
        _log("sys_status.js", "Alarm()", { param: null } );

        for(let i=1;i<=this.Last;i++)
        {
            _ById("st"+i).setAttribute("data-value", "-1"); 
        }
    }

    /******************************************************************************
     * @method Animate
     * @version 0.1
     * @description
     */
    Animate()
    {
        //_log("sys_status.js", "Animate()", { param: null } );

        for(let i=1;i<=this.Last;i++) { this.Reduce(i); }

        this.Activate(this.Current_Active);
        this.Current_Active += this.Direction;
        if ( this.Current_Active < this.First || this.Current_Active > this.Last ) 
        { 
            this.Direction = this.Direction*(-1); 
            this.Current_Active += this.Direction; 
        } 
    }

    /******************************************************************************
     * @method Start
     * @version 0.1
     * @description
     * @param {string} [placement="status"]
     */
    Start()
    {
        _log("sys_status.js", "Start()", { param: null } );

        this.HorizontalBar(this.Name);

        this.Interval = setInterval(()=>this.Animate(), 100);
    }

    /******************************************************************************
     * @method HorizontalBar
     * @version 0.1
     * @description
     * @param {string} [placement="status"]
     */
    HorizontalBar( placement="status" )
    {
        _log("sys_status.js", "HorizontalBar()", { param: placement } );

        var table = document.createElement("table");
        var tr = document.createElement("tr");
        for(let col=1; col<=this.Last; col++)
        {
            var td = document.createElement("td");
                td.id = "st"+col;
                //td.innerHTML = col;
                td.setAttribute("data-value", "0");
                td.className = "status_bar";
            
            tr.appendChild(td);
        }
        table.appendChild(tr);

        _ById(placement).appendChild(table);
    }
}