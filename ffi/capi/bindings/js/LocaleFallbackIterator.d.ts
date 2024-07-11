import { Locale } from "./Locale";

/**

 * An iterator over the locale under fallback.

 * See the {@link https://docs.rs/icu/latest/icu/locale/fallback/struct.LocaleFallbackIterator.html Rust documentation for `LocaleFallbackIterator`} for more information.
 */
export class LocaleFallbackIterator {

  /**

   * Gets a snapshot of the current state of the locale.

   * See the {@link https://docs.rs/icu/latest/icu/locale/fallback/struct.LocaleFallbackIterator.html#method.get Rust documentation for `get`} for more information.
   */
  get(): Locale;

  /**

   * Performs one step of the fallback algorithm, mutating the locale.

   * See the {@link https://docs.rs/icu/latest/icu/locale/fallback/struct.LocaleFallbackIterator.html#method.step Rust documentation for `step`} for more information.
   */
  step(): void;
}