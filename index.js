

const express = require('express');
const app = express();



app.get('/', (req, res) => {
    const message = 'GET @ /'
    console.log(message);
    res.json({ message });
});

app.get('/test', (req, res) => {
    const message = 'GET @ /test';
    console.log(message);
    res.json({ message });
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
