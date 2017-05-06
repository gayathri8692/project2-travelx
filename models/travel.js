const db = require('../db/config');
const Travel = {};

Travel.findAll = () => {
  return db.query('SELECT * FROM state_tbl ORDER BY id ASC');
  
};

Travel.findAllCity = id => {
  return db.query('SELECT * FROM city_tbl ORDER BY id ASC');
};

Travel.findAllCityById = id => {  //the values can not be selected by strings so using foriegn key get the id first and store in a variable and query them using the second table's id
  var state_id = db.query('SELECT id FROM state_tbl WHERE state = $1', [id]);
  return db.query('SELECT * FROM city_tbl ORDER BY id ASC WHERE state_id = $1', [state_id]);
};

Travel.findInfo = id => {
  return db.oneOrNone('SELECT food, attraction, id FROM city_tbl WHERE id = $1', [id]);

}

Travel.update = (info, id) => {
  return db.none(
    `
      UPDATE city_tbl SET
      food = string_to_array($1, ','),
      attraction = string_to_array($2, ',')
      WHERE id = $3
    `,
    [info.food,info.attraction, id]
  );
};


Travel.destroy = id => {
  return db.none(
    `
     UPDATE city_tbl SET
     food = string_to_array('', ',')
     WHERE id = $1
    `,
    [id]
  );
};

module.exports = Travel;