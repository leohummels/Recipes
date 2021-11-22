const router = require('express').Router();
const Data = require('../data_base/index');
const client = new Data();
client.init();

router.param('id', (res, req, next, id) => {
    req.id_from_param = id
    next()
})

router.get('/', (req, res) => {
    //client.findbyID(req.body.id)
    res.send('Hello Folks!')
});

router.get('/recipe', async (req, res) => {
    const localid = req.body.id
    
    const result = await client.findbyID(localid)
    console.log(result)
    res.status(200).json(result)
});

router.post('/recipe', async (req, res) => {
    const result = await client.insert(req.body)
    console.log(result)
    
    res.status(200).json(result)
});


module.exports = router;