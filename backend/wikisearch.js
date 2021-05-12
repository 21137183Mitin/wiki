const request = require("request");

const wikisearch = (haku, callback) => {

    const url = "https://wikipedia.org/w/api.php?action=query&titles=" +
    haku + 
    "&format=json&formatversion=2&prop=extracts|pageimages|&exintro&explaintext&exsentences=4&piprop=thumbnail&pithumbsize=400";


    request({uri:url, json:true}, (error, response, body)=> {
        if (error) {
            callback("ei yhteyttä  darboxiin", undefined);
        } else if (body.error){
            callback("Ei oo paikkaa", undefined);
        } else {
            // callback(undefined, body.query.pages[0].extract);
            callback(undefined, body.query.pages);
        }
    });
};

module.exports = {
    wikisearch,
};