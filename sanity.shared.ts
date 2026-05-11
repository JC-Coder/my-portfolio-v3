export const SANITY_FALLBACK_CONFIG = {
  projectId: 'f4c27e9l',
  dataset: 'production',
  apiVersion: '2026-03-01',
}

export function getSanityConfig(
  env: Record<string, string | undefined> = {},
) {
  return {
    projectId: env.VITE_SANITY_PROJECT_ID || SANITY_FALLBACK_CONFIG.projectId,
    dataset: env.VITE_SANITY_DATASET || SANITY_FALLBACK_CONFIG.dataset,
    apiVersion: env.VITE_SANITY_API_VERSION || SANITY_FALLBACK_CONFIG.apiVersion,
  }
}
