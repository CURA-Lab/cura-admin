// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 地点评价列表 POST /api/v1/location/comment/list */
export async function locationControllerMine(
  body: API.LocationCommentListDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/location/comment/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看location详情 GET /api/v1/location/detail/${param0} */
export async function locationControllerMetadata(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LocationControllerMetadataParams,
  options?: { [key: string]: any },
) {
  const { placeId: param0, ...queryParams } = params;
  return request<any>(`/api/v1/location/detail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 标记location POST /api/v1/location/mark */
export async function locationControllerMarkLocation(
  body: API.AddLocationDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/location/mark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查找附近的地点 POST /api/v1/location/nearby */
export async function locationControllerGetNearby(
  body: API.GetNearByDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/location/nearby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
