module.exports = {
    'type': 'object',
    'properties': {
        'recepies': {
            'type': 'array',
            'minItems': 3,
            'maxItems': 5,
            'items': {
                'type': 'object',
                'properties': {                    
                    'id': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 1
                    }, 
                    'recepeName': {
                        'type': 'string'
                    },
                    'ingredients': {
                        'type': 'array',
                        'items': {
                            'type': 'object',
                            'properties': {
                                'ingredientName': {
                                    'type': 'string'
                                }
                            },
                            required: ['ingredientName']
                        }
                    }                    
                },
                required: ['id', 'recepeName', 'ingredients']
            }
        }        
    },
    required: ['recepies']
};