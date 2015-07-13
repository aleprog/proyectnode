exports.question=function(req,res){
  res.render('quizes/question',{pregunta: '¿Capital de Venezuela?'});
}
exports.answer=function(req, res){
  if(req.query.respuesta=='caracas'){
   res.render('quizes/answer',{respuesta:'Correcta'})
 }else{
   res.render('quizes/answer',{respuesta:'Incorrecta'});
 }
}
