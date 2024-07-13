import { name, version } from '../../package.json'

export default {
    meta: {
        name,
        version,
        type: 'problem',
        docs: {
            description: 'Require all imports to start with alias',
            category: 'Best Practices',
            recommended: true
        },
        messages: {
            aliasOnly: 'All imports must start with an alias (@/)'
        },
        schema: []
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                const value = node.source.value;
                if (!value.startsWith('@/')) {
                    context.report({
                        node,
                        messageId: 'aliasOnly'
                    });
                }
            }
        };
    }
}
