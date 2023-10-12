import { defineFormKitConfig } from '@formkit/vue'
import { createFloatingLabelsPlugin, createAutoAnimatePlugin } from '@formkit/addons'
import { genesisIcons } from '@formkit/icons'
import { generateClasses } from '@formkit/themes'
import tailwindTheme from '~/configs/formkit/tailwind-theme'

export default defineFormKitConfig({
  plugins: [
    createAutoAnimatePlugin(),
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(tailwindTheme),
  },
})
