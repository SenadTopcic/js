function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("404");
    }, 100);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🤣");
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success : ${data}`);
}

function onReject(error) {
  console.log(`E R r o R  ${error}`);
}

function inTheEnd(){
  console.log('FINALY WE BE DONE YO')
}

fun1().then(fun2).then(onSuccess).catch(onReject).finally(inTheEnd);
