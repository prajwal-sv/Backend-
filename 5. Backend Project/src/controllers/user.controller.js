import {asyncHandler} from '../utils/asyncHandler.js'; 
// Wrapping the async function with asyncHandler to catch and forward errors automatically
const registerUser = asyncHandler(async (req, res) => {

  // Sending a JSON response with status code 200 (OK)
  // This is a placeholder response; you can replace it with actual registration logic
  res.status(200).json({
    message: "ok"
  });

});

export{ registerUser ,}