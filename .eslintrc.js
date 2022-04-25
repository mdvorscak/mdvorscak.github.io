// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/no-unused-vars': 'error',
    // This rule enforces multi-word component names (see https://eslint.vuejs.org/rules/multi-word-component-names.html)
    // This would mean that Projects/Resume would error
    // For now, I'll ignore this, if standard html tags come for these items I'll revist this
    'vue/multi-word-component-names': 'off'
  }
}
