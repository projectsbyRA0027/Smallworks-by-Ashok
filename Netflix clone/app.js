const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitems = document.querySelectorAll('.tab-content-item');

//select tab content item

function selectItem(e){
    removeBorder();
    removeShow();
    this.classlist.add('tab-border');

    const tabcontentitem = document.querySelector(`${this.id}-content`);
    tabcontentitem.classList.add('show')
}

function removeBorder(){
    tabitems.forEach(item => {
        item.classList.remove('tab-border')
    });
}

function removeShow(){
    tabcontentitems.forEach(item => {
        item.classList.remove('show')
    });
}

tabitems.forEach(item => {
    item.addEventListener('click',selectItem);
});