//import express from 'express';
//import pool from './db.js';

const express = require('express');
const cors = require("cors");
const pool = require('./db.js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/todos', async(req, res)=>{
    try {
        const getTodos = await pool.query("SELECT * FROM todo");
        res.json(getTodos.rows);
    } catch (err) {
        console.log(err.message)
    }
})

app.get('/todos/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const getTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(getTodo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.post('/todos', async(req, res)=>{
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.delete('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1;", [id]);
        
        res.json("Todo was deleted!")
    } catch (err) {
        console.log(err.message);
    }
})

app.put('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json("Todo was updated")
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(PORT, ()=>{
    console.log(`Listening on port:${PORT}`)
})