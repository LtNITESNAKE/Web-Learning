console.log("maryam is a jacker")
console.log("hecker")

setTimeout(() =>{
    console.log("i am insite settimeout")
},0);


console.log(" the end")

const fn = () => {
  console.log("Nothing")

}


const callback = (arg,fn) => {
  console.log(arg)
  fn();
}

const loadScript = (src,callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("harry",fn);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prim/9000.0.1/prism.min.js",callback)