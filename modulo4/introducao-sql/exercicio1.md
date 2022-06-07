1-A)Foram utilizados nos itens (id,name e gender) o VARCHAR para especificar que aquele campo devera conter somente strings de no máximo tamanho(x), no item birth_date foi utilizado o DATE para especificar que aquele campo representa uma data no seguinte modelo (YYYY--MM-DD).

B)O resultado foi que a mostragem tanto das databases ( 2 em questão), quanto das tabelas existentes ( actor)

C)Nos foi mostrado como resultado do comando, a estrutura da tabela com o tipo específico de entrada aceitada por cada um.

2-a)Erro de sintaxe.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
1963-08-23
),