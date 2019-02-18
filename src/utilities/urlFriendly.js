const urlFriendly = text => {
  return text
    .replace(/[.*+?^${}()|[\]\\]/g, "")
    .replace(/\s/g, "-")
    .toLowerCase();
};

export default urlFriendly;
