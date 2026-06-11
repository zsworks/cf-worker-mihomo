import { buildApiUrl, fetchResponse } from '../../utils/index.js';

export async function getv2ray_config(e) {
    const apiurl = buildApiUrl(e.urls.join(','), e.sub, 'v2ray');
    const res = await fetchResponse(apiurl, e.userAgent, e.globalUaKeyword);
    if (res.data !== undefined && res.data !== null && res.data !== '') {
        return {
            status: res.status,
            headers: res.headers,
            data: res.data,
        };
    } else {
        throw new Error('获取订阅数据失败，请检查订阅链接是否有效');
    }
}
