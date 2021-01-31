const EOF=Symbol("EOF");

function data(c){

}


module.exports.parseHTML = function parseHTML(html){
   let state=data;
   for (const c of html) {
       state=state(c);
   }
   state=state(EOF);
}