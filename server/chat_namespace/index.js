const config = require('./../config')

// Socket namespace
let namespace;
const users = {
    general: [],
    sports: [],
    games: []
};

const onConnection = (socket) => {
    // Listening for joining a room (joinRoom event)
    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room, () => {      
            // push user for the suitable room
            users[room].push({ username: username, privateChat: false })           
            // Notify all the users in the same room
            namespace.in(room).emit('newUser', users[room]);
        });
    });
}

exports.createNameSpace = (io) => {
    namespace = io
        .of(config.CHAT_NAMESPACE)
        .on('connection', onConnection)
}