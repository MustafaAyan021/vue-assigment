<script setup>
import Button from '@/components/button/Button.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
let props = defineProps({
    border:{
        type:Boolean,
        default:false,
    },
    HeaderLogo:{
        type:String,
    }
})
</script>

<template>
    <div id="heading" @click="sidebarStore.openHeaderEditingFunc();"
        :class="`group flex flex-col relative p-0.5 rounded-md w-full cursor-pointer text-center mb-5 ${props.border ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <header
            class=" w-full p-2 px-8 flex justify-between items-center bg-gray-50 text-black border rounded-lg border-gray-300">
            <img :src="HeaderLogo" class="w-10 rounded-full">
            <Button variant="outline" classes="px-2 py-1">Button</Button>
        </header>
        <p
            :class="` ${props.border ? 'visible' : 'invisible'} group-hover:visible text-[11px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -bottom-2 -left-[2px]`">
            Header</p>
    </div>
</template>