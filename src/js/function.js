render();
function render()
{
    if(listData.notDone.length == 0 && listData.Done.length == 0) return

    else{
        for(let i = 0 ; i < listData.notDone.length ; i++)
        {
            updateList(list1 , listData.notDone[i] , tick);
        }
        for(let j = 0 ; j < listData.Done.length ; j++)
        {
            updateList(list2 , listData.Done[j] , tick);
        }
    }
}

function updateList(listid , text , icon)
{
    const item = document.createElement('li');

    const data = document.createElement('p');
    data.classList.add('Activity');
    data.id = 'Activity';
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
        button2.addEventListener('click',function(){
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            listData.Done.push(text);
            listData.notDone.splice(listData.notDone.indexOf(text), 1);
            jsonUpdate();
            updateList(list2 , text , tick);
        });
    if(listid.id == 'Done')
        button2.addEventListener('click',function(){
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            listData.notDone.push(text);
            listData.Done.splice(listData.Done.indexOf(text), 1);
            jsonUpdate();
            updateList(list1 , text , tick);
        });

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
    const p = parent.id;
    const text = Item.childNodes[0].innerText;
    (p =='notDone')? listData.notDone.splice(listData.notDone.indexOf(text), 1) :listData.Done.splice(listData.Done.indexOf(text), 1); 
    jsonUpdate();
    parent.removeChild(Item);
    check();
}

function check()
{
    let count=document.getElementById('notDone').childElementCount;
    let count1 = document.getElementById('Done').childElementCount;
    
    if(count==0){ndheading.innerHTML='';}
    else{ndheading.innerHTML=''; ndheading.appendChild(document.createTextNode('Activity Pending'));}
    
    if(count1==0){dheading.innerHTML='';}
    else{dheading.innerHTML='';dheading.appendChild(document.createTextNode('Completed Activity'));}
}

function jsonUpdate()
{
    console.log(listData);
    localStorage.setItem('ActivityList',JSON.stringify(listData));
}
