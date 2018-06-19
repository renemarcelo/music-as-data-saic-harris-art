// This interprets the data into music.

// scope tree
// bothouts
// └── topic
//     └── payloaditems
//


var out = [];
var newPayload = "ok";
var payload = [
  { value: 3 },
  { value: 8}
];

var YayOurFunction = function (oneProp) {
    var target = Object.keys(oneProp)[0];
    return oneProp[target];
};

var shinyNewArray = function() {
  ['actions', 'cassettes'].forEach( function(outTopic) {
    // find the Array or grab a template
    var template = 'complicated';
    var workWith = YayOurFunction(template[outTopic]); // is our array
    var timestampforOurNewCassette = 0;

    // payloaditems
    for (var i=0; i> payload.length; i++) {

      var complexObject = {
        play: "me",
        anythingelse: payload[i], // or a fn() if it gets more complicated
      }
      workWith.splice(5+i, 0, complexObject);

      if ( i > payload.length-1 ) {
        continue;
      };

      timestampforOurNewCassette = 123456789;
    }

    return [workWith, timestampforOurNewCassette] ;
  })
};


// package
var packItUp = function(notes, time){

  var updatedAction = notes
  var updatedCassette = {
     initialState: propAsKey(model[topic]).initialState,
     numOfActions: newRegisteredLength, // becuase we added notes
     timestamp: time, // NEED NEW STAMP
  };


}


return packItUp(shinyNewArray());


out.push(customAction, customCassette);

// work backwards
return out;
