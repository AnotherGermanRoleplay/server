#!/bin/sh

while true; do
	if pgrep -x "v2test" > /dev/null

	then

    	echo "Server is running"
	else
    	echo "Server crashed or stopped"
    	echo "Server is restarting"
    	screen -S v2test bash /home/v2/server/run.sh +exec /home/v2/test/server-test.cfg
    	echo "Server has been started"

	fi

	sleep 5
done
