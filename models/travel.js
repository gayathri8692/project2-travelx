const db = require('../db/config');
const Travel = {};

Travel.findAll = () => {
  return db.query('SELECT * FROM state_tbl ORDER BY id ASC');
  
};

Travel.findAllCity = id => {
  return db.query('SELECT * FROM city_tbl ORDER BY id ASC');
};

Travel.findAllCityById = id => {  
return db.query('SELECT * FROM city_tbl, state_tbl WHERE state_tbl.state=$1 AND state_tbl.id=city_tbl.state_id', [id]);
};

Travel.findInfo = id => {
  return db.oneOrNone('SELECT food, attraction, id FROM city_tbl WHERE id = $1', [id]);
}

Travel.findCityInfo = id => {
  return db.oneOrNone('SELECT food, attraction, id FROM city_tbl WHERE city = $1', [id]);
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