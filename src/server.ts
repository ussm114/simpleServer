import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { IndexRoute } from "./routes/index";


// the server
// class server
export class Server {

  public app: express.Application;
   /*
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
   public static bootstrap(): Server {
     return new Server();
   }

   //constructor
   constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();

    //add api
    this.api();
  }

  //create REST api routes
  public api() {
    //now empty
  }
  public config() {
    //add static paths
    this.app.use(express.static(path.join(__dirname, "public")));

    //configure pug
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");

    //use logger middlware
    this.app.use(logger("dev"));

    //use json form parser middlware
    this.app.use(bodyParser.json());

    //use query string parser middleware
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // use cookie parser middleware
    this.app.use(cookieParser("secret_goes_here"));

    //use override middleware
    this.app.use(methodOverride());

    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });

    //error handling
    this.app.use(errorHandler());
  }

  /*
   * Create router
   *
   * @class Server
   * @method api
   */
  private routes() {
    let router: express.Router;
    router = express.Router();
    // index route
    IndexRoute.create(router);
    //use router middleware FOR EACH OF THE ROUTES !
    this.app.use(router); //callback
  }
}



































//
