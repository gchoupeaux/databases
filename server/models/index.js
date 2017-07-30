var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log(err);
        }
        // console.log('WRITE in DB: ', results);
        callback(results);
      });
    
    }, // a function which produces all the messages
    post: function (obj) {
      
      
      //{username: 'Jerry', text: 'Hello', roomname: 'lobby', objectId: '2'}
      // console.log('object to write in db: ', obj.message);
      
     
      
      // text username roomname
      // from username => user id SELECT id FROM users where users.name = obj.username
      // from roomane => room id SELECT id FROM users where users.name = obj.username
      var queryString = `INSERT INTO users (id, name) VALUES (NULL, '${obj.username}')`;//
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        //console.log(results);
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
        var queryString = `SELECT * FROM users WHERE users.name = '${obj.username}'`;
        var queryArgs = [];
        db.dbConnection.query(queryString, queryArgs, function(err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
          }
          // console.log('WRITE in DB: ', results);
        });
        // console.log('WRITE in DB: ', results);
      });
      
      // user id SELECT id FROM users where users.name = obj.username
      
      // var queryString = `SELECT id FROM users where users.name = obj.username`;//
      // var queryArgs = [];
      // db.dbConnection.query(queryString, queryArgs, function(err, results) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   // console.log('WRITE in DB: ', results);
      // });
      
      
      
      // room
      // var queryString = `INSERT INTO users (id, name) VALUES (NULL, '${obj.username}', NULL, NULL)`;//
      // var queryArgs = [];
      // db.dbConnection.query(queryString, queryArgs, function(err, results) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   // console.log('WRITE in DB: ', results);
      // });
      
      // user id SELECT id FROM users where users.name = obj.username
      
      
      // var queryString = `INSERT INTO messages (id, text, id_users, id_rooms) VALUES (NULL, '${obj.message}', NULL, NULL)`;//
      // var queryArgs = [];
      // db.dbConnection.query(queryString, queryArgs, function(err, results) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   // console.log('WRITE in DB: ', results);
      // });
      
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (obj, callback) {
      
      console.log('object to write in db: ', obj.username);
      
      var queryString = `INSERT INTO users (id, name) VALUES (NULL, '${obj.username}' )`;//
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log(err);
        }
        // console.log('WRITE in DB: ', results);
      });
      
    }
  }
};

