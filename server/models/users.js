/*
 * KodeBlox Copyright 2019 Sayak Mukhopadhyay
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

module.exports = (async () => {
  let db = require('../db')
  let connection = db.elite_shots
  let mongoose = db.mongoose
  let Schema = mongoose.Schema

  let users = new Schema({
    discord_id: String,
    discord_username: String,
    discord_avatar: String,
    discord_discriminator: String,
    frontier_id: String,
    commander: String,
    email: String,
    trusted: Boolean,
    access: Number
  }, {runSettersOnQuery: true})

  return connection.model('users', users)
})()