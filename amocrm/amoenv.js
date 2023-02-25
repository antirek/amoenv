const {getDomain} = require('./getDomain');
const {getSubDomain} = require('./getSubDomain');
const {getCurrentUserId} = require('./getCurrentUserId');
const {getCurrentUserName} = require('./getCurrentUserName');
const {getCurrentUserPhone} = require('./getCurrentUserPhone');
const {getCurrentUserEmail} = require('./getCurrentUserEmail');
const {getAccountTimezone} = require('./getAccountTimezone');
const {getCurrentCardId} = require('./getCurrentCardId');

class AmoEnv {
  constructor(env) {
    this.env = env;
  }
  getDomain () {
    return getDomain(this.env);
  }
  getSubDomain () {
    return getSubDomain(this.env);
  }
  getCurrentUserId () {
    return getCurrentUserId(this.env);
  }
  getCurrentUserName () {
    return getCurrentUserName(this.env);
  }
  getCurrentUserPhone () {
    return getCurrentUserPhone(this.env);
  }
  getCurrentUserEmail () {
    return getCurrentUserEmail(this.env);
  }
  getAccountTimezone () {
    return getAccountTimezone(this.env);
  }
  getCurrentCardId () {
    return this.getCurrentCardId(this.env);
  }
}

module.exports = {
  AmoEnv,
}
