@echo off
echo :: Leere Cache ::

del /F /Q /s cache\files\*

echo :: Starte FiveM Server ::

run run.cmd +exec server.cfg

echo :: FiveM Server is shuted down ::