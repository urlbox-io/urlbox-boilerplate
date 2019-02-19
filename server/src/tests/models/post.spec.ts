process.env.NODE_ENV = "testing";

import { Author, IAuthor, Post } from "../../models/models";

describe("Posts", () => {
  it("should insert new post", (done: Function) => {
    const author = new Author();
    author.name = "John";
    author.description = "He is writer";

    author.save(async (err: Error, res: IAuthor) => {
      expect(typeof res).toEqual("object");
      expect(res.name).toEqual("John");

      await Post.create(
        {
          author: res._id,
          description: "Lorem ipsum...",
          title: "Tile 1"
        },
        {
          author: res._id,
          description: "Lorem ipsum...",
          title: "Tile 2"
        }
      );

      const posts = await Post.findAllByAuthor(res._id.toString());

      expect(posts.length).toEqual(2);
      done();
    });
  });
});
