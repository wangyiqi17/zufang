import request from "@/utils/request"

export const login = (data) => {
  return request({
    method: "POST",
    url: "/user/login",
    data,
  })
}
export const getUserInfo = () => {
  return request({
    method: "GET",
    url: "/v1_0/user",
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`,
    // },
  })
}
