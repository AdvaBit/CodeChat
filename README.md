# main

Chatroom Table
columns: [ Title, Author, Password, Authorized Users, Messages = [{user: message}, {user: message}, {user: message}] ]

User Table (enforce unique usernames)
columns: [ username, O-Auth token, favorite chatrooms = ID from Chatroom Table ]



Generate new chatroom window
Features: [ Title, Security Status, Password (if SecurityStatus = Closed) ]

