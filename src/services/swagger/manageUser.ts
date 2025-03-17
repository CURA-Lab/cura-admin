// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户详情接口 POST /api/v1/admin/user/detail */
export async function userManagerControllerGetUserDetail(options?: { [key: string]: any }) {
  return request<API.UserDetail>('/api/v1/admin/user/detail', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 用户列表 POST /api/v1/admin/user/list */
export async function userManagerControllerUserList(
  body: API.UserListRequest,
  options?: { [key: string]: any },
) {
  return request<API.User[]>('/api/v1/admin/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 每日注册用户统计 POST /api/v1/admin/user/stat/daily/register */
export async function userManagerControllerUserStatDailyRegister(
  body: API.StatBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.StatBase[]>('/api/v1/admin/user/stat/daily/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
