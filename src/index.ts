import noInternalModuleImports from './rules/no-internal-module-imports'
import enforceAliasImports from './rules/enforce-alias-imports'

export const rules = {
    'no-internal-module-imports': noInternalModuleImports,
    'enforce-alias-imports': enforceAliasImports,
}

export default {}
