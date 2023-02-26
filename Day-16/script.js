let h1Ele = document.createElement("h1");
h1Ele.classList.add("text-primary");

h1Ele.innerText = 10;

let body = document.querySelector("body");
body.append(h1Ele);

setTimeout(() => {
  h1Ele.innerText = 9;
  setTimeout(() => {
    h1Ele.innerText = 8;
    setTimeout(() => {
      h1Ele.innerText = 7;
      setTimeout(() => {
        h1Ele.innerText = 6;
        setTimeout(() => {
          h1Ele.innerText = 5;
          setTimeout(() => {
            h1Ele.innerText = 4;
            setTimeout(() => {
              h1Ele.innerText = 3;
              setTimeout(() => {
                h1Ele.innerText = 2;
                setTimeout(() => {
                  h1Ele.innerText = 1;
                  setTimeout(() => {
                    h1Ele.innerText = "Happy Independence Day";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
