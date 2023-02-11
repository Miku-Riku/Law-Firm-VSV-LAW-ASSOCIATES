
const contact_items = document.querySelectorAll(".contact_item");

contact_items.forEach((item) => {
  const title = item.querySelector('.contact_title');

  title.addEventListener('click', () => {
    const openItem = document.querySelector('.active');
    console.log(2);
    if(openItem != null) {
      console.log(5);
      if(openItem !== item){
        console.log(7);
        toggle(openItem);
      }
    }
    toggle(item);

  })
})

const toggle = (item) => {
  const descr = item.querySelector('.contact_descr');
  if(item.classList.contains('active')){
    item.classList.remove('active');
    descr.style.height = '0';
  }else {
    item.classList.add('active');
    descr.style.height = descr.scrollHeight + 'px';
  }
};
