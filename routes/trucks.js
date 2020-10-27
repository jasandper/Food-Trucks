const express = require('express');
const { Module } = require('module');
const router = express.Router();

router.get('/', (req, res) => res.send('TRUCKS'));

module.exports = router;