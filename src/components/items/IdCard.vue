<script setup>
defineProps({
    nim: String,
    userActive: Boolean,
    name: String,
    birthday: Date,
    username: String,
    bio: String,
})

const month = ["January", "February", "March", "April", "June", "Juli", "August", "September", "October", "November", "December"];
</script>

<template>
    <div
        class="aspect-[5.4/3] bg-linear-to-r from-card-from to-card-to w-[25.5rem] rounded-sm flex flex-col justify-between py-5.5 px-5 text-xs self-center text-white">
        <div class="flex flex-row gap-2">
            <div class="aspect-[3/3.5] w-full max-w-[27%] max-h-[7rem] bg-white p-1 pb-2">
                <img src="../../assets/avatar.jpg" alt="ava" class="aspect-square object-contain overflow-hidden">
            </div>

            <div class="w-full max-w-[16rem] py-1.5">
                <div class="flex flex-row justify-between text-xs font-light">
                    <span class="">{{ nim }}</span>
                    <span class="uppercase">{{ userActive ? "active" : 'inactive' }}</span>
                </div>
                <h1
                    class="w-full truncate max-w-full max-h-[1.6rem] text-2xl tracking-tight uppercase text-justify -mt-1">
                    {{name.length > 17 ? name.split(" ").map((e, i) => {
                        if (i === 1 && e.length > 7) return e.charAt(0).toUpperCase() + ". ";

                        if (i < 2) return e; return e.charAt(0).toUpperCase() + ". ";
                    }).join(" ") : name}}</h1>
            <div class=" flex flex-row justify-between mt-0.5 text-xs">
                        <span class="uppercase">{{ month[birthday.getMonth() - 1] }}</span>
                        <span>{{ birthday.getDate() }}</span>
            </div>
            <h4 class="text-[0.7rem] mt-2">known as &quot;<span class="text-rose-700">{{ username }}</span>&quot;</h4>

            <p class="font-extralight text-xs mt-2 min-h-[3rem] max-h-[3rem] flex justify-center items-center">{{ bio }}
            </p>
        </div>
    </div>

    <div class="flex flex-row justify-between">
        <div class="text-[13px] flex justify-center items-center relative">
            <img src="../../assets/card-ac.svg" alt="ac" class="max-h-[1.6rem] z-[1]">
            <span class="absolute z-[0]">2024</span>
        </div>
        <img src="../../assets/arrow-square.svg" alt="arrow" class="invert aspect-square max-w-[1.2rem] right-1">
    </div>
    </div>
</template>