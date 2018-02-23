module.exports = {
  text: data => {
    return { text: data.text, typing: !!data.typing }
  },

  'trivia-question': data => ({
    text: data.question,
    quick_replies: data.choices.map(choice => `<${choice.payload}> ${choice.text}`),
    typing: data.typing || '2s'
  })
}
