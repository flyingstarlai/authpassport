/**
 * Created by flyin on 2017/11/6.
 */
const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy  = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup option for jwt strategy
const jwtOptions = {};


//