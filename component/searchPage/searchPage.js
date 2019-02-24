const searchPage = {
    data: function(){
        return {
            searchResults: []
        }
    },

    methods: {
        charger: function(searchTerm = ''){
            axios.get('http://localhost:3333/api/treejsmodels?text='+searchTerm)
            .then (results => this.searchResults = results.data);        
        },
        doSearch: function(searchInput){
            this.charger(searchInput)
        },

        deleteBlock: function(id){
            axios.delete('http://localhost:3333/api/treejsmodels/'+id)
            .then(() => this.charger());
        
        }
    },

    created: function(){
        this.charger();
    },

    template: `<div><h2>searchPage</h2>
    <search-bar v-on:click-search="doSearch"></search-bar>
    <div v-if="searchResults.length===0" class="alert alert-info" role="alert">Oops ! Nous n'avons pas trouvé de correspondance !</div>
    <template v-else>
    <div v-for="block in searchResults">
        <result-block v-bind:block="block" v-on:delete-clicked="deleteBlock"></result-block>
    </div>
    </template>
    </div>`
}

Vue.component('search-page',searchPage) 