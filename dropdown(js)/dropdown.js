//Task create a plugin:
// Create Dropdown class, same as in HTML, but without using <select> tag.

class Dropdown {
    constructor(selector, options) { //2 arguments: #1 element where dropdown is located, #2 elements to insert into dropdown list
        this.$el = document.querySelector(selector); //$el is private variable, identifying selector
        this.items = options.items;

        this.$el.querySelector(".dropdown__label").textContent = this.items[0].label;
        
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            } else if (event.target.tagName.toLowerCase() === 'li'){
                this.select(event.target.dataset.id)
            }
        })

        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}<li>`
        }).join(' ')

        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    select(id) {
        const item = this.items.find(i => i.id === id);
        this.$el.querySelector('.dropdown__label').textContent = item.label;
        this.close();
    }

    open() {
        this.$el.classList.add("open");
    }

    close() {
        this.$el.classList.remove("open");
    }
}

const dropdown = new Dropdown('#dropdown', {
    items: [
            {label: 'Edmonton', id: 'edm'},
            {label: 'Calgary', id: 'cgy'},
            {label: 'Vancouver', id: 'vnc'},
            {label: 'Toronto', id: 'trn'}                
    ]
})
 
