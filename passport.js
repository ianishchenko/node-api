'use strict';

const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-id-token');

const {User} = require('./models/index');
const {configAuth} = require('./config/index');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

function initPassport() {
    passport.use(new GoogleTokenStrategy({
            clientID: configAuth.googleAuth.clientID
        },
        async function (profile, googleId, done) {
            try {
                const user = await User.findOne({'google_id': googleId});
                if (user) {
                    return done(null, user);
                } else {
                    const newUser = await User.create({
                        googleId: googleId,
                        firstName: profile.payload.given_name,
                        lastName: profile.payload.family_name,
                        email: profile.payload.email
                    });
                    return done(null, newUser);
                }
            } catch (e) {
                return done(e);
            }
        }));
}

module.exports = initPassport;

