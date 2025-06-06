// generated by diplomat-tool
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** 
 * Mode used in a rounding operation for signed numbers.
 *
 * See the [Rust documentation for `SignedRoundingMode`](https://docs.rs/fixed_decimal/latest/fixed_decimal/enum.SignedRoundingMode.html) for more information.
 */


export class DecimalSignedRoundingMode {
    

    static fromValue(value : DecimalSignedRoundingMode | string) : DecimalSignedRoundingMode; 

    get value() : string;

    get ffiValue() : number;

    static Expand : DecimalSignedRoundingMode;
    static Trunc : DecimalSignedRoundingMode;
    static HalfExpand : DecimalSignedRoundingMode;
    static HalfTrunc : DecimalSignedRoundingMode;
    static HalfEven : DecimalSignedRoundingMode;
    static Ceil : DecimalSignedRoundingMode;
    static Floor : DecimalSignedRoundingMode;
    static HalfCeil : DecimalSignedRoundingMode;
    static HalfFloor : DecimalSignedRoundingMode;

    constructor(value: DecimalSignedRoundingMode | string );
}