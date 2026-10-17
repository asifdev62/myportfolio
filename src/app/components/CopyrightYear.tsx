/**
 * Renders the copyright year. `cacheComponents` blocks `new Date()` unless the
 * value is explicitly cached, so the year is computed once and reused until the
 * next build/revalidation.
 */
export default async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
