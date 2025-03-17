// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加pet POST /api/v1/pet/add */
export async function petControllerAddPet(body: API.AddPetDto, options?: { [key: string]: any }) {
  return request<any>('/api/v1/pet/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的宠物列表 POST /api/v1/pet/mine */
export async function petControllerMine(body: API.PageBaseDto, options?: { [key: string]: any }) {
  return request<any>('/api/v1/pet/mine', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** remove pet POST /api/v1/pet/remove */
export async function petControllerRemovePet(
  body: { petId?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/pet/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 每日运动统计 POST /api/v1/pet/stat/daily */
export async function petControllerStatDaily(
  body: { petId?: string; start?: string; end?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/pet/stat/daily', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
