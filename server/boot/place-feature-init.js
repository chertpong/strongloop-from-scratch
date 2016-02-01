var async = require('async');

module.exports = function(app) {
  var mongoDs = app.dataSources.db;
  var PlaceType = app.models.PlaceType;
  var Contact = app.models.Contact;
  var Place = app.models.Place;
  var Content = app.models.Content;
  var placeTypesData = require('../init-data/place-types.json');
  var contactData = require('../init-data/contact');
  var placeData = require('../init-data/place');
  var contentData = require('../init-data/contents.json');


  // create all models
  async.series({
    placeTypes: async.apply(createPlaceTypes),
    places: async.apply(createPlaces),
    contents: async.apply(createContents)
  }, function(err, results) {
    if (err) throw err;
    addDependencies(results.places);
  });

  // create place types
  function createPlaceTypes(cb) {
    mongoDs.automigrate('PlaceType', function(err) {
      if (err) return cb(err);
      PlaceType.create(placeTypesData, cb);
    });
  }
  // create places
  function createPlaces(cb) {
    mongoDs.automigrate('Place', function(err) {
      if (err) return cb(err);
      Place.create(placeData,cb);
    });
  }

  // create contents
  function createContents(cb) {
    mongoDs.automigrate('Content', function(err) {
      if (err) return cb(err);
      cb();
    });
  }




  // create dependencies
  function addDependencies(places ,cb) {
    mongoDs.automigrate('Contact', function(err) {
      if (err) return cb(err);

      contactData.forEach(function(element,index){
        contactData[index].placeId = places[index].id;
      });

      Place.findById(places[0].id,function(err,place) {
        place.contents.create(contentData[0], function (err, content) {
          if (err) throw err;
        });
        place.contents.create(contentData[1], function (err, content) {
          if (err) throw err;
        });
        Place.findById(places[1].id, function (err, place) {
          place.contents.create(contentData[2], function (err, content) {
            if (err) throw err;
          });
          place.contents.create(contentData[3], function (err, content) {
            if (err) throw err;
          });
        });
      });

      Contact.create(contactData
      , cb);
    });
  }

};
