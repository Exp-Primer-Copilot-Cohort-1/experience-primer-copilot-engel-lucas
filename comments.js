// Create web server
// 1. create server object
const express = require('express');
const app = express();
// 2. create router object
const router = express.Router();
// 3. create route
// 3.1 get request
router.get('/', (req, res) => {
    res.send('GET request');
});
// 3.2 post request
router.post('/', (req, res) => {
    res.send('POST request');
});
// 3.3 put request
router.put('/', (req, res) => {
    res.send('PUT request');
});
// 3.4 delete request
router.delete('/', (req, res) => {
    res.send('DELETE request');
});
// 4. register route
app.use('/api/comments', router);
// 5. listen port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});