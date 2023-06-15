const Accomodation = require('./accomodation');
const Transportation = require('./transportation');
const Catering = require('./catering');
const Trending = require('./Trending');


// // Accomodation.hasMany(Transportation, { 
// //     foreignKey: 'trending_id',
// //     onDelete: 'CASCADE'
// // });
// // Transportation.belongsTo(Accomodation, {
// //     foreignKey: 'trending_id',
// //     onDelete: 'CASCADE'
// // });
// Accomodation.hasMany(Catering, { 
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });  
// Catering.belongsTo(Accomodation, {
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });
// Accomodation.hasMany(Trending, { 
//     foreignKey: 'trending_id',
//     // onDelete: 'CASCADE'
// });
// Trending.belongsTo(Accomodation, {
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });

module.exports = { Accomodation, Transportation, Catering, Trending };
