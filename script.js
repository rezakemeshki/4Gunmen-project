var addInput = document.getElementById('input-add');
var addInput1 = document.getElementById('input-add1');
var addInput2 = document.getElementById('input-add2');
var addbtn = document.getElementById('add-btn');
var liParent = document.getElementById('li-parent');

 


addbtn.addEventListener('click', () => {
    var div = document.createElement('div');
    div.setAttribute('class', 'divedit');
    liParent.appendChild(div);

    var li = document.createElement('li');
    li.setAttribute('id', 'edit-li');
    li.setAttribute('class', 'edit-li');
    var inputValue = addInput.value;
    li.innerHTML = inputValue;
    div.appendChild(li);

    var li1 = document.createElement('li');
    li1.setAttribute('id', 'edit-li1');
    li1.setAttribute('class', 'edit-li');
    var inputValue1 = addInput1.value;
    li1.innerHTML = inputValue1;
    div.appendChild(li1);

    var li2 = document.createElement('li');
    li2.setAttribute('id', 'edit-li2');
    li2.setAttribute('class', 'edit-li');
    var inputValue2 = addInput2.value;
    li2.innerHTML = inputValue2;
    div.appendChild(li2);

    var editbtn = document.createElement('button');
    editbtn.setAttribute('id', 'edit-btn');
    editbtn.innerHTML = 'ویرایش';
    div.appendChild(editbtn);

    addInput.value = '';
    addInput1.value = '';
    addInput2.value = '';

  
  //  EEbtn.addEventListener('click', () => { 
        var divedit = document.querySelectorAll('.divedit'); 
        divedit.forEach(name);

     
   // });
    
    
    function name(div) {

      div.addEventListener('click', ()=>{

  
    var editli = div.querySelector('#edit-li');
    var editli1 = div.querySelector('#edit-li1');
    var editli2 = div.querySelector('#edit-li2');

    console.log('jkjjjjjjjj');
    editli.contentEditable = true;
    editli.style.backgroundColor = "#dddbdb";
    editli1.contentEditable = true;
    editli1.style.backgroundColor = "#dddbdb";
    editli2.contentEditable = true;
    editli2.style.backgroundColor = "#dddbdb";
 
    })
}


});


























//addbtn.addEventListener('click', ()=>{  


/*creation elements*//*
var div =document.createElement('div');
div.setAttribute('class', 'divedit')

liParent.appendChild(div)

   var li =document.createElement('li');
    li.setAttribute('id', 'edit-li')
    li.setAttribute('class', 'edit-li')
 var inputValue = addInput.value
li.innerHTML= inputValue;
div.appendChild(li)



var li1 =document.createElement('li');
li1.setAttribute('id', 'edit-li1')
li.setAttribute('class', 'edit-li')

var inputValue1 = addInput1.value
li1.innerHTML= inputValue1;
div.appendChild(li1)

var li2 =document.createElement('li');
    li.setAttribute('class', 'edit-li')
li2.setAttribute('id', 'edit-li2')
var inputValue2 = addInput2.value
li2.innerHTML= inputValue2;
div.appendChild(li2)

*/

/******************* */ /*
var editbtn =document.createElement('button');
editbtn.setAttribute('id', 'edit-btn')
editbtn.innerHTML= 'ویرایش';
liParent.appendChild(editbtn)

addInput.value= ''
addInput1.value= ''
addInput2.value= ''
   var EEbtn = document.getElementById('edit-btn');

EEbtn.addEventListener('click', ()=>{
console.log(EEbtn);
var divedit = document.querySelectorAll('.divedit');

var pppp = document.querySelectorAll('.li-parent');
divedit.forEach(name)
})
})





  


function name() {
  
    
  var editli = document.getElementById('edit-li');
  var editli1 = document.getElementById('edit-li1');
  var editli2 = document.getElementById('edit-li2');
  
  

        console.log('jkjjjjjjjj');
    editli.contentEditable = true;
     editli .style.backgroundColor = "#dddbdb";
     editli1.contentEditable = true;
     editli1 .style.backgroundColor = "#dddbdb"; 
      editli2.contentEditable = true;
     editli2 .style.backgroundColor = "#dddbdb";

}


*/



 
   
 
    
  
  
 
  
   


