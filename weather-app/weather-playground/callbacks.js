var getUser = (ID, callback) => {
    var user = {
        ID: ID,
        name: 'Tanmay'
    }

    setTimeout(() => {
        callback(user);
    }, 2000);
};

getUser(7, (user) => {
    console.log(user);
}); 