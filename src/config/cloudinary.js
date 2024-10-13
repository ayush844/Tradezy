import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary instance
const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

// No need for API key and secret on the frontend as it's insecure
export default cloudinary;
