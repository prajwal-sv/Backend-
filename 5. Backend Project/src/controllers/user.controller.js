import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../model/user.model.js';
import { uplodOnCloudnary } from '../utils/cludnary.js';
import { ApiResponse } from '../utils/ApiResponce.js';

// Wrapping the async function with asyncHandler to catch and forward errors automatically
const registerUser = asyncHandler(async (req, res) => {
  // Steps:
  // 1. Get user details from frontend
  // 2. Validate: all fields must be filled
  // 3. Check if user already exists (by email or username)
  // 4. Check for avatar image
  // 5. Upload avatar and cover image to Cloudinary
  // 6. Create user entry in DB
  // 7. Remove sensitive fields from response
  // 8. Return success response

  const { email, username, fullName, password } = req.body;

  console.log("email:", email);

  // Check for empty fields
  if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }]
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // Get local file paths for avatar and cover image
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // Upload avatar to Cloudinary
  const avatar = await uplodOnCloudnary(avatarLocalPath);

  // Upload cover image to Cloudinary (optional)
  const coverImage = await uplodOnCloudnary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar upload failed");
  }

  // Create user in DB
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
  });

  // Remove sensitive fields from response
  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // Send success response
  return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully")
  );
});

export { registerUser };