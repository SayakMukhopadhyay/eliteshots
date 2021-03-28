/*
 * KodeBlox Copyright 2020 Sayak Mukhopadhyay
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

const express = require('express')
const mongoose = require('mongoose')

const backblaze = require('../modules/backblaze')
const processVars = require('../../processVars')

let albumModel = require('../models/albums')
let imageModel = require('../models/images')

let imageUrlRoute = processVars.imageUrlRoute

let router = express.Router()

let imagesPerFetch = 4
let ObjectId = mongoose.Types.ObjectId

let bannedAccess = 'BANNED'

module.exports = router