const db = require('../messageBoardModel')
const chatController = {};

// getChat
chatController.getChat = (req, res, next) => {
  const chatName = req.body.title;
  const sqlQuery = `\
  SELECT c.messages \
  FROM chatrooms c \
  WHERE c.title = ${chatName};
  `;
  db.query(sqlQuery)
    .then((data) => res.locals.messages = data.body[0])
    .then(data => next())
    .catch((err) => {
      console.log('error in getChat middleware')
      next(err)
    })
}

// getFavorites
chatController.getFavorites = (req, res, next) => {
  const sqlQuery = `\
  SELECT u.favorites
  FROM userTable u\
  WHERE u.id = ${userId};
  `;

  db.query(sqlQuery)
    .then((data) => {res.locals.favorites = data.rows})
    .then(data => next())
    .catch((err) => {
      console.log('error in getFavorites middleware')
      next(err)
    })
}

// loadHome

// addFavorites
chatController.addFavorites = (req, res, next) => {
  const favs = req.body[0]
  const sqlQuery = `\
  INSERT INTO userTable (favorite_chatrooms) \
  VALUES ('${favs}');
  `;

  db.query(sqlQuery)
      .then(data => res.locals.new = data.rows)
      .then((data) => next())
      .catch(
          (err) => {
              console.log('issues with newChat middleware')
              next(err)
      })
}



module.exports = chatController;