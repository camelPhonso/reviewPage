BEGIN;

INSERT INTO users (name, hash, relation) VALUES
  ('John Doe', 'hash1', 'friend'),
  ('Jane Smith', 'hash2', 'colleague'),
  ('Alice Johnson', 'hash3', 'family')
ON CONFLICT DO NOTHING;

INSERT INTO reviews (user_id, content) VALUES
  (1, 'Great person to be around.'),
  (2, 'Very knowledgeable and helpful.'),
  (3, 'Always there when you need her.')
ON CONFLICT DO NOTHING;

COMMIT;