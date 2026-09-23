import { Book } from "../types/book";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Tôi nói gì khi nói về chạy bộ",
    author: "Haruki Murakami",
    price: 75000,
    originalPrice: 95000,
    discount: "-21%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuP6zfCS-gN1aL2SdZfxJZa3RkgVBEQXJjWEMUFA-vJw&s=10",
    category: "Tự truyện & Hồi ký",
    description:
      "Tập hồi ký ghi lại những suy ngẫm sâu sắc của nhà văn Haruki Murakami về quá trình chạy bộ và viết văn.",
    stock: 25,
  },
  {
    id: 2,
    title: "Chiếc Lexus và cây ô liu",
    author: "Thomas L. Friedman",
    price: 180000,
    originalPrice: 220000,
    discount: "-18%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHjzE-8xO2W1ChUhCDxpfV5Y6QFRzqSlwE0FvT6VmEg&s=10",
    category: "Chính trị & Kinh tế",
    description:
      "Tác phẩm kinh điển về toàn cầu hóa, giải thích những chuyển động địa chính trị và kinh tế thế giới.",
    stock: 15,
  },
  {
    id: 3,
    title: "Dấn thân",
    author: "Sheryl Sandberg",
    price: 120000,
    originalPrice: 150000,
    discount: "-20%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnmx6Av-NX1x60xeNVP8Lz2YqPwY8kjFFPD-yQE-9SQ&s=10",
    category: "Chính trị & Kinh tế",
    description:
      "Cuốn sách truyền cảm hứng về phụ nữ, lãnh đạo và sự nghiệp từ cựu Giám đốc Vận hành Facebook.",
    stock: 30,
  },
  {
    id: 4,
    title: "Phi lý trí",
    author: "Dan Ariely",
    price: 110000,
    originalPrice: 139000,
    discount: "-21%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ex6h9DCRjleEyHatjAHx0D_bPDlXsubU24NdBw9FfA&s=10",
    category: "Tâm lý học",
    description:
      "Khám phá những góc khuất tâm lý học hành vi đằng sau các quyết định tưởng chừng rất hợp lý của con người.",
    stock: 20,
  },
  {
    id: 5,
    title: "Giải mã hoóc-môn dopamine",
    author: "Daniel Z. Lieberman & Michael E. Long",
    price: 135000,
    originalPrice: 169000,
    discount: "-20%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5TWo1Xf-xTga2nw_jrCbDuwqRvPP_JcA7-frts259w&s=10",
    category: "Khoa học thường thức",
    description:
      "Tìm hiểu cách loại hormone khát vọng chi phối đam mê, tình yêu, sự sáng tạo và cả những quyết định trong đời sống.",
    stock: 18,
  },
  {
    id: 6,
    title: "Nhà giả kim",
    author: "Paulo Coelho",
    price: 69000,
    originalPrice: 89000,
    discount: "-22%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSisw-I1ia0Cr21EV9LgSr8WOSZK994AAGkNArmedSIQ&s=10",
    category: "Văn học & Tiểu thuyết",
    description:
      "Hành trình theo đuổi vận mệnh của cậu bé chăn cừu Santiago, chứa đựng nhiều bài học triết lý sâu sắc.",
    stock: 50,
  },
  {
    id: 7,
    title: "Cây cam ngọt của tôi",
    author: "José Mauro de Vasconcelos",
    price: 88000,
    originalPrice: 110000,
    discount: "-20%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOgJIhkw3FPbwaxyfDGvliXoRc7NhHxoixiHUp2qDjQ&s=10",
    category: "Văn học & Tiểu thuyết",
    description:
      "Câu chuyện cảm động về tình cảm gia đình, tình bạn và sự trưởng thành đầy nước mắt của cậu bé Zezé.",
    stock: 40,
  },
  {
    id: 8,
    title: "Vật lý của tương lai",
    author: "Michio Kaku",
    price: 150000,
    originalPrice: 190000,
    discount: "-21%",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSuwCkLmhlquv6d056dL6JhCo2E5FnZ-UG5x8mZQZeUA&s=10",
    category: "Khoa học thường thức",
    description:
      "Dự phóng khoa học đầy lôi cuốn về thế giới và công nghệ trong thế kỷ tới qua góc nhìn của nhà vật lý lý thuyết.",
    stock: 12,
  },
];

export const CATEGORIES = [
  "Tất cả",
  "Tâm lý",
  "Khoa học thường thức",
  "Chính trị & Kinh tế",
  "Tự truyện & Hồi ký",
  "Văn học & Tiểu thuyết",
];
