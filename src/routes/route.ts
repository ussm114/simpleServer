import { NextFunction, Request, Response } from "express";

// constructor
// class BaseRoute
export class BaseRoute {
  protected title: string;
  private scripts: string[];
  //constructor
  constructor() {
    this.title = "tour of heroes";
    this.scripts = [];
  }
  // add a JS external file to the request
  public addScript(src: string): BaseRoute {
    this.scripts.push(src);
    return this;
  }

  /* render a page
  class BaseRoute
  method render
  param req {request} the request object
  param res {response} the response object
  param view {String} the view to render
  param options {Object} additional options to append to the view's local scope
  return void
  */
  public render(req: Request, res: Response, view: string, options?: Object) {
    // add constants
    res.locals.BASE_URL = "/";
    //add scripts
    res.locals.scripts = this.scripts;
    //add title
    res.locals.title = this.title;
    //render view
    res.render(view, options);
  }
}















//
