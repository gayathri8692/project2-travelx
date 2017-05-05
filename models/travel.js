const db = require('../db/config');
const Travel = {};

Travel.findAll = () => {
  return db.query('SELECT * FROM state_tbl ORDER BY id ASC');
  
};

Travel.findAllCity = id => {
  return db.query('SELECT * FROM city_tbl ORDER BY id ASC');
};

Travel.findInfo = id => {
  return db.oneOrNone('SELECT food, attraction, id FROM city_tbl WHERE id = $1', [id]);

}

Travel.update = (info, id) => {
  return db.none(
    `
      UPDATE city_tbl SET
      food = ($1),
      attraction = ($2)
      WHERE id = $3
    `,
    [info.food,info.attraction, id]
  );
};

// Travel.update = (attraction, id) => {
//   return db.none(
//     `
//       UPDATE city_tbl SET
//       attraction = $1,
//       WHERE id = $2
//     `,
//     [attraction.attraction, id]
//   );
// };


Travel.destroy = id => {
  return db.none(
    `
     UPDATE city_tbl SET
     food = ''
     WHERE food = $1
    `,
    [id]
  );
};

module.exports = Travel;