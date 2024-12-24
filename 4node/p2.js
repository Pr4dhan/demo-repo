const express = require(express)

function calculateSum(a,b) {
  return a + b;
}

const app = express();

app.get("/", function(req, res)){
  const n = req.query.n;
  const ans = calculateSum(n)
  res.send(ans.toString());
}

app.listen(3000);
