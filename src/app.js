const inputText = document.querySelector('#inputText');
const addBtn = document.querySelector('#addBtn');
const doneCount = document.querySelector('#doneCount');
const listCount = document.querySelector('#listCount');
const tasks = document.querySelector('#tasks');

const createFun = (text) => {
    const taskList = document.createElement('div');
    taskList.innerHTML = `<div class="listTime flex-grow  mb-2 bg-[#A1C2F1]  py-1 px-2  rounded-lg items-center flex justify-between">
    <div class="flex gap-2">
    <input type="checkbox" name="" class="doneList w-[19px]" id="taskname">
    <label class="labelForDoneList" for="taskname">${text}</label>
    </div>
    <div class="flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="trash w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          
          
        </div>
        </div>`;

    const trashBtn = taskList.querySelector('.trash');
    const doneList = taskList.querySelector('.doneList');
    const labelForDoneList = taskList.querySelector('.labelForDoneList');
    const listColor = taskList.querySelector('.listTime');

    trashBtn.addEventListener('click', () => {
        if(doneList.checked && confirm('Are You Sure?')){
            taskList.remove();
            doneCount.innerText--;
            listCount.innerText = timesOfList();
        }
        else if(confirm('Are You Sure?')) {
            taskList.remove();
            listCount.innerText = timesOfList();
        }
    } )

    doneList.addEventListener('change', () => {
        if(doneList.checked) {
            labelForDoneList.classList.add('line-through');
            listColor.classList.replace('bg-[#A1C2F1]','bg-[#BEADFA]')
            doneCount.innerText++;
        }
        else{
            labelForDoneList.classList.remove('line-through');
            listColor.classList.replace('bg-[#BEADFA]','bg-[#A1C2F1]')
            doneCount.innerText--;
        }
    })

    return taskList;

}

const addBtnFun = () => {
    if(inputText.value) {
        tasks.append(createFun(inputText.value));
    inputText.value = null;
    listCount.innerText = timesOfList();
    }
}


addBtn.addEventListener('click',addBtnFun)

const timesOfList = () => {
    total = document.querySelectorAll('.listTime').length;
    return total;
    
}



