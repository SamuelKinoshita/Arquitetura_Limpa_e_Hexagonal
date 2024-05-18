##Instlando o knex
 1- npm i knex pg   
 2- Precisamos criar um arquivo chamdo knexfile.js para configurarmos a conexao com o banco

##Comando para acessar o postgress 
  1-  psql -U postgres
  2-  colocar a senha: postgress
  3-  para entrar no banco postgres=# \c arquitetura

##comando para criar a migracao :  
  1-  "migrate:make": "knex migrate:make --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts --knexpath ./src/exemplos/adaptadores/db/knex"
    colocando ele no package.json podemos usar assim agora  
    npm run migrate:make criar_tabela_usuarios

  2- outros dois codigos: 
  "migrate:down": "knex migrate:rollback --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts",
  "migrate:up": "knex migrate:latest --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts"

##Instalar o uma dependencia chamada uuid 
 1- npm i uuid
 2- npm i -D @types/uuid

##Instalar o express e o jsonwebtoken
 1- npm i express jsonwebtoken
 2- npm i -D @types/express @types/jsonwebtoken axios @types/axios
    