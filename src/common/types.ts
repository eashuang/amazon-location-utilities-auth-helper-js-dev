// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AwsCredentialIdentity } from "@aws-sdk/types";

// eslint-disable-next-line  @typescript-eslint/no-empty-interface
export interface MapAuthenticationOptions {}

// eslint-disable-next-line  @typescript-eslint/no-empty-interface
export interface LocationClientConfig {}

export type getMapAuthenticationOptionsFunc = () => MapAuthenticationOptions;
export type getLocationClientConfigFunc = () => LocationClientConfig;
export type getCredentialsFunc = () => AwsCredentialIdentity;

export interface AuthHelper extends SDKAuthHelper {
  getMapAuthenticationOptions: getMapAuthenticationOptionsFunc;
  getCredentials: getCredentialsFunc;
}

export interface SDKAuthHelper {
  getLocationClientConfig: getLocationClientConfigFunc;
}