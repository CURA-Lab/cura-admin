// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 绑定地址 POST /api/v1/user/bindWallet */
export async function userControllerBindWallet(
  body: API.LoginByWalletDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/user/bindWallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户详情接口 POST /api/v1/user/getDetail */
export async function userControllerGetUserDetail(options?: { [key: string]: any }) {
  return request<API.UserDetail>('/api/v1/user/getDetail', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据邮箱密码登录 POST /api/v1/user/login/email */
export async function userControllerLoginByEmail(
  body: API.LoginByEmailDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/user/login/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 校验签名并根据钱包登录 POST /api/v1/user/login/wallet */
export async function userControllerLoginByWallet(
  body: API.LoginByWalletDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/user/login/wallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 POST /api/v1/user/register */
export async function userControllerRegister(
  body: API.RegisterDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户的名称、头像 POST /api/v1/user/updateUserDetail */
export async function userControllerUpdateUserDetail(
  body: API.UpdateUserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/user/updateUserDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/user/uploadFile */
export async function userControllerUploadFile(
  body: API.FileUploadDto,
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<any>('/api/v1/user/uploadFile', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取邮箱获取验证码 POST /api/v1/user/verifyCode/email */
export async function userControllerGetRandomCode(
  body: { email?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/user/verifyCode/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取钱包获取验证码 POST /api/v1/user/verifyCode/wallet */
export async function userControllerGenerateVerifyCodeByWallet(
  body: { wallet?: string },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/user/verifyCode/wallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
