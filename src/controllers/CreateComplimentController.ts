import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService"


class CreateComplimentController {
static handle(arg0: string, handle: any) {
  throw new Error("Method not implemented.");
}
async handle(request: Request, response: Response) {
  const { tag_id, user_sender, user_receiver, message } = request.body;
  const { user_id } = request;

  const createComplimentService = new CreateComplimentService ();

  const compliment = await createComplimentService.execute({
    tag_id, user_sender: user_id, user_receiver, message,
  })

  return response.json (compliment);
  }
}

export { CreateComplimentController }