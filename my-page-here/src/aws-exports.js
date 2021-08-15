const awsconfig = {
    "aws_project_region": process.env.REACT_APP_AWS_REGION,
    "aws_cognito_region": process.env.REACT_APP_AWS_REGION,
    "aws_user_pools_id": process.env.REACT_APP_MAGIC_USER_POOL_ID,
    "aws_user_pools_web_client_id": process.env.REACT_APP_MAGIC_USER_POOL_CLIENT_ID,
    "oauth": {}
  };

export default awsconfig