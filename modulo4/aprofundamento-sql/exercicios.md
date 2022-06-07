1-
a) Apagara a coluna salary na tabela Actor

b)Alterará a palavra gender para sex com o parametro VARCHAR com um limite de 6 caracteres.

c)Só alterará o parametro  do gender para varchar com um limite de 255 caracteres

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2-
a) UPDATE Actor
SET name = "Nome qualquer", birth_date = "2000-01-01"
WHERE id = "123";

b) 

 UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "juliana paes";

c) 

UPDATE Actor
SET name = "REI ARTHUR", id = "500", salary = 25, birth_date = "21-12-05", gender = "masc"
WHERE id = "005";

d)
    O Client me retorna que afetou um total de 0 fileiras atualizadas, pois tentei atualizar algo que não foi encontrado no banco de dados.

 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0


 3)a)
