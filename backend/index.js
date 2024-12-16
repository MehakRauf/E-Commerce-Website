const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ limit: "10mb" }));
app.use(cors({
    origin: "http://localhost:5173",  // replace it with your frontend url
    methods: ["GET", "POST"],
    credentials: true
}));

//mongoDB Connection
mongoose.connect('mongodb://localhost:27017/E-com');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String
});

const userModel = mongoose.model('users', UserSchema);
// API
app.get('/', (req, res) => {

});


//SIGNUP API
app.post("/signup", async (req, res) => {
    const { email } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.send({ message: "Email already exists", alert: false });
    }
    else {
        const data = new userModel(req.body);
        const result = await data.save();
        res.send({ message: "Successful Registration!", alert: true });
    }
});

//LOGIN API
app.post("/login", async (req, res) => {
    const { email } = req.body;
    const existingUser = await userModel.findOne({ email });
    console.log(req.body);
    const userData = {
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        password: existingUser.password,
        confirmPassword: existingUser.confirmPassword
    }
    if (!existingUser) {
        return res.send({ message: "Email is not registered, please Signup!", alert: false });
    }
    else {
        res.send({ message: " logged in successfully!", alert: true, data: userData });
    }
});


// products Schema
const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    description: String,
    category: String
});

const productModel = mongoose.model('productdetails', productSchema);

// to add newproducts
app.post('/newproducts', async (req, res) => {
    const data = new productModel(req.body);
    const result = await data.save();
    res.send({message: "Successful!"})
});

// to get all the products
app.get('/products' , async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data));
})
app.listen(PORT);