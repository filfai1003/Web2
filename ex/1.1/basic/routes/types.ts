import { Router } from "express";

export interface Film {
    id: number;
    title: string;
    director: string;
    duration: number;
    budget?: number;
    description?: string;
    imageUrl?: string;
  }
  
  const router = Router();

  export default router;
