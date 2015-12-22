var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var Firebase = require('firebase');
var asianRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/asian')
var cuteRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/cute')
var findherRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/findher')

/* GET home page. */
router.get('/', function(req, res, next) {


  var i = 1;
  while (i <= 10){
    request.get(`http://thechive.com/category/girls/asian/page/${i}`, function(err, resp, body){
      var $ = cheerio.load(body);
      $('.card-thumb.wp-post-image').each(function(i, e){
        var imageSrc = $(e).attr('src');

        girlObj = {url: imageSrc, rank: 0}
        var id = imageSrc.replace(/[\.#\$\[\]\/:]/g, '')

        asianRef.child(id).transaction(function(snap){
          if(!snap) return girlObj
        })
      })
    });
    i++;
  }

  var i = 1;
  while (i <= 10){
    request.get(`http://thechive.com/category/girls/cute-girls/page/${i}`, function(err, resp, body){
      var $ = cheerio.load(body);
      $('.card-thumb.wp-post-image').each(function(i, e){
        var imageSrc = $(e).attr('src');

        girlObj = {url: imageSrc, rank: 0}
        var id = imageSrc.replace(/[\.#\$\[\]\/:]/g, '')

        cuteRef.child(id).transaction(function(snap){
          if(!snap) return girlObj
        })
      })
    });
    i++;
  }

  var i = 1;
  while (i <= 10){
    request.get(`http://thechive.com/category/girls/find-her/page/${i}`, function(err, resp, body){
      var $ = cheerio.load(body);
      $('.card-thumb.wp-post-image').each(function(i, e){
        var imageSrc = $(e).attr('src');

        girlObj = {url: imageSrc, rank: 0}
        var id = imageSrc.replace(/[\.#\$\[\]\/:]/g, '')

        findherRef.child(id).transaction(function(snap){
          if(!snap) return girlObj
        })
      })
    });
    i++;
  }

  res.render('index');
});


module.exports = router;
