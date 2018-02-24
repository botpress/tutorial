module.exports = {
  id: 'text',
  title: 'Text Message',
  renderer: '#text',

  jsonSchema: {
    title: 'A regular Text message',
    description: 'A regular Text message',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'Message'
      },
      variations: {
        type: 'array',
        title: 'Alternates (optional)',
        items: {
          type: 'string',
          default: ''
        }
      },
      typing: {
        type: 'boolean',
        title: 'Show typing indicators',
        default: true
      }
    }
  },

  uiSchema: {
    variations: {
      'ui:options': {
        orderable: false
      }
    }
  },

  computePreviewText: formData => 'Text: ' + formData.text,
  computeMetadata: null
}
