const PRELOADED_IMAGES: HTMLImageElement[] = [];

export const PRELOAD_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg",
];

export const preloadImage = (images: string[]) => {
  images
    ?.filter((el) => el)
    .forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => PRELOADED_IMAGES.push(img);
    });
};
