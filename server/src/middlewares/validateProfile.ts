import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateProfile = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters"),
  body("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),
  body("description")
    .exists()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string")
    .isLength({ max: 200 })
    .withMessage("Description must be less than 200 characters"),
  body("photoUrl").optional().isURL().withMessage("Photo URL must be valid"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
