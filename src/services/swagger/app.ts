// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/app/status */
export async function appControllerGetStatus(options?: { [key: string]: any }) {
  return request<any>('/api/v1/app/status', {
    method: 'GET',
    ...(options || {}),
  });
}
