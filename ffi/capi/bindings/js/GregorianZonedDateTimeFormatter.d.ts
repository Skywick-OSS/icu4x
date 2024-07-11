import { FFIError } from "./diplomat-runtime"
import { CustomTimeZone } from "./CustomTimeZone";
import { DataProvider } from "./DataProvider";
import { DateLength } from "./DateLength";
import { Error } from "./Error";
import { IsoDateTime } from "./IsoDateTime";
import { IsoTimeZoneOptions } from "./IsoTimeZoneOptions";
import { Locale } from "./Locale";
import { TimeLength } from "./TimeLength";

/**

 * An object capable of formatting a date time with time zone to a string.

 * See the {@link https://docs.rs/icu/latest/icu/datetime/struct.TypedZonedDateTimeFormatter.html Rust documentation for `TypedZonedDateTimeFormatter`} for more information.
 */
export class GregorianZonedDateTimeFormatter {

  /**

   * Creates a new {@link GregorianZonedDateTimeFormatter `GregorianZonedDateTimeFormatter`} from locale data.

   * This function has `date_length` and `time_length` arguments and uses default options for the time zone.

   * See the {@link https://docs.rs/icu/latest/icu/datetime/struct.TypedZonedDateTimeFormatter.html#method.try_new Rust documentation for `try_new`} for more information.
   * @throws {@link FFIError}<{@link Error}>
   */
  static create_with_lengths(provider: DataProvider, locale: Locale, date_length: DateLength, time_length: TimeLength): GregorianZonedDateTimeFormatter | never;

  /**

   * Creates a new {@link GregorianZonedDateTimeFormatter `GregorianZonedDateTimeFormatter`} from locale data.

   * This function has `date_length` and `time_length` arguments and uses an ISO-8601 style fallback for the time zone with the given configurations.

   * See the {@link https://docs.rs/icu/latest/icu/datetime/struct.TypedZonedDateTimeFormatter.html#method.try_new Rust documentation for `try_new`} for more information.
   * @throws {@link FFIError}<{@link Error}>
   */
  static create_with_lengths_and_iso_8601_time_zone_fallback(provider: DataProvider, locale: Locale, date_length: DateLength, time_length: TimeLength, zone_options: IsoTimeZoneOptions): GregorianZonedDateTimeFormatter | never;

  /**

   * Formats a {@link IsoDateTime `IsoDateTime`} and {@link CustomTimeZone `CustomTimeZone`} to a string.

   * See the {@link https://docs.rs/icu/latest/icu/datetime/struct.TypedZonedDateTimeFormatter.html#method.format Rust documentation for `format`} for more information.
   */
  format_iso_datetime_with_custom_time_zone(datetime: IsoDateTime, time_zone: CustomTimeZone): string;
}