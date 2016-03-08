supertest = require 'supertest'
should    = require 'should'

server = supertest.agent('http://192.168.1.1/cgi-bin/luci')

describe '<%= moduleName %>', () ->
