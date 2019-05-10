import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// 获取用户列表
export async function fetchUser(){
  let data = await request('/api/users')
  return data
}

// 获取功能分类列表
export async function fetchClass(){
  let list = await request('/api/class')
  return list
}
