<script setup>
    import Tag from './Tag.vue';
    import { ref } from 'vue';
    import recipes from '../../../public/recipes.json' // imports the json object from recipes.json as recipes

    defineProps(["name", "color", "active"])
    // const emit = defineEmits(active_tags)

    // get an array of all tags used in recipes.json
    function getTags() {
        let tags = []
        for (const id in recipes) {
            for (const tag of recipes[id].tags) {
                if (!tags.includes(tag)) {
                    tags.push(tag)
                }
            }
        }
        // for every tag, capitalize the first letter and return a new array
        return tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)) 
    }
    
    const tags = getTags();
    const active_tags = ref([]);
    const inactive_tags = ref([...tags.filter(tag => !active_tags.value.includes(tag))])
    
    const addTag = (name) => {
        // remove tag from inactive tags
        inactive_tags.value = [...inactive_tags.value.filter(tag => tag !== name)]
        // add tag to active_tags at the end
        active_tags.value.push(name)
    }

    const removeTag = (name) => {
        // remove tag from active tags
        active_tags.value = [...active_tags.value.filter(tag => tag !== name)]
        // add tag to inactive_tags at the end
        inactive_tags.value.push(name)
    }

</script>

<template>
    <div id="tag-container">
        Tags:
        <!-- Active tags -->
        <Tag v-for="tag in active_tags" 
        :key="tag" 
        :name="tag"
        color="#5DEABB"
        :active="true"
        :small="false"
        v-on:removeTag="removeTag"/>

        <!-- Inactive tags -->
        <Tag v-for="tag in inactive_tags" 
        :key="tag" 
        :name="tag"
        color="lightgray"
        :active="false"
        :small="false"
        v-on:addTag="addTag"/>
        <Tag name="+" />
    </div>
</template>

<style scoped>
#tag-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1176px;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>