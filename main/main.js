/**
 * Created by zhuoyue on 16-8-3.
 */
let {route} = require('../route/route');
var scanf = require('scanf');
// const repl = require('repl');

//let status = 'init';
// console.log(route("").text);
// //接受用户输入
// function handleCmd(cmd, context, filename, done) {
//     switchRouter({
//         cmd: cmd.trim()
//     }, done);
//
//     done(null);
// }
// repl.start({prompt: "#", eval: handleCmd});
// function switchRouter(context, done) {
//     let result = route(context.cmd);
//     console.log(result.text);
//     if(result.rerun===true){console.log(route("").text);}
//     done(null);
// }

console.log(route("menu").text);
for(let i=1;i>0;i++){
    let   input=scanf('%s');
    let result=route(input);
      console.log('%s',result.text);
    if(result.rerun===true)
    {console.log(route("").text);}
}