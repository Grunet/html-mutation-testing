function sgn(a) {
  if (a > 0) {
    return 1;
  } else {
    return -1;
  }
}

module.exports = {
  sgn: sgn,
};
