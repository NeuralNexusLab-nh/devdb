const fs = require("fs");
const path = require("path");
function setup(dbPath) {
  const filePath = dbPath || path.join(__dirname, "database", "db.json");
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  let database = {};
  if (fs.existsSync(filePath)) {
    try {
      database = JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch (err) {
      database = {};
    }
  } else {
    fs.writeFileSync(filePath, JSON.stringify({}), "utf8");
  }
  return {
    get: function(key) {
      if (database.hasOwnProperty(key)) {
        return database[key];
      } else {
        return `ERROR 404: ${key} is not found!`;
      }
    },
    set: function(key, value) {
      database[key] = value;
    },
    save: function() {
      fs.writeFileSync(filePath, JSON.stringify(database, null, 2), "utf8");
    }
  };
}
module.exports = { setup };
