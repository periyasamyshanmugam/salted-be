import { Response, Request } from "express";
import axios, { AxiosResponse } from "axios";
import express = require("express");

/**
 * Provides functions to be used with express routes. Serves common CRUD fuctionality.
 */
export class AppController {
  constructor() {}

  /**
   * Sends the document as JSON in the body of response, and sets status to 200
   * @param doc the MongoDB document to be returned to the client as JSON
   * @param res the response object that will be used to send http response
   */
  jsonRes(res: Response, data: any) {
    res.status(200).json(data);
  }

  /**
   * Provides a simple, standardised way of responding to errors. Includes err object in response if env().stage  is 'dev'
   * @param err error object of any type genereated by the system
   * @param message custom response message to be provided to the client in a JSON body response ({error:'message'})
   * @param res response object to be used to to send
   * @param status custom status code, defaults to 500
   */
  errRes(err: any, res: Response, message = "Sever Error", status = 500) {
    res.status(status).json({ error: message });
  }

  async getGender(req: express.Request, res: express.Response) {
    const url = process.env.EXTERNAL_API;
    const name = req.query.name;
    let result: AxiosResponse = await axios.get(`${url}${name}`);
    let data = result.data;
    return res.status(200).json({
      message: data,
    });
  }

  getDate(date: string, res: express.Response) {
    let response;

    var curr = new Date(date);
    console.log(curr, curr.getDate(), curr.getDay(), 'jshdgfsf');
    var first = (curr.getDate() - curr.getDay()) + 1; // First day is the day of the month - the day of the week
    console.log(first, new Date(curr.setDate(first)).toUTCString(), 'khhsdhgf');
    var firstday = new Date(curr.setDate(first)).toUTCString();
    response = [firstday];

    for (let i = 1; i < 7; i++) {
      var day = first + i; // last day is the first day + 6
      response.push(new Date(curr.setDate(day)).toUTCString());
    }

    return res.status(200).json({
      message: response,
    });
  }

  bonusQ1(date: string | Date, res: express.Response) {
    date = new Date(date);
    var firstDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    console.log(
      firstDate,
      lastDate,
      days[firstDate.getDay()],
      days[lastDate.getDay()]
    );
    const reponse = {
      'p1': {dayOfTheWeek: days[date.getDay()], firstDayOfTheMonth: days[firstDate.getDay()], lastDayOfTheMonth: days[lastDate.getDay()]},
      'p2': {firstDateOfTheYear: new Date(date.getFullYear(), 0, 1), lastDateOfTheYear: new Date(date.getFullYear(), 11, 31)}
    }
    return res.status(200).json({
      message: reponse,
    });
  }
}
