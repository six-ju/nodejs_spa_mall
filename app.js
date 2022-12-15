const express = require('express');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js');
const cartsRouter = require('./routes/carts.js');
const connect = require("./schemas");
connect();



app.use(express.json());
app.use("/api", [goodsRouter,cartsRouter]);

app.get("/", (req, res) => {
    console.log(req.query);

    const obj = {
        "KeyKey" : "value 입니다.",
        "이름입니다." : "이름일까요?",
    }

    res.status(400).json(obj);
})

app.get("/:id", (req,res)=>{
    console.log(req.params);

    res.send(":id URI에 정상적으로 반환 되었습니다.")
})

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// localhost:3000/api
app.use("/api", goodsRouter);

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});