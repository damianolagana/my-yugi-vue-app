import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    characters: [],
    selectOptions: [
        "Price",
        "Type",
        "Archetype"
    ]
});