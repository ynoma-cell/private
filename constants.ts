
import { WagyuBrand } from './types';

export const WAGYU_DATA: WagyuBrand[] = [
  {
    id: 'shiraoi',
    name: '白老牛',
    prefecture: '北海道',
    region: '北海道',
    description: '北海道の豊かな自然環境で育った、深いコクとまろやかな味わいが特徴。',
    characteristics: ['濃厚な旨み', 'とろける食感', '自然豊かな風味'],
    recommendedCuts: ['カルビ', 'ロース'],
    priceRange: '5,000円〜18,000円',
    imageUrl: 'https://images.unsplash.com/photo-1558034859-04016751c05a?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 82, y: 18 } // 北海道・白老
  },
  {
    id: 'maesawa',
    name: '前沢牛',
    prefecture: '岩手県',
    region: '東北',
    description: '「陸のマグロ」とも称される、鮮やかな霜降りと濃厚な旨みが自慢。',
    characteristics: ['鮮やかな霜降り', '濃厚なコク', '高い香気'],
    recommendedCuts: ['ステーキ', 'すき焼き'],
    priceRange: '8,000円〜25,000円',
    imageUrl: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 80, y: 38 } // 岩手
  },
  {
    id: 'yonezawa',
    name: '米沢牛',
    prefecture: '山形県',
    region: '東北',
    description: '盆地特有の寒暖差が、甘みのある上質な脂と柔らかな肉質を作り出します。',
    characteristics: ['良質な脂の旨み', 'きめ細かな霜降り', '濃厚な味わい'],
    recommendedCuts: ['すき焼き用ロース', 'ランプ'],
    priceRange: '7,000円〜20,000円',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 76, y: 44 } // 山形
  },
  {
    id: 'hida',
    name: '飛騨牛',
    prefecture: '岐阜県',
    region: '中部',
    description: '北アルプスの清らかな水と澄んだ空気の中で育てられた、鮮やかなピンク色の肉質。',
    characteristics: ['美しい霜降り', 'コクのある味わい', '柔らかい繊維'],
    recommendedCuts: ['ロース', 'イチボ'],
    priceRange: '6,000円〜18,000円',
    imageUrl: 'https://images.unsplash.com/photo-1594179047519-f347310d3322?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 63, y: 58 } // 岐阜
  },
  {
    id: 'omi',
    name: '近江牛',
    prefecture: '滋賀県',
    region: '近畿',
    description: '400年以上の歴史を誇る日本最古のブランド牛。琵琶湖周辺の豊かな自然で育まれます。',
    characteristics: ['きめ細かい肉質', '粘りのある脂', '芳醇な香り'],
    recommendedCuts: ['ミスジ', 'モモ'],
    priceRange: '8,000円〜25,000円',
    imageUrl: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 57, y: 62 } // 滋賀
  },
  {
    id: 'matsusaka',
    name: '松阪牛',
    prefecture: '三重県',
    region: '近畿',
    description: '「肉の芸術品」と称される日本三和牛の一つ。きめ細かい霜降りと、甘く深みのある香りが特徴です。',
    characteristics: ['とろけるような食感', '甘い脂肪の香り', '不飽和脂肪酸が豊富'],
    recommendedCuts: ['サーロイン', 'リブロース'],
    priceRange: '15,000円〜40,000円',
    imageUrl: 'https://images.unsplash.com/photo-1511078573295-d856ed417a8a?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 59, y: 68 } // 三重
  },
  {
    id: 'kobe',
    name: '神戸ビーフ',
    prefecture: '兵庫県',
    region: '近畿',
    description: '世界的に有名なブランド。但馬牛の中でも厳しい基準を満たした最高級品です。',
    characteristics: ['繊細なサシ（霜降り）', '特有の旨み', '融点が低い脂'],
    recommendedCuts: ['フィレ', 'シャトーブリアン'],
    priceRange: '12,000円〜35,000円',
    imageUrl: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3973?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 52, y: 63 } // 兵庫
  },
  {
    id: 'olive',
    name: 'オリーブ牛',
    prefecture: '香川県',
    region: '四国',
    description: 'オリーブの果実を与えて育てられた、ヘルシーで旨み豊かな和牛。',
    characteristics: ['オレイン酸が豊富', 'さっぱりした脂身', '抗酸化作用'],
    recommendedCuts: ['赤身ステーキ', 'リブロース'],
    priceRange: '5,000円〜15,000円',
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 47, y: 75 } // 香川
  },
  {
    id: 'saga',
    name: '佐賀牛',
    prefecture: '佐賀県',
    region: '九州',
    description: '厳しい基準をクリアした選りすぐりの牛肉。穏やかな気候が育む至高の味。',
    characteristics: ['美しい「艶さし」', '甘みのある脂', '柔らかな赤身'],
    recommendedCuts: ['ヒレ', 'サーロイン'],
    priceRange: '8,000円〜25,000円',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 12, y: 76 } // 佐賀
  },
  {
    id: 'miyazaki',
    name: '宮崎牛',
    prefecture: '宮崎県',
    region: '九州',
    description: '和牛能力共進会で数々の賞を受賞。南国の太陽の下で健康的に育てられています。',
    characteristics: ['豊潤な旨み', 'なめらかな舌触り', 'バランスの良い霜降り'],
    recommendedCuts: ['サーロイン', '肩ロース'],
    priceRange: '7,000円〜22,000円',
    imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 20, y: 88 } // 宮崎
  }
];
