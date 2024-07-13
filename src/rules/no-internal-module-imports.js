import { name, version } from '../../package.json'

export default {
    meta: {
        name,
        version,
        type: 'problem',
        docs: {
            description: 'Disallow imports inside modules except from index.js',
            category: 'Best Practices',
            recommended: true
        },
        messages: {
            noInternalImports: 'Internal module imports are not allowed. Import from the module index instead.'
        },
        schema: []
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                const value = node.source.value;
                if (value.startsWith('@/module/') && !value.match(/^@\/module\/[^/]+\/?$/)) {
                    context.report({
                        node,
                        messageId: 'noInternalImports'
                    });
                }
            }
        };
    }
}
