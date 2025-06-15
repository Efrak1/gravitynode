export interface Reviews {
    key: string;
    name: string;
    username: string;
    body: string;
    // img?: string; // Раскомментируйте если будете использовать изображения
}

export interface ReviewCardProps {
  name: string;
  username: string;
  body: string;
}