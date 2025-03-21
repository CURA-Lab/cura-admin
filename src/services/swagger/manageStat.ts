// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** introduceData data POST /api/v1/admin/stat/introduce */
export async function statManagerControllerIntroduceData(options?: { [key: string]: any }) {
  return request<API.IntroduceResponse>('/api/v1/admin/stat/introduce', {
    method: 'POST',
    ...(options || {}),
  });
}
