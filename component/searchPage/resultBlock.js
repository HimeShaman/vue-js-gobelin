const resultBlock = {
    props: {
        block: Object
    },

    data: function(){
        return {visibleOptions: false}
    },

    methods: {

        sendId: function(){
            this.$emit('delete-clicked', this.block.id)
        }
    },


  template: `
  <div v-on:mouseover="visibleOptions = true" v-on:mouseleave="visibleOptions = false">
    <div class="card cardH">
        <div class="row">
            <div class="description col-10">
                <h3>{{block.title}}</h3>
                <p>
            {{block.description}}
            </p>
            <span class="hashtag">{{block.tag}}</span>
            </div>
            <div class="col-2">
                <img class="imgModel" v-bind:src="block.img_url" />
            </div>
    </div>

        <div class="row options"  v-if="visibleOptions">
        <a href="#"><img
            class="icon"
            src="https://image.flaticon.com/icons/svg/1159/1159876.svg"/></a>
        <a href="#" v-on:click="sendId"><img
            class="icon"
            src="https://image.flaticon.com/icons/svg/126/126468.svg"/></a>
        </div>
        </div>
  </div>`
};

Vue.component('result-block',resultBlock)
