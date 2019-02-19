import * as React from "react";
import { Layout } from "../src/components/Layout";

const SSR: React.NextFunctionComponent<Props> = props => (
  <Layout>{props.name}</Layout>
);

SSR.getInitialProps = async context => {
  const props = {
    name: "some page from CLIENT"
  };
  const server = !!context.req;

  if (server) {
    props.name = await mockFetchName();
  }

  return props;
};
export default SSR;

interface Props {
  name:String;
}
async function mockFetchName() {
  return "some page from SERVER!";
}
