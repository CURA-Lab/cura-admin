// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** pet列表 POST /api/v1/admin/pet/list */
export async function petManagerControllerUserList(
  body: API.PetListRequest,
  options?: { [key: string]: any },
) {
  return request<API.User[]>('/api/v1/admin/pet/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
