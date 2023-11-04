BEGIN;


CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL UNIQUE
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" text NOT NULL UNIQUE
);

CREATE TABLE "column" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL
);

CREATE TABLE "card" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL, 
    "userId" integer NOT NULL REFERENCES "user" ("id"), 
    "columnId" integer NOT NULL REFERENCES "column" ("id"), 
    "describe" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table de liaison --

CREATE TABLE "card_has_category" (
    "card_id" INT NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
    "category_id" INT NOT NULL REFERENCES "category"("id") ON DELETE CASCADE,
    PRIMARY KEY ("card_id", "category_id")
);


COMMIT;