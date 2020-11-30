import {
  IUserCredentials,
  IOnpremiseUserCredentials,
  IOnpremiseFbaCredentials,
  IOnPremiseAddinCredentials,
  IOnlineAddinCredentials,
  IAdfsUserCredentials
} from '../../src/auth/IAuthOptions';

export const onlineUrl = 'https://dtecho365.sharepoint.com/sites/bonzai';
export const onpremAdfsEnabledUrl = 'https://spwzb27rov2c3sm.eastus2.cloudapp.azure.com/';
export const onpremNtlmEnabledUrl = 'https://docintsp2016.discovertechnologies.com/';
export const onpremFbaEnabledUrl = '[sharepint on premise url with fba auth]';

export const onlineCreds: IUserCredentials = {
  username: '[username]',
  password: '[password]'
};

export const onlineWithAdfsCreds: IUserCredentials = {
  username: '[username]',
  password: '[password]'
};

export const onpremCreds: IOnpremiseUserCredentials = {
  username: 'dtech',
  domain: 'spwzb27rov2c3sm.local',
  password: 'DTPass.01'
};

export const onpremUpnCreds: IOnpremiseUserCredentials = {
  username: 'dtech@spwzb27rov2c3sm.local',
  password: 'DTPass.01'
};

export const onpremUserWithDomainCreds: IOnpremiseUserCredentials = {
  username: '[domain\\user]',
  password: '[password]'
};

export const onpremFbaCreds: IOnpremiseFbaCredentials = {
  username: '[username]',
  password: '[password]',
  fba: true
};
/* - for Frog
export const onpremAddinOnly: IOnPremiseAddinCredentials = {
  clientId: 'acc70789-e498-44b9-8fff-1b35dda96b54',
  issuerId: '9e9e46c4-6329-4990-a0b8-13b87b3ba56a',
  realm: 'e876f3a8-4a11-4e8a-a4b4-0e963ba2de04',
  rsaPrivateKeyPath: 'C:\\Users\\sschaff\\node-sp-auth-master\\src\\spaddin.key',
  shaThumbprint: '4zjzuREY0c4JJqlo8qY85YrVs_Y'
};
*/
// - for spwzb27rov2c3sm.eastus2.cloudapp.azure.com
export const onpremAddinOnly: IOnPremiseAddinCredentials = {
  clientId: 'b66f7e77-de3e-45d2-ba4c-b1b6405ec214',
  issuerId: '9e9e46c4-6329-4990-a0b8-13b87b3ba56a',
  realm: 'ddd67120-9259-451c-ad8f-b8cc3b28fac3',
  rsaPrivateKeyPath: 'C:\\Users\\sschaff\\Desktop\\DocInt\\HighTrustOAuth.key',
  shaThumbprint: 'QOCIyWwlxy8bM40Og6yzuj9vYkU'
};

export const onlineAddinOnly: IOnlineAddinCredentials = {
  clientId: '5092f3c3-caa7-4c44-8fd6-8f2bf81113d3',
  clientSecret: '520dnknTIWGDIgdOG0EGQaoT3XuVo+BqGJl6nOs+9ss=',
  realm: 'cc03691b-456c-4116-8ddd-157c08cfe3d2'
};

export const adfsCredentials: IAdfsUserCredentials = {
  username: '[username]',
  password: '[password]',
  relyingParty: '[relying party]',
  adfsUrl: '[adfs url]'
};


 
           

