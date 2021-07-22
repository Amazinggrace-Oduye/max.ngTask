import { CommentModel } from "./comment.model";
import { Response, Request } from "express";
import { Comment } from "../type/dbTypes/IComment";
import ipAddressApi from "../userAPi/ipAddress.api";

const CommentController = function () { };

CommentController.getAllComments = function (req: Request, res: Response) {
  CommentModel.findAll(function (err: any, data: any) {
    
    if (err) res.status(500).json({ error: "server error" });
    
    else res.status(200).json(data);
  });
};

CommentController.makeCommment = async function (req: Request, res: Response) {
  try {
    const userIpAddress: any = await ipAddressApi.getUserPublicAddress();
    const { ip, city, country_name } = userIpAddress.data;
    const data: Comment = {
      ...req.body,
      userip_address: `${ip}, ${city} ${country_name}`,

    };

    CommentModel.makeComment(data, function (err: any, data: any) {
      if (err) res.status(500).json({ error: "server error" });
      else res.status(200).json({ message: "successfully made a comment"});
    });
  } catch (error) {
    console.log(error);
  }
};

CommentController.findByMovie = function (req: Request, res: Response) {
  const id: number = Number(req.params.id);
  CommentModel.findByMovie(id, function (err: any, data: any) {
    if (err) res.status(500).json({ Message: "server error" });
    else res.status(200).json({ Message: "succesful", data});
  });
};

export { CommentController };
