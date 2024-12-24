let ctr = 0;
function callback1() {
  console.log(ctr);
  ctr = ctr +1;
}

setInterval(callback, 1000);
