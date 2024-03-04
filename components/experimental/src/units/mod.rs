// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

pub mod converter;
pub mod converter_factory;
pub mod measureunit;
pub mod power;
pub mod provider;
pub mod si_prefix;

/// Represents the possible errors that can occur during the measurement unit operations.
#[derive(Debug)]
pub enum ConversionError {
    /// The unit is not valid.
    /// This can happen if the unit id is not following the CLDR specification.
    /// For example, `meter` is a valid unit id, but `metre` is not.
    InvalidUnit,
}