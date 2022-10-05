<script lang="ts" setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const open = ref(true)

const props = defineProps<IProps>()
</script>

<script lang="ts">
interface IProps {
  title: string
  description: string
}
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-0 sidebar" @close="open = false">
      <div class="fixed inset-0 overflow-hidden"></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <TransitionChild 
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-lg">
                <form class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1">

                    <!-- HEADER -->
                    <div class="bg-gray-50 px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between space-x-3">
                        <div class="space-y-1">
                          <DialogTitle class="text-lg font-medium text-gray-900">{{ props.title }}</DialogTitle>
                          <p class="text-sm text-gray-500">
                            {{ props.description }}
                          </p>
                        </div>
                        <div class="flex h-7 items-center">
                          <button type="button" class="text-gray-400 hover:text-gray-500" @click="open = false">
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- END HEADER -->

                    <!-- CONTENT -->
                    <div class="space-y-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                      <slot></slot>
                    </div>
                    <!-- END CONTENT -->

                    <!-- ACTIONS -->
                    <div class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6 absolute bottom-0 max-w-lg w-10/12">
                      <div class="flex justify-end space-x-3">
                        <slot name="buttons"></slot>
                      </div>
                    </div>
                    <!-- END ACTIONS -->
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

