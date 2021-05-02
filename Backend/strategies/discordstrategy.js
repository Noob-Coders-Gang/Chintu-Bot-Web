const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");
var scopes = ['identify', 'guilds'];
passport.use(new DiscordStrategy({
    clientID : process.env.CLIENT_ID,
    clientSecret : process.env.CLIENT_SECRET,
    callbackURL : process.env.CLIENT_REDIRECT,
    scope : scopes
},
(accsessToken , refreshToken , profile , done) => {
    console.log(profile);
}));