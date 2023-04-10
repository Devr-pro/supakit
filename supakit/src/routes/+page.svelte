<script lang="ts">
    export let data;
    //Start working with supabase client
    let supabaseClient = data.supabase;
</script>
<main class="flex justify-center items-center w-full h-full">

<div class="max-w-[80%] min-w-[50%]">
    <h1 class=" text-3xl text-sky-600">
        SupaKit starter template, with configured tailwindcss,supabase an other
        tools! just run- <pre
            class="text-gray-900 rounded-lg bg-gray-600 inline-block ">npm/pnpm install && npm/pnpm dev</pre>
         , Happy coding!
    </h1>
</div>
</main>


<style>
    h1 {
        font-family: "Abel", sans-serif;
    }
</style>
