const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path")

const port = process.env.PORT || 3000
const app = express()



//======= Set up handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
// ====== Set up path
app.use(express.static(path.join(__dirname, 'public')))




app.get("/", (req,res)=>{
  res.render("mainviews/home")
})














//Run port access
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
