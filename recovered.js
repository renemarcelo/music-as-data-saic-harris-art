var out = []; // 2 outputs eventually
var tur = msg.payload.value; // from postgres
var model = msg.model;


var propAsKey = function (oneProp) {
    var target = Object.keys(oneProp)[0];
    return oneProp[target];
};

['actions', 'cassettes'].forEach( function(topic) {
    var newNote = {};
    var newArray = [];
    var newRegisteredLength = 0;

    if (topic === 'actions') {

      

       newNote = {
            delay: tur,
            letter: "Q", // KEYBOARD VIZ
            type: "NOTES/ADD_NOTE",
            value: "C4", // simple as of now
        };

        var orig = Array.from(propAsKey(model[topic]));


        var oArrayLength = orig.length;
        for (var i = 0; i < oArrayLength; i++) {
            //Do something
            newArray = orig.splice(6, 0, newNote);
        }


        // remember 2outputs
        var newActionPayload = newArray;

        var customDuration = {
            // origArray: orig,//temporary
            // newArray: newArray,
            // payload: JSON.stringify(newActionPayload)   // unsure why
            topic: "task1",
            payload: JSON.stringify(orig)
        };



    newRegisteredLength++;
    out.push(customDuration);
    // end 'actions' if
    }

    if (topic === 'cassettes') {

        //actually only once : not iterative
        newRegisteredLength = propAsKey(model[topic]).numOfActions + 1;

        var updatedCassette = {
            initialState: propAsKey(model[topic]).initialState,
            numOfActions: newRegisteredLength, // becuase we added notes
            timestamp: msg.timestamp, // NEED NEW STAMP
        };

        var newCassettePayload = updatedCassette;
        var customCassette = {
            topic: "task2",
            payload: JSON.stringify(newCassettePayload)
        };

        out.push(customCassette);
        // end 'cassettes' if
    }



    // var newPayload = propAsKey(msg.payload[topic]);
    // var newPayload = propAsKey(newArray);

    // var customDuration = {
    //     payload: JSON.stringify(newPayload)
    // };

    // out.push(synthLick);

});


return out;
