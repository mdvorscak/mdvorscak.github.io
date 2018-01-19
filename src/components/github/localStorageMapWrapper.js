import lsMapWrap from 'ls-map-wrap';
import cloak from 'cloakjs';

/**
 * mem will always set with val.data and val.maxAge
 */
cloak(lsMapWrap, 'set').cloakWith((key, val, orginalFn) => {
  orginalFn(`${key}-data`, val.data);
  orginalFn(`${key}-maxAge`, val.maxAge);
});

cloak(lsMapWrap, 'get').cloakWith((key, orginalFn) => {
  const recontructedObj = {};
  recontructedObj.data = orginalFn(`${key}-data`);
  recontructedObj.maxAge = orginalFn(`${key}-maxAge`);
  return recontructedObj;
});

cloak(lsMapWrap, 'has').cloakWith((key, orginalFn) => orginalFn(`${key}-data`) && orginalFn(`${key}-maxAge`));

export default lsMapWrap;
