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

  if (!answers) {
    return response.status(404).send("No answers provided");
  }

  const startTime = new Date().valueOf();

  await db
    .collection("answers")
    .doc()
    .set({ ...answers, time: startTime })
    .catch(() => {
      return response.status(404).send("Error writting answers");
    });

  const finishTime = new Date().valueOf();
  return response.status(201).send({
    executionTime: finishTime - startTime,
    ...request.body,
  });
});

app.post("/save_email", async (request: Request, response: Response) => {
  const body = request.body;
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(body.email)) {
    return response.status(404).send("Invalid email");
  }

  const startTime = new Date().valueOf();

  await db
    .collection("leads")
    .doc()
    .set({ ...body, time: startTime })
    .catch(() => {
      return response.status(404).send("Error writting email");
    });

  const finishTime = new Date().valueOf();
  return response.status(201).send({
    executionTime: finishTime - startTime,
    ...body,
  });
});

exports.api = functions.https.onRequest(app);
