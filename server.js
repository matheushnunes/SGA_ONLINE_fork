const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {
    const { name, password } = req.body;
    
    if (!name || !password) {
        return res.status(400).json({ message: "Name and password are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { name, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    } catch (error) {
        res.status(500).json({ message: "Error while hashing password", error });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
