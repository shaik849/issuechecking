//promises

const promise = new Promise(function(resolve, reject) {
    let val = false;
    if(val){
        resolve(val);
    }
    else{
        reject("not solved");
    }
});

const promise1 = new Promise(function(resolve, reject) {
    let val = false;
    if(val){
        resolve(val);
    }
    else{
        reject("not solved");
    }
});

const promise2 = new Promise(function(resolve, reject) {
    let val = true;
    if(val){
        resolve(val);
    }
    else{
        reject("not solved");
    }
});

const result = Promise.any([promise, promise1, promise2]).then((x) => {
    display(x);
  }).catch((err) => { console.log(err); });

  function display(val){
    console.log(val);
  }

  let obj = {
    name: "sana",
    fun: function fullName() {
        console.log(this.name);
    }
};

// Correct way to call fullName using .call()
const data = obj.fun.bind(obj); // 
data()
// let p1 = promise.then((val) =>{
//    console.log(val);
   
// }).catch((e) => console.log(e));
