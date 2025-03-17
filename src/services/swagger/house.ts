// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加房子 POST /api/v1/house/add */
export async function houseControllerAddHouse(
  body: API.AddHouseDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/house/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查找附近的房子 POST /api/v1/house/nearby */
export async function houseControllerGetNearbyHouses(
  body: API.GetNearByDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/house/nearby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
