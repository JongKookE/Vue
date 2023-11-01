// export, import
// named export
// 전체 선언 후 전체 export
// let PLAYERS = ["손흥민", "이강인", "김민재"];
// const MAX_SIZE = 1000;
// function add(n1, n2) {
//   return n1 + n2;
// }

// var obj = {
//   template: `<div>My HTML Template</div>`,
//   data() {
//     return {
//       num: 20,
//     };
//   },
//   log: function () {
//     console.log("log is Called");
//   },
// };

// export { PLAYERS, MAX_SIZE, add, obj };

// export let PLAYERS = ["손흥민", "이강인", "김민재"];
// export let MAX_SIZE = 1000;

// export default
let PLAYERS = ["손흥민", "이강인", "김민재"];
const MAX_SIZE = 1000;
function add(n1, n2) {
  return n1 + n2;
}

export default {
  template: `<div>My HTML Template</div>`,
  data() {
    return {
      num: 20,
    };
  },
  log: function () {
    console.log("log is Called");
  },
};

// export default { obj };
