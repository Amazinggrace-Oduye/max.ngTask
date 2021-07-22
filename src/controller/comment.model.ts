import sql from "./database/connection";
import { Comment } from "../type/dbTypes/IComment";

const CommentModel = function () {};

CommentModel.makeComment = function (data: Comment, callback: any) {
  sql.query("INSERT INTO maxnd_comment SET ?", data, (err, rows, fields) => {
    if (err) {
      console.log(err);
      return callback(true, null);
    } else return callback(null, rows);
  });
};

CommentModel.findAll = function (callback: any) {
  sql.query(
    "SELECT * FROM maxnd_comment ORDER BY id DESC",
    (err, rows, fields) => {
      if (err) {
        return callback(true, null);
      }
    
      else {
        return callback(null, rows);
      }
    }
  );
};

CommentModel.findByMovie = function (id: number, callback: any) {
  sql.query(
    "SELECT * FROM maxnd_comment WHERE movieid = ?",
    id,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        return callback(true, null);
      } else {
        return callback(null, rows);
      }
    }
  );
};

export { CommentModel };
