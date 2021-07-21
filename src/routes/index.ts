import express, {Request, Response, NextFunction} from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("hello Amazing!")
});

export default router;
