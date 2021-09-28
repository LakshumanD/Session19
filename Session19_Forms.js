const form = () => {

// const frm = document.createElement("FORM");
  //frm.addEventListener("submit", submitevent,false);
  
  // div
  let div = document.createElement("div");
  div.className = "container border border-primary rounded ";
  div.style.cssText = "margin-Top:10%;margin-left:3%;width:90%";

  //firstrow
  const div_frstrow = document.createElement("div");
  div_frstrow.className = "row justify-content-center p-3";
  createLabel(
    div_frstrow,
    "col-2",
    "First Name"
  );
  
  createControl(
    div_frstrow,
    "text",
     "form-control",
    "col-4",
    "firstname"
  );
   createLabel(
    div_frstrow,
    "col-2",
    "Last Name"
  );
  
  createControl(
    div_frstrow,
    "text",
     "form-control",
    "col-4",
    "lastname"
  );
  
  Appendcontrol(div, div_frstrow);

  //secrow
  const div_secrow = document.createElement("div");
  div_secrow.className = "row justify-content-center p-3";
  createLabel(
    div_secrow,
    "col-2",
    "Address"
  );
  
  createControl(
    div_secrow,
    "text",
     "form-control",
    "col-4",
    "address"
  );
   createLabel(
    div_secrow,
    "col-2",
    "Pin Code"
  );
  
  createControl(
    div_secrow,
    "text",
     "form-control",
    "col-4",
    "pincode"
  );
  
  Appendcontrol(div, div_secrow);

  //thirdrow
  const div_thirdrow = document.createElement("div");
  div_thirdrow.className = "row justify-content-center p-3";
  createLabel(
    div_thirdrow,
    "col-2",
    "State"
  );
  
  createControl(
    div_thirdrow,
    "text",
     "form-control",
    "col-4",
    "state"
  );
   createLabel(
    div_thirdrow,
    "col-2",
    "Country"
  );
  
  createControl(
    div_thirdrow,
    "text",
     "form-control",
    "col-4",
    "country"
  );
  
  Appendcontrol(div, div_thirdrow);

  // fourthrow
  const div_frthrow = document.createElement("div");
  div_frthrow.className = "row justify-content-center p-3";
  createLabel(
    div_frthrow,
    "col-2",
    "Gender"
  );
  
  createControl(
    div_frthrow,
    "Radio",
     "form-control p-2",
    "col-4",
    "Gender"
  );
   createLabel(
    div_frthrow,
    "col-2",
    "Choice of food"
  );
  
  createControl(
    div_frthrow,
    "Checkbox",
     "form-control",
    "col-4",
    "food"
  );
  
  Appendcontrol(div, div_frthrow);

//fifth row
  const div_fifthrow = document.createElement("div");
  div_fifthrow.className = "row justify-content-center p-3";
createControl(
    div_fifthrow,
    "submit",
     "btn btn-primary ",
    "col-12 text-center",
    "Submit"
);
  Appendcontrol(div, div_fifthrow);


 
//6th row
  const div_sixthrow = document.createElement("div");
  div_sixthrow.className = "row justify-content-center p-3";

  const table = document.createElement("TABLE");
  table.id = "tbl";
  table.className = "table table-bordered";
  var row = document.createElement("TR");
            row.setAttribute("id", "Header");
  
  CreateTableHeader(row,table, "First Name");
  CreateTableHeader(row,table, "Last Name");
  CreateTableHeader(row,table, "Address");
  CreateTableHeader(row,table, "Pin Code");
  CreateTableHeader(row, table, "State");
  CreateTableHeader(row,table, "Country");
  CreateTableHeader(row, table, "Gender");
  CreateTableHeader(row, table, "Choice of food");
  
  Appendcontrol(div_sixthrow, table);
  Appendcontrol(div, div_sixthrow);

 // Appendcontrol(frm, div);

  document.body.appendChild(div);
};

const CreateTableHeader=(row,parent,value) => {
            var c = document.createElement("TD");
            var d = document.createTextNode(value);
            c.appendChild(d);
            row.appendChild(c);
            parent.appendChild(row);
}

const Appendcontrol = (parent, child) => {
  parent.appendChild(child);
};

