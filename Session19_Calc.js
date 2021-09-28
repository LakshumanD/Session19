const calculater = () => {
  // div
  let div = document.createElement("div");
  div.className = "border border-primary rounded ";
  div.style.cssText = "margin-Top:10%;margin-left:10%;width:400px";
  // first row
  const div_firstrow = document.createElement("div");
  div_firstrow.className = "row justify-content-center";
  div_firstrow.style.cssText = "margin-top:5%";
  createControl(div_firstrow, "text", "form-control", "col-8 text-center", "");
  Appendcontrol(div, div_firstrow);
  //secondrow
  const div_secrow = document.createElement("div");
  div_secrow.className = "row justify-content-center";
  createControl(
    div_secrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "C"
  );
  createControl(
    div_secrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "+/-"
  );
  createControl(
    div_secrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "%"
  );
  createControl(
    div_secrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "/"
  );
  Appendcontrol(div, div_secrow);

  //thirdrow
  const div_thidrow = document.createElement("div");
  div_thidrow.className = "row justify-content-center";
  createControl(
    div_thidrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "1"
  );
  createControl(
    div_thidrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "2"
  );
  createControl(
    div_thidrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "3"
  );
  createControl(
    div_thidrow,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "*"
  );
  Appendcontrol(div, div_thidrow);

  // fotrh row
  const div_fourth = document.createElement("div");
  div_fourth.className = "row justify-content-center";
  createControl(
    div_fourth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "4"
  );
  createControl(
    div_fourth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "5"
  );
  createControl(
    div_fourth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "6"
  );
  createControl(
    div_fourth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "-"
  );
  Appendcontrol(div, div_fourth);

  // fifth row
  const div_fifth = document.createElement("div");
  div_fifth.className = "row justify-content-center";
  createControl(
    div_fifth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "7"
  );
  createControl(
    div_fifth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "8"
  );
  createControl(
    div_fifth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "9"
  );
  createControl(
    div_fifth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "+"
  );
  Appendcontrol(div, div_fifth);
  // sixth row
  const div_sixth = document.createElement("div");
  div_sixth.className = "row justify-content-center";
  createControl(
    div_sixth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "00"
  );
  createControl(
    div_sixth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "0"
  );
  createControl(
    div_sixth,
    "button",
    "btn btn-light",
    "col-2 text-center p-2",
    "."
  );
  createControl(
    div_sixth,
    "button",
    "btn btn-info rounded",
    "col-2 text-center p-2",
    "="
  );
  Appendcontrol(div, div_sixth);
  document.body.appendChild(div);
};

const Appendcontrol = (parent, child) => {
  parent.appendChild(child);
};

const createControl = (parent, type, controlstyle, divstyle, text) => {
  const div_firstrow_col = document.createElement("div");
  div_firstrow_col.className = divstyle;
  const result = document.createElement("INPUT");
  result.setAttribute("type", type);
  if (type == "button")
   result.addEventListener("click",click.bind(this));
  result.className = controlstyle;
  result.title = text;
  result.value = text;
  div_firstrow_col.appendChild(result);
  parent.appendChild(div_firstrow_col);
};

const click = (e) => {
  const elements = document.querySelectorAll('input[type=text]');
  const text = elements[0];
  const textval = text.value.toString();
  
  if (e.target.value != "=" && e.target.value!="C")
    text.value = textval + e.target.value;
 
  if (text.value!="" && e.target.value == "=")
    text.value = eval(text.value);
  if (e.target.value == "C")
    text.value = "";
}

calculater();
