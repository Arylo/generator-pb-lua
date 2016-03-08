#
# Copyright (C) <%= nowYear %>-<%- cYear %> PandoraBox Team
#
# This is free software, and you can ask **Lintel** get the Lincense
#

include $(TOPDIR)/rules.mk

PKG_NAME:=pb-<%= pkgName %>
PKG_VERSION:=<%- Version %>
PKG_RELEASE:=<%- VersionNum %>
PKG_MAINTAINER:=<%- author %>

PKG_BUILD_DIR := $(BUILD_DIR)/$(PKG_NAME)

include $(INCLUDE_DIR)/package.mk

define Package/pb-<%= pkgName %>
    SECTION:=luci
    CATEGORY:=LuCI
    SUBMENU:=3. Applications
    TITLE:=PB <%= moduleName %>
    DEPENDS:=+luci-mod-pandorabox
endef

define Package/pb-<%= pkgName %>/description
    <%= moduleName %> Api Below PB
endef

define Build/Prepare
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/pb-<%= pkgName %>/install
    $(CP) ./files/* $(1)/
endef

$(eval $(call BuildPackage,pb-<%= pkgName %>))
