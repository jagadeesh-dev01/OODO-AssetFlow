import { request } from './api';

export const assetService = {
  getAllAssets: () => request('/assets', { method: 'GET' }),
  
  createAsset: (assetData) => request('/assets', {
    method: 'POST',
    body: JSON.stringify(assetData),
  }),
  
  allocateAsset: (id, allocationData) => request(`/assets/${id}/allocate`, {
    method: 'POST',
    body: JSON.stringify(allocationData),
  })
};