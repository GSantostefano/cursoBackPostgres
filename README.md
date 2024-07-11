¡No te rindas!
Necesitas una calificación mínima de 9.0 para aprobar.

Vuelve a intentarlo en:

05 h 48 m 24 s

8.82

Calificación

15/ 17

Aciertos

1.
¿Cuál es comando que usamos para levantar el contendedor de Postgres con Docker?
docker-compose up -d postgres
2.
¿Es una buena práctica manejar nuestra conexión con Postgres usando la estrategia de pooling?
Verdadero
3.
¿Cuál es la forma correcta de leer la variable de ambiente PORT con NodeJS?
proccess.env.PORT
4.
¿SequelizeORM se puede conectar a MySql y Postgres o solo funciona para Postgres?
Funciona para ambos

5.
¿Cuál es la forma de definir un campo como Integer con Sequelize?
DataTypes.INTEGER
6.
¿Cuál es la forma de obtener una entidad de la base de datos con base a la PK?
models.MyModel.getByPk(myId)

Repasar
7.
¿Cuál es la forma de eliminar una entidad de la base de datos con base a la PK?
const model = await models.MyModel.findByPk(myId) await model.destroy();
8.
¿Cuál es el puerto por defecto en el cual Mysql corre por defecto?
3306
9.
¿Correr la forma de sync de Sequelize es recomendado para producción?
Falso
10.
¿Cuál es la funcionalidad de sequelize-cli ?
Scripts para correr y manejar migraciones
11.
¿Cuál es el método que nos ofrece queryInterface para agregar una columna?
queryInterface.addColumn(...)
12.
¿Cuál es la forma de crear una entidad en la base de datos usando Sequelize?
models.MyModel.create(...)
13.
¿Cuáles son los métodos que nos ofrece sequelize para expresar una relación uno a uno?
hasOne  y belongsTo
14.
¿Cuáles son los métodos que nos ofrece sequelize para expresar una relación uno a muchos?
belongsToMany

Repasar
15.
¿Cuáles son los métodos que nos ofrece sequelize para expresar una relación muchos a muchos?
belongsToMany
16.
¿Cuál es la forma en que podemos hacer paginación usando Sequelize?
models.MyModel.findAll({ limit, offset })
17.
¿Cuál es el atributo que nos da Sequelize para obtener relaciones desde el método findAll?
include