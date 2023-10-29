const express = require("express");
const morgan = require("morgan");
const { connect , sync } = require('./config/database')
const cors = require('cors');
const http = require("http")
const {Server} = require("socket.io")

const userRoutes = require("./routes/users");
const customerFavRoutes = require("./routes/customerFavs");
const informationRoutes = require("./routes/informations");
const productRoutes = require("./routes/products");
const packageRoutes = require("./routes/packages");
const notiRoutes = require("./routes/notis");
const listChatRoutes = require("./routes/listChat")
const chatRoutes = require("./routes/chats")


const app = express();

async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();

// Setting up middleware
// app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: 'http://localhost:3000',  // อนุญาตเฉพาะต้นทางนี้เท่านั้น
  methods: ['PUT','DELETE','POST']  // อนุญาตให้ใช้วิธี DELETE
}));


app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

const server = http.createServer(app);

const io = new Server(server,{
  cors:{
    origin: 'http://localhost:3000',  // อนุญาตเฉพาะต้นทางนี้เท่านั้น
    methods: ['PUT','POST']
  }
})


// Setting up routes
app.use('/users', userRoutes);
app.use('/informations', informationRoutes);
app.use('/customerFavs', customerFavRoutes);
app.use('/products', productRoutes);
app.use('/packages', packageRoutes);
app.use('/notis', notiRoutes);
app.use('/listChats', listChatRoutes);
app.use('/chats', chatRoutes);



// Creating a server
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(5000, () => {
  console.log("SERVER RUNNING");
});
