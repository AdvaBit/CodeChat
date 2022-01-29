const express = require('express');
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');
const chatController = require('../controllers/chatController');
const router = express.Router();

// login page
    // some kind of OAuth functionality
router.get('/login')

// home page
 // getting list of all the existing chatrooms
 // section with favorited chatrooms
router.get('/home',
    homeController.getChatrooms,
    homeController.getFavorites,
    (req, res) => res.status(200).json(foo)
)
   
 // sign out button
router.get('/logout',
    homeController.logOut,
    (req, res) => res.status(200).json(foo) 
)

// create new chatroom button
    // post request to server with form data from front end
router.post('/newChat',
    homeController.newChat,
    (req, res) => res.status(200).json(foo)
)
    
// access chatroom 
router.get('/chatroom',
    homeController.openChat,
    (req, res) => res.status(200).json(foo)
)

    // input password in locked chatroom
router.get('/lockedChatroom', 
    homeController.lockedChat,
    (req, res) => res.status(200).json(foo)
)

// chat page
    // section with favorited chatrooms
router.get('/chatroom',
    chatController.getChat,
    chatController.getFavorites,
    (req, res) => res.status(200).json(foo)
)

// go back to home page

// add to favorites
    
    // sign out button
    // implement emoji/gif and youtube api's here
    

module.exports = router;