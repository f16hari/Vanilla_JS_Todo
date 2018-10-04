const trash = '<i class="fa fa-trash" aria-hidden="true"></i>';
const tick = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
const redo = '<i class="fa fa-repeat" aria-hidden="true"></i>';

const list1 = document.getElementById('notDone');
const list2 = document.getElementById('Done');
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
        updateList(list1 , value , tick);
        document.getElementById('newActivity').value='';
    }
}

function updateList(listid , text , icon)
{
    const item = document.createElement('li');

    const data = document.createElement('p');
    data.classList.add('Activity');
    data.innerHTML = text;

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const button1 = document.createElement('button');
    button1.classList.add('delete');
    button1.innerHTML = trash;

    button1.addEventListener('click',removeItem);

    const button2 = document.createElement('button');
    button2.classList.add('completed');
    button2.innerHTML = icon;
    if(listid.id == 'notDone')
        button2.addEventListener('click',function(){this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);updateList(list2 , text , redo);});
    if(listid.id == 'Done')
        button2.addEventListener('click',function(){this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);updateList(list1 , text , tick)});

    listid.insertBefore(item, listid.childNodes[0]);
    item.appendChild(data);
    item.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);
    check();
}

function removeItem()
{
    const Item = this.parentNode.parentNode;
    const parent = Item.parentNode;
    parent.removeChild(Item);
    check();
}