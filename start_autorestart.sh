#!/bin/sh

while true; do
	if pgrep -x "server1" > /dev/null

	then

    	echo "Server is running"
	else
    	echo "Server crashed or stopped"
    	echo "Server is restarting"
    	screen -S server1 bash /home/fxserver/run.sh +exec /home/fivem/server.cfg > logfile.log
    	echo "Server has been started"

	fi

	sleep 5
done
