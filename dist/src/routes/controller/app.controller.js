"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
/**
 * Provides functions to be used with express routes. Serves common CRUD fuctionality.
 */
class AppController {
    constructor() { }
    /**
     * Sends the document as JSON in the body of response, and sets status to 200
     * @param doc the MongoDB document to be returned to the client as JSON
     * @param res the response object that will be used to send http response
     */
    jsonRes(res, data) {
        res.status(200).json(data);
    }
    /**
     * Provides a simple, standardised way of responding to errors. Includes err object in response if env().stage  is 'dev'
     * @param err error object of any type genereated by the system
     * @param message custom response message to be provided to the client in a JSON body response ({error:'message'})
     * @param res response object to be used to to send
     * @param status custom status code, defaults to 500
     */
    errRes(err, res, message = "Sever Error", status = 500) {
        res.status(status).json({ error: message });
    }
    /**
     * Returns single doucument of model specified by _id.
     */
    //   findById(
    //     res: Response,
    //     documentId: string,
    //     populate?: IPopulate,
    //     errMsg = `Failed to find document ${documentId}`
    //   ) {
    //     this.model
    //       .findById(documentId, populate)
    //       .then((doc) => {
    //         this.jsonRes(doc, res);
    //       })
    //       .catch((err) => {
    //         this.errRes(err, res, errMsg);
    //       });
    //   }
    test(res) {
        this.jsonRes(res, 'this is my test');
    }
}
exports.AppController = AppController;
