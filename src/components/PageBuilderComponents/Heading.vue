<script setup>
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';

const sidebarStore = usePageBuilderSidebarStore();

const props = defineProps({
    border: {
        type: Boolean,
        default: false,
    },
    heading: {
        type: String,
        default: "Heading Here..."
    }
});
</script>

<template>
    <div @click="sidebarStore.openHeadingEditingFunc()"
        :class="`group flex flex-col relative p-1 rounded-md w-full cursor-pointer ${border ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <h1 class="text-wrap break-word text-black font-semibold text-3xl text-center">
            {{ heading }}
        </h1>
        <p
            :class="`${border ? 'visible' : 'invisible'} group-hover:visible text-[11px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -top-2 -left-[2px]`">
            Heading
        </p>
    </div>
</template>
