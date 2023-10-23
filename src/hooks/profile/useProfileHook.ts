import { generateColorArray } from "@/utils";
import { checkIsFoundTag, profileHelperService } from "@/utils/profileHelper";
import { Profile } from "contentlayer/generated";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

const useProfileHook = (initProfiles: Profile[], initSearchTag: string) => {
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [foundProfiles, setFoundProfiles] = useState<Profile[]>([]);
  const [searchedTags, setSelectedTags] = useState<string[]>([]);
  const [uniqueTagColors, setUniqueTagColors] = useState<string[]>();
  const [searchTag, setSearchTag] = useState<string>(initSearchTag);

  const [profiles] = useState<Profile[]>(() => {
    const expensiveCalculation = profileHelperService(
      initProfiles,
      initSearchTag
    );

    setUniqueTags(expensiveCalculation.uniqueTags);

    setFoundProfiles(expensiveCalculation.foundProfiles);

    setSelectedTags(expensiveCalculation.searchedTags);

    setUniqueTagColors(
      generateColorArray(expensiveCalculation.uniqueTags.length)
    );

    return initProfiles;
  });

  const [searchByName, setSearchByName] = useState<string>("");

  const handleSearchByName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchByName(e.target.value);
  }, []);

  const handleSearchTag = useCallback(
    (tagName: string) => {
      const isAlreadySearched = searchedTags.some((tag) =>
        checkIsFoundTag(tagName, tag)
      );

      if (isAlreadySearched) {
        setSearchTag("");
        setSelectedTags((prev) => []);
        setFoundProfiles((profile) => profiles);
        return;
      }

      setFoundProfiles((prevFoundProfiles) => {
        return profiles.filter((profile) => {
          return profile.tags?.some((tag) => checkIsFoundTag(tag, tagName));
        });
      });

      setSelectedTags(
        uniqueTags.filter((tag) => checkIsFoundTag(tag, tagName))
      );

      setSearchTag(tagName);
    },
    [profiles, searchedTags, uniqueTags]
  );

  const filteredProfiles = useMemo(() => {
    const isSetSearchByName = !!searchByName.trim().length;

    if (isSetSearchByName) {
      return foundProfiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchByName.toLowerCase())
      );
    }
    return foundProfiles;
  }, [foundProfiles, searchByName]);

  return {
    searchTag,
    uniqueTagColors,
    profiles,
    searchByName,
    foundProfiles,
    uniqueTags,
    searchedTags,
    filteredProfiles,
    handleSearchByName,
    handleSearchTag,
  };
};
export default useProfileHook;
