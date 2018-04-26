// // Keys.js- figure out what set of credentials to return
// if (process.env.NODE_ENV === 'production') {
//     // we are in production - return production set of keys
//     module.exports = require('./prod');
// } else {
//     // we are in development - return the dev keys
//     module.exports = require('./dev');
// }

// module.exports = {
//     googleClientID: '170148185039-gcj6u1d4upc4r4n13k11jmu897vqmvqk.apps.googleusercontent.com',
//         googleClientSecret: 'W6f_03cZbGf5pfOSGRtOx4iw',
//         cookieKey: 'jfasefowiefhskjfhksfhafe'
// };

module.exports = {
        googleClientID: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        cookieKey: process.env.COOKIE_KEY
    };