// strategy file 

const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const DiscordUser = require('../database/models/user');
var session = require('express-session')


passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser(async (id, done) =>{
    const user = await DiscordUser.findById(id);
    if(user){
        done(null, user);
    }
})


passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
    try{

        const user = await DiscordUser.findOne({ discordId: profile.id});
        if(user) {
            const UpdatedUser = await DiscordUser.update({ _id : user.id } ,{$set : { 
                username : profile.username,
                guilds : profile.guilds
            }},(err,data)=>{  
                if(err){  
                    console.log('update error',err)  
                }  })
                done(null, user);
        }else{
            console.log('a new user entered!')
            const newUser = await DiscordUser.create({
                discordId: profile.id,
                username: profile.username,
                guilds : profile.guilds,
            });
            const savedUser = await newUser.save();
            done(null, savedUser);
        }

    }catch(err) {
        console.log(err);
        done(err, null);
    }
    
}));