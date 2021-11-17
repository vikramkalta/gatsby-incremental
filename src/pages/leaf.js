import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Leaf = () => {
    const data = useStaticQuery(graphql`
    query RootQuery {
      allCsRootNode {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  `);
  const nodes = data.allCsRootNode.edges;
  return (
    <div style={{height:'100%', width: '100%', background:'pink'}}>
      <h1>ROOT</h1>
      <Link to="/">Go home</Link>.
      <Link to="/parent1">Go mid-node1</Link>.
      <Link to="/grandparent1">Go to leaf-node1</Link>.
      <Link to="/parent2">Go mid-node2</Link>.
      <Link to="/grandparent2">Go to leaf-node2</Link>.
      {nodes.map((node, i) => (
        <div key={i.toString()}>
          <div>{node.node.title}</div>
          <div>{node.node.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Leaf;