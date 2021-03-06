const errorSchema = require('../common/error-schema');
const notFoundSchema = require('../common/not-found-schema');

module.exports = {
  getLabyrinth: {
    description: 'Get Labyrinth with id',
    tags: ['API'],
    summary: 'Obtain Labyrinth with id',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'labyrinth id'
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          playfield: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                x: { type: 'number' },
                y: { type: 'number' },
                type: {
                  type: 'string',
                  enum: ['blocked', 'empty']
                }
              }
            }
          },
          start: {
            type: 'object',
            properties: {
              x: { type: 'number' },
              y: { type: 'number' }
            }
          },
          end: {
            type: 'object',
            properties: {
              x: { type: 'number' },
              y: { type: 'number' }
            }
          }
        }
      },
      400: notFoundSchema,
      500: errorSchema
    },
    security: [
      {
        basicAuth: []
      }
    ]
  },

  getAllLabyrinths: {
    description: 'Get all labyrinths',
    tags: ['API'],
    summary: 'Obtain all labyrinths ids',
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          type: 'string'
        }
      },
      400: notFoundSchema,
      500: errorSchema
    },
    security: [
      {
        basicAuth: []
      }
    ]
  },

  createLabyrinth: {
    description: 'create new labyrinth',
    tags: ['API'],
    summary: 'create new labyrinth and get its id',
    body: {
      type: 'object',
      required: ['playfield', 'start', 'end'],
      properties: {
        playfield: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              x: { type: 'number' },
              y: { type: 'number' },
              type: {
                type: 'string',
                enum: ['blocked', 'empty']
              }
            }
          }
        },
        start: {
          type: 'object',
          properties: {
            x: { type: 'number' },
            y: { type: 'number' }
          }
        },
        end: {
          type: 'object',
          properties: {
            x: { type: 'number' },
            y: { type: 'number' }
          }
        }
      }
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'string' }
        }
      },
      400: notFoundSchema,
      500: errorSchema
    },
    security: [
      {
        basicAuth: []
      }
    ]
  },

  updateLabyrinthTerminal: {
    description: 'update Labyrinth terminal point',
    tags: ['API'],
    summary: "update Labyrinth's terminal point start/end",
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'labyrinth id'
        },
        x: {
          type: 'number',
          description: "point's x"
        },
        y: {
          type: 'number',
          description: "point's y"
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          playfield: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                x: { type: 'number' },
                y: { type: 'number' },
                type: {
                  type: 'string',
                  enum: ['blocked', 'empty']
                }
              }
            }
          },
          start: {
            type: 'object',
            properties: {
              x: { type: 'number' },
              y: { type: 'number' }
            }
          },
          end: {
            type: 'object',
            properties: {
              x: { type: 'number' },
              y: { type: 'number' }
            }
          }
        }
      },
      400: notFoundSchema,
      500: errorSchema
    },
    security: [
      {
        basicAuth: []
      }
    ]
  }
};
