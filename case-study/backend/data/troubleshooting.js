// Troubleshooting guides for common appliance issues
const troubleshooting = {
  "refrigerator_ice_maker": `**Ice Maker Not Working - Troubleshooting Steps:**

1. **Check Water Supply**
   - Verify water line is connected and turned on
   - Check for kinks in water line
   - Ensure water pressure is adequate (20-120 PSI)

2. **Inspect Ice Maker Components**
   - Look for ice blockages in the ice maker mold
   - Check if the arm/sensor is stuck in the "off" position
   - Verify the water inlet valve is functioning (Part: PS11747979)

3. **Temperature Check**
   - Freezer should be at 0-5°F for proper ice production
   - If too warm, check thermostat (Part: PS11741111)

4. **Test the Ice Maker**
   - Manually cycle the ice maker to test
   - Listen for water filling sounds
   - Wait 24 hours for first batch after installation

**Common Replacement Parts:**
- Ice Maker Assembly (PS11752778) - Full replacement
- Ice Maker Module (PS2370946) - Control module only
- Water Inlet Valve (PS11747979) - If no water flow

**When to Call a Professional:**
- No power to ice maker after checking connections
- Complex electrical issues
- Sealed system problems`,

  "refrigerator_not_cooling": `**Refrigerator Not Cooling - Troubleshooting Steps:**

1. **Check Basic Settings**
   - Verify temperature control is not set to "OFF"
   - Ensure vents are not blocked by food items
   - Check door seal for proper closure (Part: PS11739785)

2. **Inspect Condenser Coils**
   - Clean dirty condenser coils (back or bottom of unit)
   - Use vacuum or coil brush
   - Dirty coils reduce cooling efficiency

3. **Check Evaporator Fan**
   - Listen for fan running in freezer
   - If not running, may need replacement (Part: PS11744533)
   - Fan circulates cold air throughout unit

4. **Test Thermostat**
   - Verify temperature control clicks when turned
   - If no click, thermostat may be faulty (Part: PS11741111)

5. **Inspect Defrost System**
   - Check for frost buildup on evaporator coils
   - If excessive frost, defrost timer may be bad (Part: PS11743423)

**Common Replacement Parts:**
- Door Gasket (PS11739785) - Poor seal
- Thermostat (PS11741111) - Temperature control issues
- Evaporator Fan Motor (PS11744533) - No air circulation
- Defrost Timer (PS11743423) - Frost buildup

**When to Call a Professional:**
- Compressor issues
- Refrigerant leaks
- Complex electrical problems`,

  "refrigerator_water_leak": `**Refrigerator Water Leak - Troubleshooting Steps:**

1. **Check Water Inlet Valve**
   - Inspect for cracks or damage (Part: PS11747979)
   - Tighten any loose connections
   - Replace if leaking

2. **Inspect Drain Pan**
   - Check if drain pan is cracked
   - Ensure pan is properly positioned
   - Clean if dirty or clogged

3. **Check Water Filter**
   - Verify filter is properly seated (Part: PS11770269)
   - Replace if over 6 months old
   - Check for cracks in filter housing

4. **Door Seal Issues**
   - Check gasket for tears or gaps (Part: PS11739785)
   - Condensation can form with poor seal
   - Replace if damaged

**Common Replacement Parts:**
- Water Inlet Valve (PS11747979)
- Water Filter (PS11770269)
- Door Gasket (PS11739785)`,

  "dishwasher_not_cleaning": `**Dishwasher Not Cleaning Well - Troubleshooting Steps:**

1. **Check Spray Arms**
   - Remove and clean spray arm holes
   - Ensure spray arms rotate freely
   - Replace if damaged (Parts: PS11722114, PS11722115)

2. **Inspect Water Temperature**
   - Water should be at least 120°F
   - Run hot water at sink before starting dishwasher
   - Check heating element (Part: PS11728956)

3. **Clean Filter**
   - Remove and clean dishwasher filter
   - Clogged filter reduces cleaning performance
   - Clean weekly for best results

4. **Check Water Supply**
   - Verify water inlet valve is working
   - Ensure adequate water pressure
   - Listen for water filling during cycle

5. **Loading Technique**
   - Don't overload dishes
   - Face dishes toward spray arms
   - Don't block spray arm rotation

**Common Replacement Parts:**
- Lower Spray Arm (PS11722114)
- Upper Spray Arm (PS11722115)
- Heating Element (PS11728956)

**When to Call a Professional:**
- Pump motor failure
- Control board issues
- Complex electrical problems`,

  "dishwasher_not_draining": `**Dishwasher Not Draining - Troubleshooting Steps:**

1. **Check for Clogs**
   - Clean filter at bottom of tub
   - Check drain hose for kinks or clogs
   - Inspect air gap (if installed)

2. **Test Drain Pump**
   - Listen for pump during drain cycle
   - If no sound, pump may be failed (Part: PS11731956)
   - Check for objects blocking pump

3. **Inspect Drain Hose**
   - Ensure hose is not elevated too high
   - Check for clogs in hose
   - Verify proper connection to drain

4. **Clean Garbage Disposal**
   - If dishwasher drains to disposal, check for clogs
   - Remove disposal knockout plug if new installation

**Common Replacement Parts:**
- Drain Pump and Motor (PS11731956)

**When to Call a Professional:**
- Electrical issues with pump
- Complex plumbing problems`,

  "dishwasher_door_issues": `**Dishwasher Door Won't Latch - Troubleshooting Steps:**

1. **Check Door Latch**
   - Inspect latch assembly for damage
   - Test latch mechanism (Part: PS11750339)
   - Ensure strike plate is aligned

2. **Adjust Door Strike**
   - Loosen and adjust strike plate position
   - Test door closure after adjustment
   - Tighten securely

3. **Inspect Door Hinges**
   - Check for loose or broken hinges
   - Lubricate if stiff
   - Replace if damaged

**Common Replacement Parts:**
- Door Latch Assembly (PS11750339)

**When to Call a Professional:**
- Door hinge replacement
- Control panel issues`
};

module.exports = troubleshooting;
