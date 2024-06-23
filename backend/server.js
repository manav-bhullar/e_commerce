const app = require('./app');





// handling uncaught exceptions
process.on("uncaughtExpectation", (err) => {
    console.log(`Error: $(err.message)`);
    console.log(`shutting down the server due to uncaught expectation`);

})


//config
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({
        path:"backend/config/.env"
    })
}

// craete server

const server = app.listen(process.env.PORT,() =>{
    console.log(`server started on http://localhost:${process.env.PORT}`)
})



// unhandled promise rejection

process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`)
    console.log(`Shutting down the server for unhandle promise rejection`)


    server.close(() => {
        process.exit(1)
    })
})