import axios from 'axios';

// getDouYu 
export function getDouYuBarrageAnalyze(params: any) {
  return axios.get<any>('/analyze/dy-video', { params });
}
