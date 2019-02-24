const searchBar = {
    data: function(){
        return {
            searched: ''
        }
    },

    methods: 
    {
        search: function(){
           this.$emit('click-search', this.searched) 
        }
    },

    template: `<form class="searchbar">
        <input type="text" class="search" v-model="searched"></input>
            <button v-on:click="search">
                <img src="https://image.flaticon.com/icons/svg/61/61088.svg" class="icon">
            </button>
        </form>`
}

Vue.component('search-bar',searchBar)