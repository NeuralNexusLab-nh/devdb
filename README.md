DevDB - Lightweight Local Key-Value Database for Node.js

Overview
--------
DevDB is a simple key-value database for Node.js. It stores data in JSON files on your local filesystem. 
Ideal for small projects, quick prototypes, or lightweight configuration storage.

Setup
-----
1. Place `devdb.js` in your project folder, for example:

   YourProject/
   ├─ devdb.js
   ├─ index.js
   └─ database/   (optional, DevDB will create this automatically)

2. Import DevDB in your code:

```
const { setup } = require("./devdb.js");

// Default database path
const db = setup();

// Or specify a custom file path
const db = setup("./mydata/mydb.json");
```

Quick Usage
-----------
```
// Set values
db.set("username", "Alice");
db.set("score", 42);

// Get values
console.log(db.get("username")); // Alice
console.log(db.get("score")); // 42
console.log(db.get("level")); // ERROR 404: level is not found!

// Save data to disk
db.save();
```

Database File
-------------
- Default location: ./database/db.json
- DevDB creates the folder and file if they don't exist
- You can provide a custom path in `setup()`

API
---
setup(dbPath)   : Initialize the database. Optional `dbPath` to set a custom JSON file path.  
db.set(key, value) : Store a key-value pair.  
db.get(key)        : Retrieve the value for a key, or an error string if not found.  
db.save()          : Save all current data to the JSON file.

Best Practices
--------------
- Use DevDB for small datasets; it uses synchronous file operations.
- Always call `save()` after modifying data to persist changes.
- `db.get()` supports only single-key retrieval.
- JSON is formatted with 2-space indentation for readability.

License
-------
MIT License. Free to use, modify, and distribute. No warranty.
