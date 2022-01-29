const db = require('../messageBoardModel')
const homeController = {};

homeController.getChatrooms = (req, res, next) => {
    const sqlQuery = `\
    SELECT c.Title \
    FROM chatrooms c;
    `;

    db.query(query)
      .then((data) => {res.locals.chatRooms = data.rows})
      .then(data => next())
      .catch((err) => {
          console.log('error in getChatrooms middleware')
          next(err)
      })

}

homeController.getFavorites = (req, res, next) => {
    const userId = req.query.id;
    const sqlQuery = `\
    SELECT u.favorites \
    FROM userTable u \
    WHERE u.id = ${userId};
    `;

    db.query(query)
    // currently only working if user has favorites, if they don't then we get an error 
      .then((data) => {res.locals.favorites = data.rows})
      .then(data => next())
      .catch((err) => {
        console.log('error in getFavorites middleware')  
        next(err)
    })      
}

homeController.logOut = (req, res, next) => {
    
}

homeController.newChat = (req, res, next) => {
    const chat = req.body
    const sqlQuery = `\
    INSERT INTO chatrooms (title, author, password, authorized_users, messages)
    VALUES ('${chat.title}', '${chat.author}', ${chat.password}', '${chat.authorized_users}', '${chat.messages}');
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

homeController.loadChat = (req, res, next) => {
    const chatId = req.body.title
    const sqlQuery = `\
    SELECT * \
    FROM chatrooms \
    WHERE chatrooms.title = ${chatId};
    `;

    db.query(sqlQuery)
        .then(data => res.locals.chat = data.rows)
        .then(data => next())
        .catch((err) => {
        console.log('issues with loadChat middleware')
        next(err)
        })
}

homeController.lockedChat = (req, res, next) => {
     // get the chatid from the request
    const chatId = req.body.title;
    
    // const sqlQuery;
   
    // prompt a password 
    // if successful, then load the chat
    // else, load a 'wrong pass!' alert
    
}

module.exports = homeController;