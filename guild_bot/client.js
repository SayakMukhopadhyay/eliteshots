/*
 * KodeBlox Copyright 2021 Sayak Mukhopadhyay
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http: //www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

const discord = require('discord.js')
const bugsnagCaller = require('./bugsnag').bugsnagCaller
const secrets = require('./secrets')

const client = new discord.Client()

client.login(secrets.discord_token)

client.on('ready', () => {
  console.log('Elite Shots Bot ready')
})

client.on('guildMemberAdd', async (member) => {
  try {
    let configModel = require('./models/configs')
    let config = await configModel.findOne()
    await member.roles.add(config.user_role_id)
  } catch (err) {
    bugsnagCaller(err)
  }
})

client.on('error', (err) => {
  bugsnagCaller(err)
})

module.exports = client
