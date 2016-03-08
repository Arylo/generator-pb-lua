#!/bin/sh

# Update Remote Packages List
opkg update

# Install Depend
opkg install luci-mod-pandorabox

# Delete Cache Files
rm -rf /tmp/luci*
