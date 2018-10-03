const trash = '<i class="fa fa-trash" aria-hidden="true"></i>';
const tick = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
const redo = '<i class="fa fa-repeat" aria-hidden="true"></i>';

const ndheading = document.getElementById('ndheading');
const dheading = document.getElementById('dheading');

const check = () =>
{
    let count=document.getElementById('notDone').childElementCount;
    let count1 = document.getElementById('Done').childElementCount;
    
    if(count==0){ndheading.innerHTML='';}
    else{ndheading.innerHTML=''; ndheading.appendChild(document.createTextNode('Activity Pending'));}
    
    if(count1==0){dheading.innerHTML='';}
    else{dheading.innerHTML='';dheading.appendChild(document.createTextNode('Completed Activity'));}
}


document.getElementById('add').onclick=function print(){

    const value = document.getElementById('newActivity').value;
    
    if(value){ 
        addActivity(value);
        document.getElementById('newActivity').value='';

    }
}

const removeItem = () =>
{
    var Item = this.parentNode.parentNode;
    var parent = Item.parentNode;
    parent.removeChild(Item);
    check();
}

function addActivity(text)
{
    var list = document.getElementById('notDone');

    var item = document.createElement('li');

    var data = document.createElement('p');
    data.classList.add('Activity');
    data.innerHTML = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var button1 = document.createElement('button');
    button1.classList.add('delete');
    button1.innerHTML = trash;

    button1.addEventListener('click',removeItem);

    var button2 = document.createElement('button');
    button2.classList.add('completed');
    button2.innerHTML = tick;

    button2.addEventListener('click',adCompleted);

    list.insertBefore(item, list.childNodes[0]);
    item.appendChild(data);
    item.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);
    check();


}
function adCompleted()
{
    var par= this.parentNode.parentNode;
    var compData = par.querySelector('p').innerHTML;

    par.parentNode.removeChild(par);
    check();

    var list = document.getElementById('Done');
    var item = document.createElement('li');

    var data = document.createElement('p');
    data.classList.add('Activity');
    data.innerHTML = compData;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var button1 = document.createElement('button');
    button1.classList.add('delete');
    button1.innerHTML = trash;

    button1.addEventListener('click',removeItem);

    var button2 = document.createElement('button');
    button2.classList.add('redo');
    button2.innerHTML = redo;

    button2.addEventListener('click',reDo);

    list.insertBefore(item, list.childNodes[0]);
    item.appendChild(data);
    item.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);
    check();


}



function reDo()
{

    var par= this.parentNode.parentNode;
    var compData = par.querySelector('p').innerHTML;

    par.parentNode.removeChild(par);

    var list = document.getElementById('notDone');
    var item = document.createElement('li');

    var data = document.createElement('p');
    data.classList.add('Activity');
    data.innerHTML = compData;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var button1 = document.createElement('button');
    button1.classList.add('delete');
    button1.innerHTML = trash;

    button1.addEventListener('click',removeItem);

    var button2 = document.createElement('button');
    button2.classList.add('completed');
    button2.innerHTML = tick;

    button2.addEventListener('click',adCompleted);

    list.insertBefore(item, list.childNodes[0]);
    item.appendChild(data);
    item.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2); 

    check();


}