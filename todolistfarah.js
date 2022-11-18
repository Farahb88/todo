var mylist = document.getElementsByTagName("li");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

function newElement() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  var li = document.createElement("li");
  li.style.background = bgColor;

  var inputValue = document.getElementById("search").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!!!");
  } else {
    document.getElementById("mytodo").appendChild(li);
  }

  document.getElementById("search").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (evt) {
      if (evt.target.tagName === "li") {
        evt.target.classList.toggle("checked");
      }
    },
    false
  );
}

var mylist = [];

if (localStorage.getItem("mylist")) {
  mylist = localStorage.getItem("mylist");
} else {
() => {
    localStorage.setItem("mylist, mylist");
  };
}


// let idealCar = {
//   name: 'Mustang',
//   color: 'Red',
//   weightInPounds: 3600,
//   myCar: function () {
//       console.log('My ideal car is a ' + this.name + ' with a color of ' + this.color + ', but I do not want it to be over ' +
//           this.weightInPounds + ' pounds.');
//   }
// };

// idealCar.myCar();

// const doubleAge = (age) => {
//   return  age * 2;}
//   console.log(doubleAge)
 
//   const defaultParam = (a, b=10) => {
//     return a * b; 
   
//   }
//   console.log(defaultParam)



//   const addName = (firstName,lastName ) => {
//    {return firstName+" "+lastName ;
// }
//   }
  