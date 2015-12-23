var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var Firebase = require('firebase');
var asianRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/asian')
var cuteRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/cute')
var findherRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/findher')
var burnbraRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/burnbra')
var humpdayRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/humpday')
var fuegoRef = new Firebase('https://chive-smash.firebaseio.com/chivegirls/fuego')

function populateRef(refname, url){
  var i = 1;
  while (i <= 10){
    request.get(`http://thechive.com/category/girls/${url}/page/${i}`, function(err, resp, body){
      var $ = cheerio.load(body);
      $('.card-thumb.wp-post-image').each(function(i, e){
        var imageSrc = $(e).attr('src');

        girlObj = {url: imageSrc, rank: 0}
        var id = imageSrc.replace(/[\.#\$\[\]\/:]/g, '')

        refname.child(id).transaction(function(snap){
          if(!snap) return girlObj
        })
      })
    });
    i++;
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {

  populateRef(asianRef, 'asian');
  populateRef(cuteRef, 'cute-girls');
  populateRef(findherRef, 'find-her');
  populateRef(burnbraRef, 'burn-bra-girls');
  populateRef(humpdayRef, 'hump-day-girls');
  populateRef(fuegoRef, 'fuego');

  res.render('index');
});


module.exports = router;
