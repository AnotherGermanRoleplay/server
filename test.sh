sh simple_start.sh &
PID=$!
echo "SLEEPING FOR 45 SECONDS"
echo $PID
sleep 45
kill $PID