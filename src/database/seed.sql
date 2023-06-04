BEGIN;

INSERT INTO users (name, hash, relation) VALUES
  ('John Cooper', 'hash1', 'friend'),
  ('Jane Doe', 'hash2', 'colleague'),
  ('Alice Johnson', 'hash3', 'family')
ON CONFLICT DO NOTHING;

INSERT INTO reviews (user_id, content) VALUES
  (1, 'Great person to be around.'),
  (2, 'Very knowledgeable and helpful.'),
  (3, 'Aggressively helpful.')
ON CONFLICT DO NOTHING;

INSERT INTO sessions (id, user_id, created_at) VALUES
  (1, 2, DATE('now'))
ON CONFLICT DO NOTHING;

COMMIT;