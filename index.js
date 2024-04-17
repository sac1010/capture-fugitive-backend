const express = require('express');
const app = express();
const copsRouter = require('./src/routes/cops');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/cops', copsRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
