export const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: "hsl(165, 100%, 41%)",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};
