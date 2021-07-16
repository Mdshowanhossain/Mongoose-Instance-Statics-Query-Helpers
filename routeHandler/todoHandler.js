const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../scema/todoScema');
const Todo = new mongoose.model("Todo", todoSchema);


// Get Active ToDos


// router.get('/active', async (req, res) => {

//     const todo = new Todo();
//     const data = await todo.findActive();

//     res.status(200).json({
//         data,
//     })

// })

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


router.get('/active', (req, res) => {


    const todo = new Todo();
    todo.findActiveWithCallBack((err, data) => {

        if (err) {
            res.status(500).json({
                message: 'There is a problem',
            })
        } else {
            res.status(200).json({
                data
            })
        }

    });

})











router.post('/', async (req, res) => {

    const newTodo = new Todo(req.body);
    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error"
            })
        } else {
            res.status(200).json({
                message: "Thank You created a new Data"
            })
        }
    });

})

router.post('/all', async (req, res) => {

    await Todo.insertMany(req.body, (err) => {

        if (err) {
            res.status(500).json({
                error: "There was a server side error!"
            })
        } else {
            res.status(200).json({
                message: "Todo was insertedMany Successfully"
            })
        }

    })

})

router.put('/:id', async (req, res) => {

    await Todo.findByIdAndUpdate({ _id: req.params.id },
        { $set: { status: 'active' } },
        {
            new: true,
            useFindAndModify: false,
        },
        (err) => {
            if (err) {
                res.status(500).json({
                    error: "Update Failed"
                })
            } else {
                res.status(200).json({
                    message: "Update successfully"
                })
            }

        })


    // await Todo.updateOne({ _id: req.params.id }, { $set: { status: 'inactive' } }, (err) => {

    //     if (err) {
    //         res.status(500).json({
    //             error: "Update Failed"
    //         })
    //     } else {
    //         res.status(200).json({
    //             message: "Update successfully"
    //         })
    //     }

    // })




})

router.delete('/:id', async (req, res) => {

    await Todo.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: "Sorry not Deleted"
            })
        } else {
            res.status(200).json({
                message: "Delete successfully"
            })
        }
    })

})


module.exports = router;