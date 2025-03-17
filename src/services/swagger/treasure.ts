// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加宝箱(此为管理员接口，暂时放在这) POST /api/v1/treasure/add */
export async function treasureControllerAdd(
  body: { longitude?: string; latitude?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/treasure/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的宝箱 POST /api/v1/treasure/mine */
export async function treasureControllerMine(
  body: API.PageBaseDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/treasure/mine', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查找附近的宝箱 POST /api/v1/treasure/nearby */
export async function treasureControllerGetNearby(
  body: API.GetNearByDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/treasure/nearby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 打开宝箱 POST /api/v1/treasure/open */
export async function treasureControllerOpen(
  body: { treasureId?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/treasure/open', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 捡起宝箱 POST /api/v1/treasure/pickUp */
export async function treasureControllerPickUp(
  body: { treasureId?: string; walkId?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/treasure/pickUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
