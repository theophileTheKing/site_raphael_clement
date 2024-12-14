<script>
  import DarkToggle from "./DarkToggle.svelte";
  import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { BarsOutline } from 'flowbite-svelte-icons';
</script>

<!-- Desktop navbar -->
<div class="w-full p-3 items-center color hidden sm:flex fixed justify-between border-b-2 border-bg_dark-50 dark:border-bg_light-50">
  <a href="/" class="text-xl">Atelier</a>
  <div class="flex items-center gap-5">
    <a href="/" class="hover">Ordinateur</a>
    <a href="/" class="hover">Applications</a>
    <a href="/" class="hover">Internet</a>
    <a href="/" class="hover">Web</a>
    <DarkToggle />
  </div>
</div>

<!-- Mobile navbar -->
<div class="w-full p-2 items-center color flex fixed sm:hidden justify-between">
  <a href="/" class="text-xl">Atelier</a>
  
  <div class="flex items-center gap-3">
    <Button class="color"><BarsOutline class="w-6 h-6 ms-2 color" /></Button>
    <Dropdown>
      <DropdownItem>
        <a href="/">Ordinateur</a>
      </DropdownItem>
      <DropdownItem>
        <a href="/">Applications</a>
      </DropdownItem>
      <DropdownItem>
        <a href="/">Internet</a>
      </DropdownItem>
      <DropdownItem>
        <a href="/">Web</a>
      </DropdownItem>
    </Dropdown>
    
    <DarkToggle />
  </div>
</div>
