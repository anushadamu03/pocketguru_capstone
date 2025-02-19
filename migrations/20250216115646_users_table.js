/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); 
    table.string("name").notNullable(); 
    table.string("email").notNullable().unique(); // Unique email
    table.string("password").notNullable(); // Hashed password
    table.string("expertise");
    table.text("bio"); 
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Timestamp
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
