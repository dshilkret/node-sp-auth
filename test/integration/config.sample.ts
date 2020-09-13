import {
  IUserCredentials,
  IOnpremiseUserCredentials,
  IOnpremiseFbaCredentials,
  IOnPremiseAddinCredentials,
  IOnlineAddinCredentials,
  IAdfsUserCredentials
} from './../../src/auth/IAuthOptions';

export const onlineUrl = '[sharepoint online url]';
export const onpremAddin ='https://spwzb27rov2c3sm.eastus2.cloudapp.azure.com';
export const onpremAdfsEnabledUrl = '[sharepint on premise url with adfs configured]';
export const onpremNtlmEnabledUrl = '[sharepint on premise url with ntlm]';
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
  username: '[username]',
  domain: '[domain]',
  password: '[password]'
};

export const onpremUpnCreds: IOnpremiseUserCredentials = {
  username: '[user@domain.com]',
  password: '[password]'
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

export const onpremAddinOnly: IOnPremiseAddinCredentials = {
  clientId: 'b66f7e77-de3e-45d2-ba4c-b1b6405ec214',
  issuerId: '9e9e46c4-6329-4990-a0b8-13b87b3ba56a',
  realm: 'ddd67120-9259-451c-ad8f-b8cc3b28fac3',
  rsaPrivateKeyPath: 'C:\\certs\\HighTrustOAuth.key',
  shaThumbprint: 'QOCIyWwlxy8bM40Og6yzuj9vYkU'
};

export const onlineAddinOnly: IOnlineAddinCredentials = {
  clientId: '[clientId]',
  clientSecret: '[clientSecret]',
  realm: '[realm]'
};

export const adfsCredentials: IAdfsUserCredentials = {
  username: '[username]',
  password: '[password]',
  relyingParty: '[relying party]',
  adfsUrl: '[adfs url]'
};
