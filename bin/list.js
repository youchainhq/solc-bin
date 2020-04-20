
var soljsonSources = [
  "soljson-v0.5.16+commit.473cbb72.js",
  "soljson-v0.4.26+commit.bd82957b.js",
  "soljson-v0.4.25+commit.1dba1825.js"
];
var soljsonReleases = {
  "0.5.16": "soljson-v0.5.16+commit.473cbb72.js",
  "0.4.26": "soljson-v0.4.26+commit.bd82957b.js",
  "0.4.25": "soljson-v0.4.25+commit.1dba1825.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
