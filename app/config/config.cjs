require('dotenv').config();

module.exports = {
	// development: {
	// 	dialect: 'sqlite',
	// 	storage: './database.sqlite',
	// },
	production: {
		dialect: 'postgres',
		database: 'postgres',
		username: 'postgres',
		password: 'password',
		port: process.env.DATABASE_PORT,
		host: 'db',
	},
	test: {
		dialect: 'postgres',
		database: 'postgres',
		username: 'postgres',
		password: 'password',
		port: process.env.DATABASE_PORT,
		host: 'db',
	},
};
