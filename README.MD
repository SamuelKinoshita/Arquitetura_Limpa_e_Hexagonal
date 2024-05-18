Comando para acessar o postgress 

1-  psql -U postgres
2- colocar a senha: postgress
3- para entrar no banco postgres=# \c arquitetura
4- comando para criar a migracao :  "migrate:make": "knex migrate:make --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts --knexpath ./src/exemplos/adaptadores/db/knex"
colocando ele no package.json podemos usar assim agora  

npm run migrate:make criar_tabela_usuario

5- outros dois codigos: 
  "migrate:down": "knex migrate:rollback --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts 
  --knexpath ./src/exemplos/adaptadores/db/knex",
    "migrate:up": "knex migrate:latest --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts 
    --knexpath ./src/exemplos/adaptadores/db/knex"

6- vamos nstaldar uma dependencia chamada uuid 
  npm i uuid
   npm i -D @types/uuid