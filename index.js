const queryKey = "Character";

const characterQueryKeys = {
  all: [queryKey],
  lists: () => [{ type: queryKey, id: "LIST" }],
  list: (info) => [
    ...characterQueryKeys.lists(),
    ...Object.values(info).map((value) => ({ type: queryKey, id: value })),
  ],
  characters: () => [{ type: queryKey, id: "CHARACTER_ITEMS" }],
  character: (id) => [
    ...characterQueryKeys.characters(),
    { type: queryKey, id: id },
  ],
};

console.log(characterQueryKeys.list({ name: "fahfuai", page: 2 }));
