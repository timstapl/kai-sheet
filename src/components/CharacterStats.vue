<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
import { useNotificationsStore } from '@/stores/notifications'
import { rolld10 } from '@/utilities/roll'

type Stat = {
  name: string
  value: number
}

const CharacterStore = useCharacterStore()
const NotificationsStore = useNotificationsStore()

const stats: Stat[] = [
  { name: 'Combat Skill', value: CharacterStore.combatSkill },
  { name: 'Endurance Points', value: CharacterStore.endurancePoints },
]

const roll = () : void => {
  NotificationsStore.addNotification({
    id: Symbol(),
    type: 'roll',
    message: `You Rolled ${ rolld10() }`,
  })
}
</script>

<template>
  <h2 class="text-xl font-semibold text-gray-900 mt-5">Stats</h2>
  <div class="character-stats">
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div v-for="item in stats" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.value === 0 ? '--' : item.value }}
        </dd>
      </div>
      <!-- Roll d10 button -->
      <div @click="roll" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">Roll d10</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          <svg class="svg-icon"
            style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.183518 510.575353l260.757627-54.499504 135.558766-424.996132c5.899946-18.399833-16.799847-31.83971-28.899737-17.079844L6.023665 481.735615c-10.479905 12.759884 0.399996 32.139707 16.159853 28.839738z m718.853457-54.479504L1001.794602 510.595353c15.779856 3.29997 26.639758-16.099853 16.179853-28.859738L634.377946 13.979873c-12.07989-14.739866-34.779683-1.319988-28.919737 17.099844l135.578766 425.016132z m-212.978061-443.995959c-5.139953-16.119853-26.979754-16.119853-32.119708 0l-146.798664 460.215811L511.99906 585.734669l162.858518-113.438968-146.798664-460.195811z m482.31561 572.43479l-288.117378-60.219452-176.398394 122.898881v359.056732c0 15.179862 17.099844 23.319788 28.039745 13.339879l444.255956-404.396319c10.619903-9.639912 5.999945-27.799747-7.779929-30.679721z m-996.750928 0c-13.779875 2.879974-18.399833 21.039809-7.799929 30.679721L450.099623 1019.59072c10.9599 9.959909 28.039745 1.839983 28.039745-13.339878V647.214109l-176.398394-122.898881L13.623596 584.53468z" />
          </svg>
        </dd>
      </div>
    </dl>
  </div>
</template>

