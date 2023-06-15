export async function asyncRunSafe<T = any>(
  fn: Promise<T>
): Promise<[Error] | [null, T]> {
  try {
    return [null, await fn];
  } catch (e) {
    if (e instanceof Error) return [e];
    return [new Error('unknown error')];
  }
}
