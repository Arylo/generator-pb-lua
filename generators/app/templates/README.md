# PandoraBox_Module_PB_<%= moduleName %>

> Lastest Update Data <%= nowDate %>

## Generate Module

`sh ./jenkins/build.sh`

Please copy **Module Dest Files** to `<feed>/package/pandorabox/luci/`

## Update Module to Device

`sh ./jenkins/files-to-device.sh`

## Test Module on Device

`sh ./jenkins/test.sh`
