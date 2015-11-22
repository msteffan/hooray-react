app.get('/', function(req, res) {
     res.sendFile("/index.html");

});


  //
  // app.listen(process.env.PORT || 3000, function(){
  //   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  // });
