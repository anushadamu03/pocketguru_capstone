/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.string("id").primary().unique()
        table.string("name").notNullable(); 
        table.string("email").notNullable().unique(); 
        table.string("password").notNullable();
        table.string("expertise");
        table.text("bio"); 
        table.text("role"); 
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
