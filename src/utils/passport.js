const passport = require("passport");
const { Strategy: BearerStrategy } = require("passport-http-bearer");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");

const User = require("../models/users");
const tokenService = require("../services/tokenService");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } =
    process.env;

passport.use(
    new BearerStrategy((token, done) => {
        try {
            const user = tokenService.verifyToken(token);
            if (!user) {
                return done(null, false);
            }
            done(null, user);
        } catch (error) {
            done(error);
        }
    })
);

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: GOOGLE_CALLBACK_URL,
        },
        async (_accessToken, _refreshToken, profile, done) => {
            try {
                const { id: googleId, name: displayName } = profile;

                const user = await User.findOneAndReplace(
                    {
                        googleId,
                    },
                    {
                        name,
                        googleId,
                    },
                    {
                        upsert: true,
                        new: true,
                        runValidators: true,
                    }
                ).lean();

                done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);
