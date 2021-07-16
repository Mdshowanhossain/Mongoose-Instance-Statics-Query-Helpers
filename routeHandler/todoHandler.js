const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../scema/todoScema');
const Todo = new mongoose.model("Todo", todoSchema);


// Instant Methods

// Get Active ToDos


router.get('/active', async (req, res) => {

    const todo = new Todo();
    const data = await todo.findActive();

    res.status(200).json({
        data,
    })

})

// Another

// Get Active ToDos

// router.get('/active', async (req, res) => {

//     try {
//         const todo = new Todo();
//         const data = await todo.findActive();

//         res.status(200).json({
//             data,
//         })
//     } catch (err) {
//         console.log(err)
//     }
// })


// Get Todo With CallBack

// Get Active ToDos


// router.get('/active', (req, res) => {


//     const todo = new Todo();
//     todo.findActiveWithCallBack((err, data) => {

//         if (err) {
//             res.status(500).json({
//                 message: 'There is a problem',
//             })
//         } else {
//             res.status(200).json({
//                 data
//             })
//         }

//     });

// })


// get Static Methods

router.get('/title', async (req, res) => {
    const data = await Todo.findByTitle();
    res.status(200).json({
        data,
    })
})

// get queryHelpers Methods


router.get("/friend", async (req, res) => {
    const data = await Todo.find().findFriend("osman");
    res.status(200).json({
        data,
    })
})


module.exports = router;