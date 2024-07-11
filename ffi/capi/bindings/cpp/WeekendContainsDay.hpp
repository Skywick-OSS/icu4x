#ifndef WeekendContainsDay_HPP
#define WeekendContainsDay_HPP

#include "WeekendContainsDay.d.hpp"

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <memory>
#include <optional>
#include "diplomat_runtime.hpp"


namespace capi {
    extern "C" {
    
    
    } // extern "C"
}


inline capi::WeekendContainsDay WeekendContainsDay::AsFFI() const {
  return capi::WeekendContainsDay {
    .monday = monday,
    .tuesday = tuesday,
    .wednesday = wednesday,
    .thursday = thursday,
    .friday = friday,
    .saturday = saturday,
    .sunday = sunday,
  };
}

inline WeekendContainsDay WeekendContainsDay::FromFFI(capi::WeekendContainsDay c_struct) {
  return WeekendContainsDay {
    .monday = c_struct.monday,
    .tuesday = c_struct.tuesday,
    .wednesday = c_struct.wednesday,
    .thursday = c_struct.thursday,
    .friday = c_struct.friday,
    .saturday = c_struct.saturday,
    .sunday = c_struct.sunday,
  };
}


#endif // WeekendContainsDay_HPP