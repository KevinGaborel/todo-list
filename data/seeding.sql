BEGIN;


INSERT INTO "Category" ("name") VALUES
    ('Web'),
    ('POC'),
    ('UX'),
    ('Bug'),
    ('Design'),
    ('Tests'),
    ('DevOps');

INSERT INTO "User" ("username") VALUES
    ('Ben'),
    ('Johanna'),
    ('Kévin'),
    ('Louis');

INSERT INTO "Column" ("name") VALUES
    ('À faire'),
    ('En cours'),
    ('Terminé');

    
INSERT INTO "Card" ("name", "userId", "columnId", "describe") VALUES
    ('Première carte', 1, 1, 'First task'),
    ('Deuxième carte', 2, 2, 'Second task'),
    ('Troisième carte', 3, 3, 'Task'),
    ('Quatrième carte', 4, 1, 'Task'),
    ('Cinquième carte', 1, 1, 'Task'),
    ('Sixième carte', 2, 2, 'Task');

INSERT INTO "Card_has_category" ("cardId", "categoryId") VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3),
    (3, 6),
    (3, 7),
    (4, 5),
    (4, 7),
    (5, 4),
    (6, 4);


COMMIT;