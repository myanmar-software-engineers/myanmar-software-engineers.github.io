import { Profile } from "contentlayer/generated";
import { shuffle } from "fast-shuffle";

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

    let isAlreadyIncludedInProfile = false;

    if (!!searchTag && !isAlreadyIncludedInProfile) {
      profileTags.forEach((pTag) => {
        if (isAlreadyIncludedInProfile) return;

        if (checkIsFoundTag(pTag, searchTag)) {
          foundProfiles.push(profile);
          isAlreadyIncludedInProfile = true;
        }
      });
    }
  });

  const uniqueTags = getUniqueTags(tags.flat(1));

  return {
    foundProfiles: shuffle(!!searchTag ? foundProfiles : profiles),
    uniqueTags,
  };
};

export const checkIsFoundTag = (profileTag: string, searchTag: string) => {
  const sTagLowerCase = searchTag.toLowerCase();
  const pTagLowerCase = profileTag.toLowerCase();

  const isExactMatch = pTagLowerCase === sTagLowerCase;
  if (isExactMatch) return true;

  const isWithJsOrDotJSMatch =
    pTagLowerCase === sTagLowerCase + "js" ||
    pTagLowerCase === sTagLowerCase + ".js";
  if (isWithJsOrDotJSMatch) return true;

  const isRemoveJsOrDotJsExtensionMatch =
    pTagLowerCase === sTagLowerCase.replace(/\.js$/, "") ||
    pTagLowerCase === sTagLowerCase.replace(/js$/, "");
  if (isRemoveJsOrDotJsExtensionMatch) return true;

  const isAddJsOrDotJsToProfileTagMatch =
    pTagLowerCase + "js" === sTagLowerCase ||
    pTagLowerCase + ".js" === sTagLowerCase;
  if (isAddJsOrDotJsToProfileTagMatch) return true;

  const isTrySwapDotJsAndJsExtMatch =
    pTagLowerCase === sTagLowerCase.replace(/\.js$/, "") + "js" ||
    pTagLowerCase === sTagLowerCase.replace(/js$/, "") + ".js";
  if (isTrySwapDotJsAndJsExtMatch) return true;

  return false;
};
