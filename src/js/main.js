const trash = '<i class="fa fa-trash" aria-hidden="true"></i>';
const tick = '<i class="fa fa-check-circle" aria-hidden="true"></i>';

const list1 = document.getElementById('notDone');
const list2 = document.getElementById('Done');
const ndheading = document.getElementById('ndheading');
const dheading = document.getElementById('dheading');
const Add = document.getElementById('newActivity');

Add.addEventListener("change",function addActivity(){
    const value = document.getElementById('newActivity').value;
    
    if(value){ 
        listData.notDone.push(value);
        jsonUpdate();
        updateList(list1 , value , tick);
        document.getElementById('newActivity').value='';
    }

});

const listData = (localStorage.getItem('ActivityList'))? JSON.parse(localStorage.getItem('ActivityList')) : {
    notDone:[],
    Done:[]
}

document.getElementById('add').onclick=function print(){

    const value = document.getElementById('newActivity').value;
    
    if(value){ 
        listData.notDone.push(value);
        jsonUpdate();
        updateList(list1 , value , tick);
        document.getElementById('newActivity').value='';
    }
}

