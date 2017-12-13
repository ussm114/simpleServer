import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

/*
 route
 class user
*/
export class IndexRoute extends BaseRoute {
  /*
  *create the routes
  *class IndexRoute
  *method create
  *static
  */
  public static create(router: Router) {
    console.log("[indexRoute::create] creating index route");
    // add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });
  }

  /*
    constructor
    class IndexRoute
    constructor
  */
  constructor() {
    super();
  }

  /* the home page route
    class IndexRoute
    method index
    param req {Request} the express Request object
    param res {Response}  the express Response object
    next {NextFunction} execute next method
  */
  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "home | tour of heroes";
    // set options
    let options: Object = {
      "message": "Welcome to the tour of Heroes"
    };
    // render template
    this.render(req, res, "index", options);
  }
}






























//
