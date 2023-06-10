const {getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer} = require('./p4-module');


const fs = require('fs');
//import fastify from "fastify";

// Require the Fastify framework and instantiate it
const fastify = require("fastify")({
logger: false,
});
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

fastify.get('/cit/question', (req, res) => {
  const result = getQuestions();
  res.code(200).header("Content-Type", "application/json; charset=utf-8").send(
    {error: "", statusCode: 200, questions: result});
});

fastify.get('/cit/answer', (req, res) => {
  const result = getAnswers();
  res.code(200).header("Content-Type", "application/json; charset=utf-8").send(
    {error: "", statusCode: 200, answers: result});
});

fastify.get('/cit/questionanswer', (req, res) => {
  const result = getQuestionsAnswers();
  res.code(200).header("Content-Type", "application/json; charset=utf-8").send(
    {error: "", statusCode: 200, questions_answers: result});
});

fastify.get('/cit/question/:number', (req, res) => {
  const { number } = req.params;
  const result = getQuestion(number);
  res.code(200).header("Content-Type", "application/json; charset=utf-8").send(
    {statusCode: 200, result});
});

fastify.get('/cit/answer/:number', (req, res) => {
  const { number } = req.params;
  const result = getAnswer(number);
  res.code(200).header("Content-Type", "application/json; charset=utf-8").send(
    {statusCode: 200, result});
});

fastify.get('*', (req, res) => {
  const { number } = req.params;
  const result = getQuestionAnswer(number);
  res.code(200).header("Content-Type", "application/json; charset=utf-8").send(
    {error: "Route not found",
    statusCode: 404});
});


const listenIP = 'localhost';
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    // fastify.log.error(err);
    console.log(err);
    process.exit(1);
  }
// fastify.log.info(`Server listening on ${address}`);
  console.log(`Server listening on ${address}`);
})
