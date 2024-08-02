import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({ 
  cloud_name: "dkwbwczz8", 
  api_key: "875194666772477", 
  api_secret: "PBqbaYhaYL-4V-YAE9rU8rM3DTs"
});
export default cloudinary;