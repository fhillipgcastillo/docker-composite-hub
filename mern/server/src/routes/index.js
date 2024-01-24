// require('dotenv').config();

import express from 'express';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    // console.log('Time: ', Date.now())
    next()
  })

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.get('/new', (req, res, next) => {
    let languages = [
        {
         language: 'Spanish'
        },
        {
         language: "French"
        },
        {
         langauge: "German"
        }
    ];
    res.json(languages);
});

export default router;