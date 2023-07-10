<template>
    <form :class="classList" @submit.prevent="addList">
        <input v-model="title"
            type="text"
            class="text-input"
            placeholder="Add new list"
            @focusin="startEditing"
            @focusout="finishEditing"
        >
        <button type="submit" class="add-button"
        v-if="isEditing || titleExists">Add</button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            title: '',
            isEditing: false,
        }
    },
    // dataの状態を監視
    computed: {
        classList() {
            const classList = ['addlist']
            console.log(classList)
            if (this.isEditing) {
                classList.push('active')
            }
            if (this.titleExists) {
                classList.push('addable')
            }
            return classList
        },
        titleExists() {
            return this.title.length > 0
        },
    },
    methods: {
        addList: function() {
            this.$store.dispatch('addlist', {title: this.title})
            this.title = ''
        },
        startEditing: function() {
            this.isEditing = true
        },
        finishEditing: function() {
            this.isEditing = false
        },
    },
}
</script>
