# Health-e
This is an Electronic Health Record Management(EHR) system that stores records in the cloud.

## Authentication
Authentication uses JWT authentication.

When a user logs in, a refreshToken and accessToken is generated and the refreshToken is sent as a cookie. The accessToken is sent back in the response and should be included in the heager of every request.

The refreshToken endpoint generates a new token after verifing that the refreshToken sent in cookie is valid - the refreshToken matches the user in DB, the decoded cookie name matches username found in DB