// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addDevice POST /api/v1/device/add */
export async function deviceControllerAddDevice(
  body: { imei?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/device/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取设备列表 POST /api/v1/device/listByUser */
export async function deviceControllerGetDeviceList(
  body: API.PageBaseDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/device/listByUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 绑定 pet POST /api/v1/device/pet/bind */
export async function deviceControllerBindPet(
  body: API.DeviceBindPetDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/device/pet/bind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解除绑定 pet POST /api/v1/device/pet/unbind */
export async function deviceControllerUnBindPet(
  body: API.DeviceBindPetDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/device/pet/unbind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
