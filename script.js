const inputs = document.querySelectorAll("input"); //get inputs
const addBtn = document.getElementById("Addbtn"); //get button
const Box = document.getElementById("box");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((value) => {
    const inputValue = value.value;
    const newLi = document.createElement("span");
    newLi.innerHTML = inputValue;
    Box.appendChild(newLi);
  });

  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  btn1.innerText = "حذف";
  btn2.innerText = "ویرایش";
  btn3.innerText = "جزییات";
  Box.appendChild(btn1);
  Box.appendChild(btn2);
  Box.appendChild(btn3);

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const explain = document.getElementById("explain").value;

  localStorage.setItem("title", title);
  localStorage.setItem("date", date);
  localStorage.setItem("explaintion", explain);
});

// https://stackoverflow.com/questions/72591283/creating-an-edit-buttonto-do-app-javascript

//-----------------------------------------------------------------------------------------------
