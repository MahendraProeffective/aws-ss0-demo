import {
  CognitoUserPool,
  ICognitoUserPoolData,
} from "amazon-cognito-identity-js";

const poolData: ICognitoUserPoolData = {
  UserPoolId: "us-east-1_mZdSgPw2D",
  ClientId: "3ed5na1eho8ke14ca4bv719v0f",
};

export default new CognitoUserPool(poolData);
