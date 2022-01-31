const db = require('../messageBoardModel')
const homeController = {};


homeController.getChatrooms = (req, res, next) => {
    const sqlQuery = `\
    SELECT c.chat_name \
    FROM chatrooms c;
    `;

    db.query(sqlQuery)
      .then((data) => {
        console.log(data)
        res.locals.chatrooms = data.rows  
        })
      .then(data => next())
      .catch((err) => {
          console.log('error in getChatrooms middleware')
          next(err)
      })

}

// homeController.getFavorites = (req, res, next) => {
//     const userId = req.query.id;
//     const sqlQuery = `\
//     SELECT u.favs \
//     FROM userTable u \
//     WHERE u.user_id = ${userId};
//     `;

//     db.query(query)
//     // currently only working if user has favorites, if they don't then we get an error 
//       .then((data) => {res.locals.favorites = data.rows})
//       .then(data => 
//         next())
//       .catch((err) => {
//         console.log('error in getFavorites middleware')  
//         next(err)
//     })      
// }

// homeController.logOut = (req, res, next) => {
    
// }

homeController.newChat = (req, res, next) => {
    console.log(req.body)
    const chat = req.body
    const sqlQuery = `\
    CREATE TABLE ${title}_chatroom (title, security_status, password, message)
    VALUES ('${chat.title}', '${chat.status}', ${chat.password}');
    `;

    db.query(sqlQuery)
        .then(resp => res.locals.new = resp.rows)
        .then(data => console.log(res.locals.new))
        .then((data) => next())
        .catch(
            (err) => {
                next('issues with newChat middleware', err)
        })
}

homeController.loadChat = (req, res, next) => {
    const title = req.body.title
    const sqlQuery = `\
    SELECT * \
    FROM ${title}_chatroom \
    `;

    db.query(sqlQuery)
        .then(data => console.log(data))
        .then(data => res.locals.chat = data.rows)
        .then(data => next())
        .catch((err) => {next('issues with loadChat middleware: ', err)})
}

// homeController.lockedChat = (req, res, next) => {
//      // get the chatid from the request
//     const chatId = req.body.title;

//     // const sqlQuery;
   
//     // prompt a password 
//     // if successful, then load the chat
//     // else, load a 'wrong pass!' alert
    
// }

module.exports = homeController;