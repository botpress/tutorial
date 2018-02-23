const _ = require('lodash')

module.exports = {
  text: data => {
    const text = _.sample([data.text, ...(data.variations || [])])
    return { text: text, typing: !!data.typing }
  },

  'trivia-question': data => ({
    text: data.question,
    quick_replies: data.choices.map(choice => `<${choice.payload}> ${choice.text}`),
    typing: data.typing || '2s'
  })
}
