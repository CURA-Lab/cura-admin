// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 接收告警推送 POST /api/v1/bracelet/push/alarm */
export async function braceletControllerAlarm(
  body: API.BraceletAlarmDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/bracelet/push/alarm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 接收信息推送 POST /api/v1/bracelet/push/report */
export async function braceletControllerReport(
  body: API.BraceletReportDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/bracelet/push/report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 接收状态推送 POST /api/v1/bracelet/push/status */
export async function braceletControllerStatus(
  body: API.BraceletStatusReportDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/bracelet/push/status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
