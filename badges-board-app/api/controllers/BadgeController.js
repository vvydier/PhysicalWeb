/**
 * BadgeController
 *
 * @description :: Server-side logic for managing badges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  index:function (req,res) {
    var data = req.params.all();
    if(req.isSocket && req.method === 'POST') {
      Badge.query('INSERT into `badge` (`user`,`badge`,`message`) VALUES ("'+data.user+'","'+data.badge+'","'+data.message+'")',function(err,rows){
        if(err) {
          sails.log(err);
          sails.log("Error occurred in database operation");
        } else {
          Badge.publishCreate({id: rows.insertId, message : data.message , badge : data.badge ,user:data.user});
        }
      });
    } else if(req.isSocket){
      Badge.watch(req.socket);
      sails.log( 'User subscribed to ' + req.socket.id );
    }
    if(req.method === 'GET') {
      Badge.query('SELECT * FROM `badge`',function(err,rows){
        if(err) {
          sails.log(err);
          sails.log("Error occurred in database operation");
        } else {
          res.send(rows);
        }
      });
    }
  }
};
