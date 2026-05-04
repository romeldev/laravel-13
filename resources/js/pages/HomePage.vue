<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 gap-4">
    <h1 class="text-4xl font-bold text-slate-900">¡Hola desde Vue 3!</h1>
    <p class="text-slate-600 mb-4">Laravel 13 + Vue 3 + Pinia + Vue Router + shadcn-vue</p>
    <div class="flex gap-4">
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>