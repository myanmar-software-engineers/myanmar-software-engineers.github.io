import { Profile } from "contentlayer/generated";

export const getUniqueTags = (tags: string[]) => {
  const uniqueTags: string[] = [];
  new Set(tags).forEach((tag) => void uniqueTags.push(tag));
  return uniqueTags;
};

export const profileHelperService = (
  profiles: Profile[],
  searchTag: string = ""
) => {
  const tags: string[][] = [];
  const foundProfiles: Profile[] = [];

  // I Juz Wanna loop onetime of profile list
  profiles.forEach((profile) => {
    // Thanks to Bro Hein Thant for tag-search feature
    // https://github.com/heinthanth

    // just clean some invisible space like \r \n \t in the data
    const profileTags = (profile.tags ?? []).map((tag) => tag.trim());
    profile.tags = profileTags;
    tags.push(profileTags);

    if (!!searchTag) {
      let isAlreayIncludedInProfile = false;
      profileTags.forEach((pTag) => {
        const profileTag = pTag.toLowerCase();
        const sTagLowerCase = searchTag.toLowerCase();

        if (isAlreayIncludedInProfile) return;

        if (profileTag === sTagLowerCase) {
          // exact match
          foundProfiles.push(profile);
          isAlreayIncludedInProfile = true;
        } else if (
          profileTag === sTagLowerCase + "js" ||
          profileTag === sTagLowerCase + ".js"
        ) {
          // try add js or .js extension to search tag
          foundProfiles.push(profile);
          isAlreayIncludedInProfile = true;
        } else if (
          profileTag === sTagLowerCase.replace(/\.js$/, "") ||
          profileTag === sTagLowerCase.replace(/js$/, "")
        ) {
          // try remove js or .js extension from search tag
          foundProfiles.push(profile);
          isAlreayIncludedInProfile = true;
        } else if (
          profileTag + "js" === sTagLowerCase ||
          profileTag + ".js" === sTagLowerCase
        ) {
          foundProfiles.push(profile);
          isAlreayIncludedInProfile = true;
        } else if (
          profileTag === sTagLowerCase.replace(/\.js$/, "") + "js" ||
          profileTag === sTagLowerCase.replace(/js$/, "") + ".js"
        ) {
          // try swap .js and js extension
          foundProfiles.push(profile);
          isAlreayIncludedInProfile = true;
        }
      });
    }
  });

  const uniqueTags = getUniqueTags(tags.flat(1));

  return {
    foundProfiles: !!searchTag ? foundProfiles : profiles,
    uniqueTags,
  };
};
