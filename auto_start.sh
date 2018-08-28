#!/bin/sh

while true; do
	if pgrep -x "v2" > /dev/null
	then
	    	echo "Server is running"
	else
    		echo "Server crashed or stopped"
    		echo "Server is restarting"
			script /dev/null
    		screen -S v2 bash /home/v2/server/run.sh +exec /home/v2/data/server.cfg
    		echo "Server has been started"
	fi
	sleep 5
done
