export interface Book {
  id: string | number;
  title: string;
  author: string;
  price: number;
  originalPrice?: number; // Dành cho bài tập badge giảm giá (-20%)
  discount?: string; // Ví dụ: "-20%"
  thumbnailUrl: string;
  category: string;
  description?: string;
  stock?: number;
}
