/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("messages", (table) => {
        table.increments("id").primary();
        table.string("senderId").notNullable();
        table.string("receiverId").notNullable();
        table.text("text").notNullable();
        table.timestamp("createdAt").defaultTo(knex.fn.now());
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