const createControl = (parent, type, controlstyle, divstyle, text) => {
  const div_firstrow_col = document.createElement("div");
  div_firstrow_col.className = divstyle;
  if (type == "text" ) {
    const result = document.createElement("INPUT");
    result.setAttribute("type", type);
    result.className = controlstyle;
    result.id = text;
     div_firstrow_col.appendChild(result);
  }
  else if(type=="Radio")
  {
    createRadio(div_firstrow_col, "Male");
    createRadio(div_firstrow_col, "FeMale");
  }
  else if(type=="Checkbox")
  {
    checkbox(div_firstrow_col, "Food1", "food", "Briyani");
    checkbox(div_firstrow_col, "Food1", "food", "Parotta");
    checkbox(div_firstrow_col, "Food1", "food", "Idly");
    checkbox(div_firstrow_col, "Food1", "food", "Dosai");
    checkbox(div_firstrow_col, "Food1", "food", "Poori");
  }
  else if (type == "submit" ) {
    const result = document.createElement("INPUT");
    result.setAttribute("type", type);
    result.className = controlstyle;
    result.id = text;
    result.value = text;

    result.addEventListener("click", submitevent);
     div_firstrow_col.appendChild(result);
  }

  parent.appendChild(div_firstrow_col);
};
const checkbox = (parent,id,name,value) => {
   var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.name = name;
  checkbox.value = value;
 
    var label = document.createElement('label')
  label.htmlFor = value;
  label.className = "p-2";
    label.appendChild(document.createTextNode(value));
 
  var br = document.createElement('br');
    parent.appendChild(checkbox);
    parent.appendChild(label);
    parent.appendChild(br);
}
const createRadio = (parent, text) => {
  var male = document.createElement("input");
            male.setAttribute("type", "radio");  
            male.setAttribute("id", "male");  
            male.setAttribute("name", "gender");  
  male.className = "p-2";
  male.value = text;
      
  var lblmale = document.createElement("label");
            lblmale.innerHTML = text;
            lblmale.className = "p-2";
            parent.appendChild(male);  
            parent.appendChild(lblmale);   
}
const createLabel = (parent, divstyle, text) => {
  const div_firstrow_col = document.createElement("div");
  div_firstrow_col.className = divstyle;
  const result = document.createElement("LABEL");
  result.setAttribute("for", text);
  var f = document.createTextNode(text);
  result.appendChild(f);
  result.title = text;
  result.text = text;
  div_firstrow_col.appendChild(result);
  parent.appendChild(div_firstrow_col);
};

const readData = () => {
  const formDATA = [];
  formDATA["firstname"] = document.getElementById("firstname").value;
  formDATA["lastname"] = document.getElementById("lastname").value;
  formDATA["address"] = document.getElementById("address").value;
  formDATA["pincode"] = document.getElementById("pincode").value;
  formDATA["state"] = document.getElementById("state").value;
  formDATA["country"] = document.getElementById("country").value;
  var checkboxs = document.querySelectorAll("input[type=checkbox]");
  let val = "";
  for (let checkbox of checkboxs)
    if (checkbox.checked)
      val =val+checkbox.value+",";
  formDATA["choice"] = val.substr(0, val.length - 1);
  
var radios = document.querySelectorAll("input[type=radio]");
  let radval = "";
  for (let radio of radios)
    if (radio.checked)
      radval =radval+radio.value+",";
  formDATA["gender"] = radval.substr(0, radval.length - 1);
  

  return formDATA;
}

form();

function submitevent()
{
  var checkboxs = document.querySelectorAll("input[type=checkbox]");
  let count = 0;
  for (let checkbox of checkboxs)
    if (checkbox.checked)
      count++;
  if (count < 2) {
    alert("Please choose at least 2 ");
    return;
  }
  let formdate = [];
  formdate = readData();

 // console.log(formdate);
  var table = document.getElementById("tbl");
  var row = table.insertRow(-1);
  var FirstName = row.insertCell(0);
  var LastName = row.insertCell(1);
  var address = row.insertCell(2);
  var pincode = row.insertCell(3);
  var state = row.insertCell(4);
  var country = row.insertCell(5);
  var gender = row.insertCell(6);
  var choice = row.insertCell(7);

  FirstName.innerHTML = formdate.firstname;
  LastName.innerHTML = formdate.lastname;
  address.innerHTML = formdate.address;
  pincode.innerHTML = formdate.pincode;
  state.innerHTML = formdate.state;
  country.innerHTML = formdate.country;
  gender.innerHTML = formdate.gender;
  choice.innerHTML = formdate.choice;

  let texts = document.querySelectorAll("input[type=text");
 //console.log(texts);
 for (var text of texts)
   text.value = "";
 
}