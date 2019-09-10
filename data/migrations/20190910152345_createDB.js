exports.up = function(knex) {
  // create a cars table
  return knex.schema.createTable("cars", table => {
    // unique ID
    table.increments();

    // VIN Number, string, VIN Numbers are not null, unique to each vehicle, with a max length of 17
    table
      .string("vinNumber", 17)
      .unique()
      .notNullable();

    // make of vehcile: string 128, not null,
    table.string("make", 128).notNullable();

    // model of vehicle: string 128, not null
    table.string("model", 128).notNullable();

    // mileage: integer, not null
    table.integer("mileage").notNullable();

    // transmission type: string 128
    table.string("transmissionType", 128);

    // title of vehicle: string 128
    table.string("titleStatus", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
