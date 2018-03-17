/** 
 * © UA - Plugins
 * PRODUCT: User Messages
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

var ua_pluginName = "messages";

if(!ua_plugins) {
    var ua_plugins = ["ua_" + ua_pluginName];
}else{
    ua_plugins.push("ua_" + ua_pluginName);
}

var ua_messages = {
    conf: {
        errID: 0,
    },
    init: function() {
        // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) return false;
                
    
        // First granted them, before receiving them!
        if(ua_messages_uid == 0 || ua_messages_uid == null) {
            ua_init.console({
                txt: "No user login detected. Please login to receive messages.",
                type: "warning"
            });
        }else{
            // Notifs supported?
            if (!("Notification" in window)) {
                ua_messages.conf.errID = 1;
                ua_messages.runErrorNotification();
                return false;
            }
            
            // Did you denied it?! Bleh :(
            if (Notification.permission === 'denied') {
                ua_messages.conf.errID = 2;
                ua_messages.runErrorNotification();
                return false;
            }
            
            // Not asked yet?
            if (Notification.permission !== "granted") {
                // Didn't wanted it?
                if(ua_init.readCookie("ua_asked_granded_notifs") == "") {
                    ua_messages.directPluginRequest();
                }else{
                    ua_messages.runErrorNotification();
                }
            }else{
                // Yeah, you wanted it! :D
                ua_messages.runRequest();
                setInterval(function() {
                    ua_messages.runRequest();
                }, 60000);
            }
        }
    },
    runErrorNotification: function() {
        $("body").append("<div id='ua_messages_warning_alert' style='position: fixed; bottom: 15px; right: 15px; margin-left: -25px; width: 50px; height: 50px; background-image: url("+ ua_messages_rooturl + "/images/ua-plugins/alert.png); background-position: center center; background-repeat: no-repeat; cursor: pointer;'></div>");
        
        $("#ua_messages_warning_alert").click(function() {
            if(ua_messages.conf.errID == 1)
            {
                alert(ua_messages_language.browserUnsupported);
            }
            else if (ua_messages.conf.errID == 2)
            {
                ua_messages.directPluginRequest(true);
            }else{
                ua_messages.directPluginRequest();
            }
            
            return;
        });
    },
    directPluginRequest: function(isBlocked) {
        if(!isBlocked) {
            var isBlocked = false;
        }
        
        $("#ua_messages_warning_alert").hide();
        
        if(isBlocked == false) {
            var text = ua_messages_language.permissionRequest;
            var links = '<a href="javascript:void(0)" onclick="ua_messages.noDontWantIt();" style="color: #FFFFFF; background: #BC2727; padding: 10px; float: left; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; -o-border-radius: 3px;">'+ ua_messages_language.permissionNoNotif +'</a> <a href="javascript:void(0)" onclick="ua_messages.requestPermission();" style="color: #FFFFFF; background: #54BF21; padding: 10px; float: right; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; -o-border-radius: 3px;">'+ ua_messages_language.permissionRequestNotif +'</a>';
        }else{
            var text = '<span style="color: #FF0000;">'+ ua_messages_language.permissionBlocked +'</span>';
            var links = '<a href="javascript:void(0)" onclick="ua_messages.noDontWantIt();" style="color: #FFFFFF; background: #BC2727; padding: 10px; float: right; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; -o-border-radius: 3px;">'+ ua_messages_language.blockedCloseMessage +'</a>';
        }
        
        $("body").append(
            '<div id="ua_messages_bg" style="background-color: rgba(0, 0, 0, 0.4); position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 999999999;"></div>' + 
            '<div id="ua_messages_container" style="position: fixed; left: 50%; top: 50%; margin-top: -150px; margin-left: -250px; background-color: #FFFFFF; border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; -webkit-border-radius: 5px; width: 500px; z-index: 9999999991; text-align: left;">' +
                '<div style="padding: 20px; padding-bottom: 10px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #DBDBDB">'+ ua_messages_language.requestTitle +'<a href="http://www.ua-plugins.com/" style="color: #8A8A8A !important; font-size: 9px; font-weight: normal; display: inline-block; padding-top: 7px; float: right;" target="_blank">&copy; UA-Plugins.com</a></div>' +
                '<div style="padding: 20px; padding-top: 10px; font-size: 14px;">' +
                    ua_messages_language.information + '<br><br>' + text +
                '</div>' +
                        
                '<div style="padding: 10px 20px; font-size: 14px; font-weight: bold; border-top: 1px solid #DBDBDB; background: #F0F0F0;-webkit-border-bottom-right-radius: 5px;-webkit-border-bottom-left-radius: 5px;-moz-border-radius-bottomright: 5px;-moz-border-radius-bottomleft: 5px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;">'+ links +'<br clear="all"></div>' +
            '</div>'
        );
    },
    noDontWantIt: function() {
        ua_init.newCookie("ua_asked_granded_notifs", "asked", 365);
        $("#ua_messages_bg, #ua_messages_container").hide();
        $("#ua_messages_warning_alert").show();
    },
    requestPermission: function() {
        Notification.requestPermission();
        
        var ua_messages_timeIn = setInterval(function() {
            if (Notification.permission == "granted" || Notification.permission === 'denied') {
                $("#ua_messages_bg, #ua_messages_container").hide();
            }
        }, 500);
    },
    createMessage: function(msgInfo) {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        } else {
            var notification = new Notification(msgInfo.title, {
                icon: msgInfo.icon,
                body: msgInfo.text
            });
            
            notification.onclick = function () {
                window.open(msgInfo.url);
            };
        }
    },
    
    runTestMessage: function() {
        ua_messages.createMessage({
            title: "UA Plugins - Messages",
            icon: ua_messages_rooturl + "/images/ua-plugins/ua_plugins.png",
            text: "Welcome to UA Messages. The test message has been sent succesfully! Thank you for using UA Plugins!",
            url: "http://ua-plugins.com"
        });
    },
    
    runRequest: function() {
        $.ajax({ 
            type: 'GET', 
            url: 'xmlhttp.php?action=ua_createRequests',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(key, val) {
                    ua_messages.createMessage({
                        title: val.title,
                        icon: ua_messages_rooturl + "/images/ua-plugins/"+ val.icon +".png",
                        text: val.body,
                        url: val.webUrl
                    });
                });
            }
        });
    }
}

/**
 * Initialise UA Plugin Init.js
 */
if(!window.jQuery)
{
    console.log("%cUA Plugins Error: jQuery not defined. Please include jQuery.", "color: #FF0000;");
}else{
    if(typeof ua_init == 'undefined') {
        console.log("UA Plugins: Including init.js... Please wait...");
        
        var ua_messages_js = document.createElement("script");
        ua_messages_js.type = "text/javascript";
        ua_messages_js.src = ua_messages_rooturl + "/jscripts/ua-plugins/init.js";
        
        document.getElementsByTagName('head')[0].appendChild(ua_messages_js);
    }
}