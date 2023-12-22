const useProfile = () => {
  const profile = {
    imgSrc: process.env.IMG_URL,
    title: process.env.TITLE,
    bio: process.env.BIO
  };

  return profile;
};

export default useProfile;
