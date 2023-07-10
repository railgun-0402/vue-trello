<template>    
    <div>
        <header>
            my Trello
        </header>
        <main>
            <p class="info-line">All: 0 tasks</p>
            <div class="list-index">
                <list-class v-for="(item, index) in lists"
                :key="item.id"
                :title="item.title"
                :listIndex="index"
            />            
            <list-add />            
            </div>
        </main>
    </div>
</template>
    
<script>
import ListClass from './ListClass.vue'
import ListAdd from './ListAdd.vue'
import { mapState } from 'vuex'

export default {
    components: {
        ListAdd,
        ListClass
    },
    computed: {
        ...mapState([
            'lists'
        ]),
    },
}
</script>
