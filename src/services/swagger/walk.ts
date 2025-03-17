// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取walk详情接口 POST /api/v1/walk/detail */
export async function walkControllerGetDetail(
  body: { walkId?: string },
  options?: { [key: string]: any },
) {
  return request<API.Walk>('/api/v1/walk/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 规划路线 POST /api/v1/walk/directions */
export async function walkControllerDirections(
  body: API.DirectionsDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/walk/directions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 结束行程 POST /api/v1/walk/end */
export async function walkControllerEnd(body: API.EndWalkDto, options?: { [key: string]: any }) {
  return request<any>('/api/v1/walk/end', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 开始行程 POST /api/v1/walk/start */
export async function walkControllerStart(
  body: { petId?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/walk/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
