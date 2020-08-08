# Github_Auth_API

* Oauth 授權程序

client server 端（即用戶端或是前端）: 使用 url 和 client_id 向 GitHub 申請(request)代碼 code。

end user (即使用者)端: 將帳號資訊提供予 client app 使用。

GitHub 官方：傳送 code 給用戶端並且轉址 url: http://localhost:3000?code=katesisagoodcoder

client server 端（即用戶端或是前端）: 傳送 GQL Mutation githubAuth(code)和代碼。

API: 使用憑證(包含 client_id、client_secrete、client_code) 向 GitHub 申請 access_token。

GitHub 官方：回應存取權杖，於未來可使用。

API (後端）: 使用存取權杖請求 end user 資訊。

GitHub 官方： 回應使用者資訊: name、githubLogin、avatar。

API（後端）: 使用 AuthPayload 解析 authUser(code) mutation，內含權仗與使用者。

