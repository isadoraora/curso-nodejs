-- create table usuarios (
--     nome VARCHAR(50),
--     email VARCHAR(100),
--     idade INT
-- );

-- insert into usuarios(nome, email, idade) VALUES(
--     "Isadora Oliveira",
--     "isa.mdeo@gmail.com",
--     30
-- );
-- insert into usuarios(nome, email, idade) VALUES(
--     "Pedro Mendonça",
--     "pedro_cns@gmail.com",
--     31
-- );
-- insert into usuarios(nome, email, idade) VALUES(
--     "Neusa Mendonça",
--     "maedaisa@gmail.com",
--     64
-- );
-- insert into usuarios(nome, email, idade) VALUES(
--     "Marcio Alves",
--     "maoliveira048@gmail.com",
--     62
-- );
-- insert into usuarios(nome, email, idade) VALUES(
--     "Giuliana Lopes",
--     "lopes_giu@gmail.com",
--     29
-- );
-- insert into usuarios(nome, email, idade) VALUES(
--     "Noe Gima",
--     "noe@gmail.com",
--     35
-- );

delete from usuarios WHERE idade < 3;

update usuarios set nome = "Noelia Gima" where nome = "Noe Gima";