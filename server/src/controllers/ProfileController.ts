import { Request, Response } from "express";
import ProfileService from "../services/ProfileService";

class ProfileController {
  async createOrUpdate(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;
      if (!userId) throw new Error("User ID not found");

      const { name, email, description, photoUrl } = req.body;
      const profileService = new ProfileService();
      const profile = await profileService.createOrUpdateProfile(
        name,
        email,
        userId,
        description,
        photoUrl
      );
      res.json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;
      if (!userId) throw new Error("User ID not found");

      const profileService = new ProfileService();
      const profile = await profileService.getProfile(userId);
      res.json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default ProfileController;
