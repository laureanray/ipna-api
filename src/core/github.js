const got = require('got');
const { test } = require('tap');

const checkRepositoryAvailability = async query => {
  return false;
}

const getRepositoryData = async query => {
  return {
    example: "data"
  }
}

module.exports = {
  checkRepositoryAvailability,
  getRepositoryData
}