import mysql from "mysql2";
import dotenv from "dotenv";

// Charge les variables d'environnement depuis le fichier .env
dotenv.config();



const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});


  // Libère la connexion
  connection.end();
