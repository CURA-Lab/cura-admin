// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加骨头(此为管理员接口，暂时放在这) POST /api/v1/bone/add */
export async function boneControllerAdd(
  body: { longitude?: string; latitude?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/bone/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查找附近的骨头 POST /api/v1/bone/nearby */
export async function boneControllerGetNearbyBones(
  body: API.GetNearByDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/bone/nearby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 捡起骨头 POST /api/v1/bone/pickUp */
export async function boneControllerPickUp(
  body: { petId?: string; boneId?: string; walkId?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/bone/pickUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
