var out = []; // 2 outputs eventually
var model = msg.model;
var newNote = {};
// var newArray = [];
var count = 0;

context.model = context.model || model;



var propAsKey = function (oneProp) {
    var target = Object.keys(oneProp)[0];
    return oneProp[target];
};

var findCherries = function (musicalNotes) {
    return ['A', 'C', 'D', 'F'].includes(musicalNotes[1]);
};

msg.payload.forEach(function(monitorReading) {
    var turVal = monitorReading.value; // from postgres
    // Read and insert into latest full vcr object
    var newModel = context.model;




    ['actions', 'cassettes'].forEach( function(slotTopic) {

        var customCassette = {};
        var updatedAttributes = {};



        while (slotTopic === 'actions' && count < msg.payload.length) {
            var customAction = {};
            var injectHex = parseInt(turVal, 16);


            newNote = {
                delay: turVal,
                letter: '',
                type: count % 2 ? 'NOTES/ADD_NOTE': 'NOTES/REMOVE_NOTE',
                value: findCherries ? injectHex : "C4",
            };

            // merge
            newArray = propAsKey(newModel[slotTopic]);
            // var updatedAction = newArray.splice(6, 0, newNote);
            context.data = newArray.splice(count+6, 0, newNote);

            count++;
            continue;
            // too early
            // customAction = {
            //     topic: 'task1',
            //     payload: updatedAction,
            // };


            // out.push(customAction);

        }


        // after we are done with actions...
        if (slotTopic === 'cassettes') {
            // use 'else if' since we just need latest count
            updatedAttributes = {
                initialState: propAsKey(newModel[slotTopic]).initialState,
                numOfActions: propAsKey(newModel[slotTopic]).numOfActions,
                timestamp: msg.timestamp,
            };



            // bring in our updated actions list

        }


        customCassette = {
            topic: 'task2',
            payload: updatedAttributes,
        };

        customAction = {
            topic: 'task1',
            // payload: updatedAction,
            payload: context.get('data'),
        };
        out.push(customAction);

    });



});

return out;






// ['actions', 'cassettes'].forEach( function(slotTopic) {
//     var newNote = {}; // send up
//     // var newArray = [];
//     var newRegisteredLength = 0;

//     if (topic === 'actions') {

//       newNote = {
//             delay: tur,
//             letter: "Q", // KEYBOARD VIZ
//             type: "NOTES/ADD_NOTE",
//             value: "C4", // simple as of now
//         };

//         var orig = Array.from(propAsKey(model[slotTopic]));/////x


//         var oArrayLength = orig.length;
//         for (var i = 0; i < oArrayLength; i++) {
//             //Do something
//             newArray = orig.splice(6+i, 0, newNote);
//         }


//         // remember 2outputs
//         var newActionPayload = newArray;

//         var customDuration = {
//             // origArray: orig,//temporary
//             // newArray: newArray,
//             // payload: JSON.stringify(newActionPayload)   // unsure why
//             topic: "task1",
//             payload: JSON.stringify(orig)
//         };

//         // out.push(custom)



//     newRegisteredLength++;
//     out.push(customDuration);
//     // end 'actions' if
//     }

//     if (topic === 'cassettes') {

//         //actually only once : not iterative
//         newRegisteredLength = propAsKey(model[topic]).numOfActions + 1;

//         var updatedCassette = {
//             initialState: propAsKey(model[topic]).initialState,
//             numOfActions: newRegisteredLength, // becuase we added notes
//             timestamp: msg.timestamp, // NEED NEW STAMP
//         };

//         var newCassettePayload = updatedCassette;
//         var customCassette = {
//             topic: "task2",
//             payload: JSON.stringify(newCassettePayload)
//         };

//         out.push(customCassette);
//         // end 'cassettes' if
//     }



//     // var newPayload = propAsKey(msg.payload[topic]);
//     // var newPayload = propAsKey(newArray);

//     // var customDuration = {
//     //     payload: JSON.stringify(newPayload)
//     // };

//     // out.push(synthLick);

// });


// return out;
