
export interface WagyuBrand {
  id: string;
  name: string;
  prefecture: string;
  region: string;
  description: string;
  characteristics: string[];
  recommendedCuts: string[];
  priceRange: string;
  imageUrl: string;
  advice: string; // 美食家のワンポイントアドバイス
  coordinates: { x: number; y: number };
}

export type ViewType = 'MAP' | 'LIST' | 'STAMP_BOOK' | 'DETAIL';

export interface AppState {
  collectedStamps: string[];
  currentView: ViewType;
  selectedWagyuId: string | null;
}
