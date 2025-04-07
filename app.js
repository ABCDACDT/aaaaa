const mysql = require('mysql')
const readline = require('readline')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_database',
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

connection.connect((err) => {
  if (err) throw err
  console.log('Connected to MySQL\n')
  createTable(showMenu)
})

function showMenu() {
  console.log(`
=== Menu ===
1. Insert Record
2. Update Record
3. Delete Record
4. Select All Records
5. Select Unique Names
6. Drop Table
7. Exit
  `)

  rl.question('Choose an option: ', (choice) => {
    switch (choice.trim()) {
      case '1':
        rl.question('Enter name to insert: ', (name) => {
          insertRecord(name, showMenu)
        })
        break
      case '2':
        rl.question('Enter ID to update: ', (id) => {
          rl.question('Enter new name: ', (name) => {
            updateRecord(id, name, showMenu)
          })
        })
        break
      case '3':
        rl.question('Enter ID to delete: ', (id) => {
          deleteRecord(id, showMenu)
        })
        break
      case '4':
        selectAllRecords(showMenu)
        break
      case '5':
        selectUniqueNames(showMenu)
        break
      case '6':
        dropTable(showMenu)
        break
      case '7':
        rl.close()
        connection.end(() => console.log('Connection closed.'))
        break
      default:
        console.log('Invalid choice. Try again.')
        showMenu()
    }
  })
}

function createTable(callback) {
  const sql = `CREATE TABLE IF NOT EXISTS my_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
  )`
  connection.query(sql, (err) => {
    if (err) throw err
    console.log('Table ready')
    callback()
  })
}

function insertRecord(name, callback) {
  connection.query(
    'INSERT INTO my_table (name) VALUES (?)',
    [name],
    (err, result) => {
      if (err) throw err
      console.log(`Inserted '${name}' with ID: ${result.insertId}`)
      callback()
    }
  )
}

function updateRecord(id, newName, callback) {
  connection.query(
    'UPDATE my_table SET name = ? WHERE id = ?',
    [newName, id],
    (err, result) => {
      if (err) throw err
      console.log(`Updated ID ${id} to '${newName}'`)
      callback()
    }
  )
}

function deleteRecord(id, callback) {
  connection.query('DELETE FROM my_table WHERE id = ?', [id], (err, result) => {
    if (err) throw err
    console.log(`Deleted record with ID: ${id}`)
    callback()
  })
}

function selectAllRecords(callback) {
  connection.query('SELECT * FROM my_table', (err, results) => {
    if (err) throw err
    console.table(results)
    callback()
  })
}

function selectUniqueNames(callback) {
  connection.query('SELECT DISTINCT name FROM my_table', (err, results) => {
    if (err) throw err
    console.table(results)
    callback()
  })
}

function dropTable(callback) {
  connection.query('DROP TABLE IF EXISTS my_table', (err) => {
    if (err) throw err
    console.log('Table dropped')
    callback()
  })
}
