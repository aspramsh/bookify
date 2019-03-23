import { ImageLinks } from "./imageLinks";

export interface VolumeInfo{
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: Date;
    description: string;
    pageCount: number;
    categories: string[];
    averageRating: number;
    ratingCount: number;
    imageLinks: ImageLinks;
    language: string;
    infoLink: string;
}