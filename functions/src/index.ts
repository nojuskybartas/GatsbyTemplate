import * as functions from "firebase-functions";
import express = require("express");
import { Request, Response } from "express";
import cors = require("cors");
import admin = require("firebase-admin");

admin.initializeApp();

const app = express();
app.use(cors());
app.use(express.json());

const db = admin.firestore();

app.post("/save_answers", async (request: Request, response: Response) => {
  const answers = request.body;
  console.log("answers: ", answers);

  if (!answers) {
    return response.status(404).send("No answers provided");
  }

  const startTime = new Date().valueOf();

  await db
    .collection("answers")
    .doc()
    .set(answers)
    .catch(() => {
      return response.status(404).send("Error writting answers");
    });

  const finishTime = new Date().valueOf();
  return response.status(201).send({
    executionTime: finishTime - startTime,
    ...request.body,
  });
});

exports.api = functions.https.onRequest(app);
