exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vinNumber: "5FNRL18983B140486",
          make: "Ford",
          model: "Mustang",
          mileage: 21000,
          transmissionType: "manual",
          titleStatus: "clean"
        },
        {
          vinNumber: "3VWMZ7AJ2AM651469",
          make: "Chevrolet",
          model: "Camaro",
          mileage: 34567,
          transmissionType: "manual",
          titleStatus: "clean"
        }
      ]);
    });
};
