
import path from 'path';
import gateway from 'express-gateway';
import './service1';
import './service2';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
