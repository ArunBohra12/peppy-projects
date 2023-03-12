import { Request, Response } from 'express';

const resourceNotFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't ${req.method} ${req.path}`,
  });
};

export default resourceNotFoundHandler;
