const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false;
  }
  
  let sample = parseFloat(sampleActivity, 10);

  if (isNaN(sample)) {
    return false;
  }
  if (sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.log(MODERN_ACTIVITY / sample) / k;

  if (time < 0 || !isFinite(time)) {
    return false;
  }

  return Math.ceil(time);
};
