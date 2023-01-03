import { Request, Response } from 'express';

import { Order } from './../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['Waiting', 'in_Production', 'Done'].includes(status)) {
      return res.status(400).json({
        error: 'status should be one of these: Waiting, in_Production, Done',
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
