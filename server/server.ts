import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import app from './app';

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
