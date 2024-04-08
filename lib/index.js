#!/usr/bin/env node
const { program } = require('commander')
const options = require('./options/index.js')
const commands = require('./commands/index.js')

options.version()
// program.option()

options.help()

commands.create()

program.parse(process.argv)
