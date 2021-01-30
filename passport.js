const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./user');

module.exports = () => {
    passport.serializeUser((user, done) => {
        //call when success strategy
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user); //
    });

    passport.use(
        new LocalStrategy(
            {
                // build local strategy
                usernameField: 'id',
                passwordField: 'pw',
                session: true, // restor session
                passReqToCallback: false,
            },
            (id, password, done) => {
                Users.findOne({ id: id }, (findError, user) => {
                    if (findError) return done(findError); // error handle side server
                    if (!user)
                        return done(null, false, {
                            message: `doesn't exit id`,
                        }); // error handel
                    return user.comparePassword(
                        password,
                        (passError, isMatch) => {
                            if (isMatch) {
                                return done(null, user); // success authenticaion
                            }
                            return done(null, false, {
                                message: 'wrong a password',
                            }); // error handle
                        },
                    );
                });
            },
        ),
    );
};
