const db = require("../src/database/db.js");

function reset() {
  db.exec(/*sql*/ `
    DELETE FROM reviews;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('users', 'reviews');
  `);

  db.exec(/*sql*/ `
    INSERT INTO users (name, hash, relation) VALUES
      ('John Cooper', 'hash1', 'friend'),
      ('Jane Doe', 'hash2', 'colleague'),
      ('Alice Johnson', 'hash3', 'family')
    ON CONFLICT DO NOTHING;
  `);

  db.exec(/*sql*/ `
    INSERT INTO reviews (user_id, content) VALUES
      (1, 'Great person to be around.'),
      (2, 'Very knowledgeable and helpful.'),
      (3, 'Aggressively helpful.')
    ON CONFLICT DO NOTHING;
  `);
}

// exports
module.exports = { reset };
