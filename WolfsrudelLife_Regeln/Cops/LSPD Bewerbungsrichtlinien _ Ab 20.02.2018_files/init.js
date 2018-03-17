/** 
 * © UA - Plugins
 * INIT FOR UA PLUGINS
 *
 * ===============================================================
 * ORGET   !!!!   DON'T FORGET   !!!!   DON'T FORGET   !!!!    DON
 * ===============================================================
 * 
 * Copyright (c) 2015 UA-PLUGINS.COM                   MIT-LICENCE
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * ===============================================================
 * ORGET   !!!!   DON'T FORGET   !!!!   DON'T FORGET   !!!!    DON
 * ===============================================================
 */

console.log("UA Plugins: Init.js succesfull included... Wait for initialising please.")

var ua_init = {
    console: function(cnf) {
        var ftcolor = '#000000';
        
        if(!cnf || !cnf.txt) {
            console.log("%cUA Plugins: Unexpected console error", "color: #FF0000;");
        }else{
            if(!cnf.type) {
                cnf.type = 'black';
            }
            
            if(cnf.type == "error") {
                ftcolor = "#FF0000";
            }else if(cnf.type == "warning") {
                ftcolor = "#FF9900";
            }else if(cnf.type == "ok") {
                ftcolor = "#339966";
            }
            
            console.log("%cUA Plugins: " + cnf.txt, "color: "+ ftcolor +";");
            
        }
    },
    
    settings: {
        consoleLog: true,
        reAttempt: 0,
    },
    
    initialise: function() {
        if(!ua_plugins || ua_plugins.length == 0) {
            ua_init.console({
                txt: "No UA-plugin set was found",
                type: "error"
            })
        }else{
            for (var i = 0; i < ua_plugins.length; i++) {
                ua_init.console({txt: "Calling EA Plugin " + ua_plugins[i].replace("ua_", "") + ".js", type: "ok"});
                eval(ua_plugins[i] + ".init()");
            }
        }
    },
    
    readCookie: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    },
    
    newcCookie: function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    
    newCookie: function(nme, vlu) {
        ua_init.newcCookie(nme, vlu, 365);
    }
};

window.onload = function() {
    ua_init.console({
        txt: "Calling initialising function",
        type: "ok"
    });
    ua_init.initialise();
};
