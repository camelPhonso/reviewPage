INSERT INTO users VALUES
  (1, 'Ciccio', 'ahsktodtport', 'Colleague at herbivores'),
  (2, 'Patricio', 'shtkepdnfotas', 'Met him once on the train'),
  (3, 'R. L. Stine', 'sghepasktdot', 'Never met the man')
ON CONFLICT DO NOTHING;

INSERT INTO reviews VALUES
  (1, 2, "Absolutely the best commuter I've ever laid eyes on.", "2023-05-02 13:14:53"),
  (2, 3, "I don't understand what this is about.", "2023-06-01 15:07:25"),
  (3, 1, "He was alright.", "2023-06-01 17:03:51")
ON CONFLICT DO NOTHING;