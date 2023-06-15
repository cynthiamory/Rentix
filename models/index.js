const Accomodation = require('./accomodation');
const Transportation = require('./Transportation');
const Catering = require('./catering');
const Trending = require('./Trending');


// Accomodation.hasMany(Transportation, { 
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });
// Transportation.belongsTo(Accomodation, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });
// Accomodation.hasMany(Catering, { 
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });  
// Catering.belongsTo(Accomodation, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });
// Accomodation.hasMany(Trending, { 
//     foreignKey: 'user_id',
//     // onDelete: 'CASCADE'
// });
// Trending.belongsTo(Accomodation, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

module.exports = { Accomodation, Transportation, Catering, Trending };
