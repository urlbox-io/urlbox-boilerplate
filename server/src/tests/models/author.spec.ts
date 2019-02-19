process.env.NODE_ENV = "testing";

import { Author, IAuthor } from "../../models/models";

describe("Models Author", () => {
  let authorObject: IAuthor;

  it("should insert new author", async () => {
    const author = new Author();
    author.name = "John";
    author.age = 30;
    author.description = "He is writer";

    const res = await author.save();
    authorObject = res;

    expect(typeof res).toEqual("object");
    expect(res.name).toEqual("John");
  });

  it("should update user", async () => {
    const results: { nModified: number } = await Author.updateAuthor(
      authorObject._id,
      "He is not writer"
    );

    expect(+results.nModified).toEqual(1);
  });

  it("should update by age", async () => {
    const results: { nModified: number } = await Author.updateByAge(
      21,
      "Good one :)"
    );
    const author: IAuthor = (await Author.findById(authorObject._id)
      .lean()
      .exec()) as IAuthor;

    expect(author.description).toEqual("Good one :)");
    expect(+results.nModified).toEqual(1);
  });
});
