const top_side = document.querySelector('.top-side');
const iconsun = document.querySelector('.icon-sun');
const input = document.querySelector('.entry-input');
const list = document.querySelector('.list');
const main = document.querySelector('main');


iconsun.addEventListener('click', () => {
    toWhite();
});

function toBlack() {
    const whites = document.querySelectorAll('.white');
    whites.forEach(el => {
        el.classList.remove('white');
        el.classList.add('black');
    });

    const body = document.querySelector('.white-body');
    body.classList.remove('white-body');
    body.classList.add('black-body');
    
    function icon(){
        const iconmoon = document.querySelector('.icon-moon');
        iconmoon.remove();

        const iconsun = document.createElement('img');
        iconsun.src = './img/icon-sun.svg';
        iconsun.classList.add("icon-sun");
        top_side.appendChild(iconsun);

        iconsun.addEventListener('click', () => {
            toWhite();
        })
    }
    icon();

    function changebackground() {
        const image = document.querySelector('.background');
        image.src = './img/bg-desktop-dark.jpg';
    }
    
    changebackground();


}

function toWhite() {
    const blacks = document.querySelectorAll('.black');
    blacks.forEach(el => {
        el.classList.remove('black');
        el.classList.add('white');
    });

    const body = document.querySelector('.black-body');
    body.classList.remove('black-body');
    body.classList.add('white-body');

    function icon() {
        const iconsun = document.querySelector('.icon-sun');
        iconsun.remove();

        const iconmoon = document.createElement('img');
        iconmoon.src = './img/icon-moon.svg';
        iconmoon.classList.add("icon-moon");
        top_side.appendChild(iconmoon);

        iconmoon.addEventListener('click', () => {
            toBlack();
        })
    }
    icon();

    function changebackground() {
        const image = document.querySelector('.background');
        image.src = './img/bg-desktop-light.jpg';
    }
    
    changebackground();
}

input.addEventListener('keypress', (e) =>{
    add(e);
})  

function add(e) {
    if (e.keyCode === 13){
        const item = document.createElement('div');
        item.classList.add('item', 'entry', 'no-selected');
        list.appendChild(item);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('entry-checkbox');
        item.appendChild(checkbox);

        const element_input = document.createElement('input');
        element_input.type = 'text';
        element_input.classList.add('entry-input');
        element_input.value = input.value;
        element_input.readOnly = true;
        item.appendChild(element_input);
        
        const clear_icon = document.createElement('img');
        clear_icon.src = './img/icon-cross.svg';
        clear_icon.classList.add('cross-icon');
        item.appendChild(clear_icon)

        const information = document.createElement('div');
        var items_left = document.createElement('p');
        const count_items = list.childElementCount;
        items_left.append(count_items+' Items Left');
        
        const list_status = document.createElement('ul');
        list_status.classList.add('status');
        const all_status = document.createElement('li');
        all_status.classList.add('all-status');
        all_status.append('All');
        const active_status = document.createElement('li');
        active_status.classList.add('active-status');
        active_status.append('Active');
        const completed_status = document.createElement('li');
        completed_status.classList.add('completed-status');
        completed_status.append('Completed');
        list_status.appendChild(all_status);
        list_status.appendChild(active_status);
        list_status.appendChild(completed_status);
        
        const clear = document.createElement('p');
        clear.append('Clear Completed');
        clear.classList.add('clear');

        information.classList.add('information');

        if(main.hasChildNodes()){
            main.removeChild(main.lastChild)
        }

        main.appendChild(information);
        information.appendChild(items_left);
        information.appendChild(list_status);
        information.appendChild(clear);
        
        if (document.querySelectorAll('.black').length >= 1){
            item.classList.add('black');
            element_input.classList.add('black');
            information.classList.add('black');
        } else{
            item.classList.add('white');
            input.classList.add('white');
            information.classList.add('white');
        }

        const all = document.querySelector('.all-status');
        all.addEventListener('click', () =>{
            changecolorstatus(all);
            const completed_task = document.querySelectorAll('.completed');
            completed_task.forEach( el => {
                el.style.display = 'flex'; 
            })

            const active_task = document.querySelectorAll('.active');
            active_task.forEach( el => {
                el.style.display = 'flex'; 
            })

            const no_selected = document.querySelectorAll('.no-selected');
            no_selected.forEach( el => {
                el.style.display = 'flex';
            })
        });

        const active = document.querySelector('.active-status');
        active.addEventListener('click', () =>{
            changecolorstatus(active);
            const completed_task = document.querySelectorAll('.completed');
            completed_task.forEach( el => {
                el.style.display = 'none'; 
            })

            const active_task = document.querySelectorAll('.active');
            active_task.forEach( el => {
                el.style.display = 'flex';
            })
            
            const no_selected = document.querySelectorAll('.no-selected');
            no_selected.forEach( el => {
                el.style.display = 'none';
            })
        });

        const completed = document.querySelector('.completed-status');
        completed.addEventListener('click', () =>{
            changecolorstatus(completed);
            const active_task = document.querySelectorAll('.active');
            active_task.forEach( el => {
                el.style.display = 'none';
            })

            const completed_task = document.querySelectorAll('.completed');
            completed_task.forEach( el => {
                el.style.display = 'flex'; 
            })

            const no_selected = document.querySelectorAll('.no-selected');
            no_selected.forEach( el => {
                el.style.display = 'none';
            })
        });

        document.querySelectorAll('.cross-icon').forEach( el => {
            el.addEventListener('click', () => {
                if (!el.parentElement.classList.contains('active')){
                    el.parentElement.classList.remove('no-selected');
                    el.parentElement.classList.add('completed') ;
                }
            });   
        });

        document.querySelectorAll('.entry-checkbox').forEach(el => {
            el.addEventListener('click', () =>{
                if (!el.parentElement.classList.contains('completed')){
                    el.parentElement.classList.remove('no-selected');
                    el.parentElement.classList.add('active');
                }
            });
        });

        const clearfunction = document.querySelector('.clear');
        clearfunction.addEventListener('click', () =>{
            clearCompleted();
        })
    }
    
}

function changecolorstatus(status){
    const all = document.querySelector('.all-status');
    const active = document.querySelector('.active-status');
    const completed = document.querySelector('.completed-status');

    if (status.classList.value === 'all-status') {
        active.style.removeProperty('color');
        completed.style.removeProperty('color');
    } else if (status.classList.value === 'active-status'){
        all.style.removeProperty('color');
        completed.style.removeProperty('color');
    }else if (status.classList.value === 'completed-status'){
        all.style.removeProperty('color');
        active.style.removeProperty('color');
    }
    status.style.color = 'blue';
}

function clearCompleted() {
    const completed_task = document.querySelectorAll('.completed');
    completed_task.forEach( el => {
        list.removeChild(el);
    })
}