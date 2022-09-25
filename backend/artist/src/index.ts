import { app } from './app';

if (!process.env.DETA_RUNTIME) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Artist micro listening on port ${PORT}`));
}

module.exports = app;
