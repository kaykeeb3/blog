import prisma from "../config/database";

class ProfileRepository {
  async createOrUpdateProfile(
    name: string,
    email: string,
    userId: string,
    description: string,
    photoUrl: string
  ) {
    return await prisma.profile.upsert({
      where: { userId },
      update: {
        name,
        email,
        description,
        photoUrl,
      },
      create: {
        name,
        email,
        userId,
        description,
        photoUrl,
      },
    });
  }

  async getProfile(userId: string) {
    return await prisma.profile.findUnique({
      where: { userId },
    });
  }
}

export default ProfileRepository;
