# fxserver-esx_taxijob
FXServer ESX Bus Job

[REQUIREMENTS]

* Auto mode
  * esx_service => https://github.com/FXServer-ESX/fxserver-esx_service
  
* Player management (billing and boss actions)
  * esx_society => https://github.com/FXServer-ESX/fxserver-esx_society
  * esx_billing => https://github.com/FXServer-ESX/fxserver-esx_billing

[INSTALLATION]

1) CD in your resources/[esx] folder
2) Clone the repository
```
git clone https://github.com/FXServer-ESX/fxserver-esx_busjob esx_busjob
```
3) Import esx_busjob.sql in your database

4) Add this in your server.cfg :

```
start esx_busjob
```
5) If you want player management you have to set Config.EnablePlayerManagement to true in config.lua
